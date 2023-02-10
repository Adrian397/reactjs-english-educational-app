import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { sessionService } from "@services/SessionService";
import { useMutation } from "@tanstack/react-query";
import { emailValidation } from "@utils/validationSchema";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("common", { keyPrefix: "ForgotPasswordModal" });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const { mutate } = useMutation(sessionService.forgotPassword);

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
            <h3>{t("forgotPassword")}</h3>
            <p>{t("info")}</p>
            <Email errors={formik.errors} isError={isError}>
              <input
                placeholder={t("enterEmail")}
                {...formik.getFieldProps("email")}
              />
              {isError && (
                <p>
                  <ErrorOutlineIcon /> {t("noUser")}
                </p>
              )}
              {formik.errors.email && (
                <p>
                  <ErrorOutlineIcon /> {t("incorrectEmailFormat")}
                </p>
              )}
            </Email>
            <SendEmail>
              <button
                disabled={!formik.values.email || !formik.isValid}
                type="submit"
              >
                {t("send")}
              </button>
            </SendEmail>
          </form>
        </Modal>
      )}
    </ModalWrapper>
  );
};
