import { PasswordTip } from "@components/PasswordTip/PasswordTip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { PasswordTips } from "@routes/RegistrationPage/Registration.styled";
import { sessionService } from "@services/SessionService";
import { useMutation } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { KeyNames } from "@utils/keyNames";
import { passwordValidation } from "@utils/validationSchema";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  NewPassword,
  PasswordResetWrapper,
  RepeatNewPassword,
  ResetButton,
  ResetForm,
  TextInfo,
} from "./ResetPasswordPage.styled";
import { ResetPasswordSuccessModal } from "./ResetPasswordSuccessModal/ResetPasswordSuccessModal";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const { token } = useParams();

  const { mutate } = useMutation(sessionService.resetPassword);

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
      mutate(
        {
          ...values,
          token: token ? token : "",
        },
        {
          /*eslint-disable-next-line*/
          onError(error: any) {
            setErrorMsg(error.response.data.message);
            formik.resetForm();
          },
          onSuccess: () => {
            setSuccess(true);
          },
        }
      );
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
      <img alt="england" src={imgBasePath + "/england.svg"} />
      {isSuccess ? (
        <ResetPasswordSuccessModal />
      ) : (
        <ResetForm onSubmit={formik.handleSubmit}>
          <h3>Password Reset</h3>
          <NewPassword
            errorMsg={errorMsg}
            errors={formik.errors}
            isCapsLockOn={isCapsLockOn.new}
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
                imgSrc={imgBasePath}
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
            errorMsg={errorMsg}
            errors={formik.errors}
            isCapsLockOn={isCapsLockOn.repeat}
          >
            <label htmlFor="newPasswordRepeat">Repeat new password: </label>
            <div>
              <input
                id="newPasswordRepeat"
                {...formik.getFieldProps("newPasswordRepeat")}
                onBlur={() => {
                  formik.validateField("newPasswordRepeat");
                }}
                onKeyUp={(e) => checkCapsLock(e)}
                type={isPasswordVisible.repeat ? "text" : "password"}
              />
              <TextInfo
                imgSrc={imgBasePath}
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
            {errorMsg && (
              <p>
                <ErrorOutlineIcon />
                {errorMsg}
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
