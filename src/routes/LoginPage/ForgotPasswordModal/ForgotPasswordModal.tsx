import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { sessionService } from "@services/SessionService";
import { useMutation } from "@tanstack/react-query";
import { emailValidation } from "@utils/validationSchema";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import * as Yup from "yup";
import { SendEmailSuccessModal } from "../SendEmailSuccessModal/SendEmailSuccessModal";

import {
  Close,
  Email,
  Modal,
  ModalWrapper,
  SendEmail,
} from "./ForgotPasswordModal.styled";

type Props = {
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ForgotPasswordModal = ({ onOpenChange }: Props): ReactElement => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { mutate } = useMutation({
    mutationFn: sessionService.forgotPassword,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: emailValidation,
    }),

    onSubmit: (values) => {
      mutate(values.email, {
        onError() {
          setIsError(true);
          formik.resetForm();
        },
        onSuccess: () => {
          setIsSuccess(true);
        },
      });
    },

    validateOnChange: false,
  });

  return (
    <ModalWrapper>
      {isSuccess ? (
        <SendEmailSuccessModal onOpenChange={onOpenChange} />
      ) : (
        <Modal>
          <Close onClick={() => onOpenChange(false)}>
            <CloseIcon />
          </Close>
          <form onSubmit={formik.handleSubmit}>
            <h3>Forgot Password</h3>
            <p>We will send a password reset link to the following address</p>
            <Email errors={formik.errors} isError={isError}>
              <input
                placeholder="Enter your e-mail..."
                {...formik.getFieldProps("email")}
              />
              {isError && (
                <p>
                  <ErrorOutlineIcon /> There is no user with that email address
                </p>
              )}
              {formik.errors.email && (
                <p>
                  <ErrorOutlineIcon /> Incorrect e-mail format
                </p>
              )}
            </Email>
            <SendEmail>
              <button
                disabled={!formik.values.email || !formik.isValid}
                type="submit"
              >
                Send
              </button>
            </SendEmail>
          </form>
        </Modal>
      )}
    </ModalWrapper>
  );
};
