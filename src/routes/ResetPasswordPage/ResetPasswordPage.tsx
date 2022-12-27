import { PasswordTip } from "@components/PasswordTip/PasswordTip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { PasswordTips } from "@routes/RegistrationPage/Registration.styled";
import axios from "@services/api/axios";
import { useMutation } from "@tanstack/react-query";
import { KeyNames } from "@utils/keyNames";
import { passwordValidation } from "@utils/validationSchema";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import * as Yup from "yup";
import {
  NewPassword,
  PasswordResetWrapper,
  RepeatNewPassword,
  ResetButton,
  ResetForm,
  TextInfo,
} from "./ResetPassword.styled";
import { ResetPasswordConfirmationModal } from "./ResetPasswordConfirmationModal/ResetPasswordConfirmationModal";

type ResetPasswordArgs = {
  newPassword: string;
  newPasswordRepeat: string;
};

const ResetPasswordPage = (): ReactElement => {
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    new: false,
    repeat: false,
  });
  const [isCapsLockOn, setIsCapsLockOn] = useState({
    new: false,
    repeat: false,
  });
  const [isPasswordTip, setIsPasswordTip] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const resetPassword = async (args: ResetPasswordArgs) => {
    const response = await axios.patch(
      "/users/resetPassword/43160eecb59da6b4e5763f107f936cef53a9a933f668bdf50414f5eb3036ee24",
      {
        password: args.newPassword,
        passwordConfirm: args.newPasswordRepeat,
      }
    );

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: resetPassword,
  });

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      newPasswordRepeat: "",
    },

    validationSchema: Yup.object({
      newPassword: passwordValidation,
      newPasswordRepeat: Yup.string().required(),
    }),

    onSubmit: (values) => {
      mutate(values, {
        onError() {
          setIsError(true);
          formik.resetForm();
        },
        onSuccess: () => {
          setSuccess(true);
        },
      });
    },

    validateOnChange: false,
    validateOnBlur: false,
  });

  const safePasswordValidate = (newPassword: string) => {
    try {
      const value = passwordValidation.validateSync(newPassword, {
        abortEarly: false,
      });
      return { status: "success", value };
    } catch (e) {
      return { status: "error", errors: (e as Yup.ValidationError).errors };
    }
  };

  const allErrors = safePasswordValidate(formik.values.newPassword);

  const checkCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.getModifierState(KeyNames.CapsLock)) {
      setIsCapsLockOn({
        new: true,
        repeat: true,
      });
    } else {
      setIsCapsLockOn({
        new: false,
        repeat: false,
      });
    }
  };

  return (
    <PasswordResetWrapper>
      <img alt="england" src="./assets/england.svg" />
      {isSuccess ? (
        <ResetPasswordConfirmationModal />
      ) : (
        <ResetForm onSubmit={formik.handleSubmit}>
          <h3>Password Reset</h3>
          <NewPassword
            errors={formik.errors}
            isCapsLockOn={isCapsLockOn.new}
            isError={isError}
          >
            <label htmlFor="newPassword">New Password: </label>
            <div>
              <input
                id="newPassword"
                {...formik.getFieldProps("newPassword")}
                onBlur={() => {
                  setIsPasswordTip(false);
                  formik.validateField("newPassword");
                }}
                onFocus={() => setIsPasswordTip(true)}
                onKeyUp={(e) => checkCapsLock(e)}
                type={isPasswordVisible.new ? "text" : "password"}
              />
              <PasswordTips
                isVisible={
                  isPasswordTip || formik.values.newPassword.length >= 1
                }
              >
                <PasswordTip
                  isValidated={allErrors.errors?.includes("CapitalLetterError")}
                  text={"Wielka litera"}
                />
                <PasswordTip
                  isValidated={allErrors.errors?.includes("LowerLetterError")}
                  text={"Mała litera"}
                />
                <PasswordTip
                  isValidated={allErrors.errors?.includes("DigitError")}
                  text={"Cyfra"}
                />
                <PasswordTip
                  isValidated={allErrors.errors?.includes("MinLength")}
                  text={"Min. 8 znaków"}
                />
              </PasswordTips>
              <TextInfo
                isCapsLockOn={isCapsLockOn.new}
                isVisible={isPasswordVisible.new}
              >
                <button
                  onClick={() =>
                    setIsPasswordVisible({
                      ...isPasswordVisible,
                      new: !isPasswordVisible.new,
                    })
                  }
                  type="button"
                />
                <span />
              </TextInfo>
            </div>
          </NewPassword>
          <RepeatNewPassword
            errors={formik.errors}
            isCapsLockOn={isCapsLockOn.repeat}
            isError={isError}
          >
            <label htmlFor="newPasswordRepeat">Repeat new password: </label>
            <div>
              <input
                id="newPasswordRepeat"
                {...formik.getFieldProps("newPasswordRepeat")}
                onKeyUp={(e) => checkCapsLock(e)}
                type={isPasswordVisible.repeat ? "text" : "password"}
              />
              <TextInfo
                isCapsLockOn={isCapsLockOn.repeat}
                isVisible={isPasswordVisible.repeat}
              >
                <button
                  onClick={() =>
                    setIsPasswordVisible({
                      ...isPasswordVisible,
                      repeat: !isPasswordVisible.repeat,
                    })
                  }
                  type="button"
                />
                <span />
              </TextInfo>
            </div>
            {isError && (
              <p>
                <ErrorOutlineIcon />
                Passwords are not the same!
              </p>
            )}
          </RepeatNewPassword>

          <ResetButton
            disabled={
              !(formik.values.newPassword && formik.values.newPasswordRepeat) ||
              !formik.isValid
            }
            type="submit"
          >
            Reset my password
          </ResetButton>
        </ResetForm>
      )}
    </PasswordResetWrapper>
  );
};

export default ResetPasswordPage;
