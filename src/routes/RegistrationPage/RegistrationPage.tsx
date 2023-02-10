import { PasswordTip } from "@components/PasswordTip/PasswordTip";
import { useAuth } from "@hooks/useAuth";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { sessionService } from "@services/SessionService";
import { useMutation } from "@tanstack/react-query";
import { KeyNames } from "@utils/keyNames";
import { paths } from "@utils/paths";
import {
  emailValidation,
  passwordValidation,
  safePasswordValidate,
  usernameValidation,
} from "@utils/validationSchema";

import { useFormik } from "formik";
import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  Email,
  LastParagraph,
  Password,
  PasswordTips,
  RegistrationButton,
  RegistrationForm,
  RegistrationWrapper,
  TextInfo,
  Username,
} from "./Registration.styled";

const RegistrationPage = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "RegistrationPage" });

  const { sessionState, setSessionState } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [isUsernameTip, setIsUsernameTip] = useState(false);
  const [isPasswordTip, setIsPasswordTip] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(sessionService.register);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: emailValidation,
      username: usernameValidation,
      password: passwordValidation,
    }),

    onSubmit: (values) => {
      mutate(values, {
        onError: () => {
          setIsError(true);
          formik.resetForm();
        },

        onSuccess: (response) => {
          formik.resetForm();

          const accessToken = response.data.token;
          setSessionState({ status: "auth", accessToken });

          navigate(paths.app);
        },
      });
    },

    validateOnBlur: false,
    validateOnChange: false,
  });

  const checkCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.getModifierState(KeyNames.CapsLock)) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  const allErrors = safePasswordValidate(formik.values.password);

  const errorTranslate =
    formik.errors.username === "UsernameToLong"
      ? t("usernameToLong")
      : formik.errors.username === "UsernameToShort"
      ? t("usernameToShort")
      : formik.errors.username === "UsernameWrongChar"
      ? t("wrongChar")
      : undefined;

  if (sessionState.status === "auth") {
    return <Navigate replace to={paths.app} />;
  }

  return (
    <RegistrationWrapper>
      <img alt="england" src="./assets/england.svg" />
      <RegistrationForm onSubmit={formik.handleSubmit}>
        <h2>{t("registration")}</h2>
        <Email errors={formik.errors} isError={isError}>
          <label htmlFor="email">{t("email")}</label>
          <div>
            <input
              id="email"
              placeholder={t("enterEmail")}
              type="email"
              {...formik.getFieldProps("email")}
              onBlur={() => {
                formik.validateField("email");
              }}
            />
            {formik.errors.email && (
              <p>
                <ErrorOutlineIcon /> {t("wrongEmailFormat")}
              </p>
            )}

            {isError && (
              <p>
                <ErrorOutlineIcon /> {t("emailTaken")}
              </p>
            )}

            {formik.values.email.length >= 1 && (
              <button
                onClick={() =>
                  formik.setValues({ ...formik.values, email: "" })
                }
                type="button"
              >
                <CloseRoundedIcon />
              </button>
            )}
          </div>
        </Email>
        <Username
          errors={formik.errors}
          isVisible={isUsernameTip || formik.values.username.length >= 1}
        >
          <label htmlFor="username">{t("username")}</label>
          <div>
            <input
              id="username"
              placeholder={t("enterUsername")}
              type="username"
              {...formik.getFieldProps("username")}
              onBlur={() => {
                setIsUsernameTip(false);
                formik.validateField("username");
              }}
              onFocus={() => setIsUsernameTip(true)}
            />

            <p>{t("usernameInfo")}</p>

            <p>
              <ErrorOutlineIcon /> {errorTranslate}
            </p>

            {formik.values.username.length >= 1 && (
              <button
                onClick={() =>
                  formik.setValues({ ...formik.values, username: "" })
                }
                type="button"
              >
                <CloseRoundedIcon />
              </button>
            )}
          </div>
        </Username>
        <Password errors={formik.errors} isCapsLockOn={isCapsLockOn}>
          <label htmlFor="password">{t("password")}</label>
          <div>
            <input
              id="password"
              placeholder={t("enterPassword")}
              type={isVisible ? "text" : "password"}
              {...formik.getFieldProps("password")}
              onBlur={() => {
                setIsPasswordTip(false);
                formik.validateField("password");
              }}
              onFocus={() => setIsPasswordTip(true)}
              onKeyUp={(e) => checkCapsLock(e)}
            />
            <PasswordTips
              isVisible={isPasswordTip || formik.values.password.length >= 1}
            >
              <PasswordTip
                isValidated={allErrors.errors?.includes("CapitalLetterError")}
                text={t("capital")}
              />
              <PasswordTip
                isValidated={allErrors.errors?.includes("LowerLetterError")}
                text={t("lowercase")}
              />
              <PasswordTip
                isValidated={allErrors.errors?.includes("DigitError")}
                text={t("digit")}
              />
              <PasswordTip
                isValidated={allErrors.errors?.includes("MinLength")}
                text={t("min8Chars")}
              />
            </PasswordTips>
            <TextInfo isCapsLockOn={isCapsLockOn} isVisible={isVisible}>
              <button
                onClick={() => setIsVisible((prevState) => !prevState)}
                type="button"
              />
              <span />
            </TextInfo>
          </div>
        </Password>
        <RegistrationButton
          disabled={
            !(
              formik.values.username &&
              formik.values.password &&
              formik.values.email
            ) || !formik.isValid
          }
          isLoading={isLoading}
          type="submit"
        >
          <div>
            {isLoading ? (
              <CircularProgress color="inherit" size="23px" />
            ) : (
              t("register")
            )}
          </div>
        </RegistrationButton>
      </RegistrationForm>
      <LastParagraph>
        {t("accountExist")}
        <button onClick={() => navigate(paths.login)}>{t("log in")}</button>
      </LastParagraph>
    </RegistrationWrapper>
  );
};

export default RegistrationPage;
