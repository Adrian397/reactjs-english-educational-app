import { useAuth } from "@hooks/useAuth";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { sessionService } from "@services/SessionService";
import { useMutation } from "@tanstack/react-query";
import { KeyNames } from "@utils/keyNames";
import { paths } from "@utils/paths";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ForgotPasswordModal } from "./ForgotPasswordModal/ForgotPasswordModal";
import {
  LoginButton,
  LoginForm,
  LoginWrapper,
  Password,
  TextInfo,
  Username,
} from "./LoginPage.styled";

const LoginPage = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "LoginPage" });

  const { sessionState, setSessionState } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(sessionService.login);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
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

    validateOnChange: false,
    validateOnBlur: false,
  });

  const checkCapsLock = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.getModifierState(KeyNames.CapsLock)) {
      setIsCapsLockOn(true);
    } else {
      setIsCapsLockOn(false);
    }
  };

  if (sessionState.status === "auth") {
    return <Navigate replace to={paths.app} />;
  }
  return (
    <LoginWrapper>
      {isOpen && <ForgotPasswordModal onOpenChange={setIsOpen} />}
      <img alt="england" src="./assets/england.svg" />
      <LoginForm autoComplete="off" onSubmit={formik.handleSubmit}>
        <h2>{t("login")}</h2>
        <Username isError={isError}>
          <label htmlFor="username">{t("username")}</label>
          <input
            id="username"
            placeholder={t("enterUsername")}
            type="username"
            {...formik.getFieldProps("username")}
          />
        </Username>
        <Password isCapsLockOn={isCapsLockOn} isError={isError}>
          <label htmlFor="password">{t("password")}</label>
          <div>
            <input
              id="password"
              onKeyUp={(e) => checkCapsLock(e)}
              placeholder={t("enterPassword")}
              type={isVisible ? "text" : "password"}
              {...formik.getFieldProps("password")}
            />
            <p>
              <ErrorOutlineIcon /> {t("wrongCredentials")}
            </p>
            <TextInfo isCapsLockOn={isCapsLockOn} isVisible={isVisible}>
              <button
                onClick={() => setIsVisible((prevState) => !prevState)}
                type="button"
              />
              <span />
            </TextInfo>
          </div>
          <button onClick={() => setIsOpen(true)} type="button">
            {t("forgotPassword")}
          </button>
        </Password>

        <LoginButton
          disabled={
            !(formik.values.username && formik.values.password) ||
            !formik.isValid
          }
          isLoading={isLoading}
          type="submit"
        >
          <div>
            {isLoading ? (
              <CircularProgress color="inherit" size="23px" />
            ) : (
              t("log in")
            )}
          </div>
        </LoginButton>
      </LoginForm>
      <p>
        {t("noAccount")} {/* eslint-disable-line */}
        <button onClick={() => navigate(paths.register)}>
          {t("register")}
        </button>
      </p>
    </LoginWrapper>
  );
};

export default LoginPage;
