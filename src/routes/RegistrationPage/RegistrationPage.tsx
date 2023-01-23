import { PasswordTip } from "@components/PasswordTip/PasswordTip";
import { useAuth } from "@hooks/useAuth";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
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
  const { sessionState, setSessionState } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [isUsernameTip, setIsUsernameTip] = useState(false);
  const [isPasswordTip, setIsPasswordTip] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useMutation(sessionService.register);

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
      ? "Maximum number of characters used"
      : formik.errors.username === "UsernameToShort"
      ? "Insufficient number of characters - min. 6"
      : formik.errors.username === "UsernameWrongChar"
      ? "Unauthorized characters were used"
      : undefined;

  if (sessionState.status === "auth") {
    return <Navigate replace to={paths.app} />;
  }

  return (
    <RegistrationWrapper>
      <img alt="england" src="./assets/england.svg" />
      <RegistrationForm onSubmit={formik.handleSubmit}>
        <h2>Registration</h2>
        <Email errors={formik.errors} isError={isError}>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              id="email"
              placeholder="Enter your email..."
              type="email"
              {...formik.getFieldProps("email")}
              onBlur={() => {
                formik.validateField("email");
              }}
            />
            {formik.errors.email && (
              <p>
                <ErrorOutlineIcon /> Incorrect e-mail format
              </p>
            )}

            {isError && (
              <p>
                <ErrorOutlineIcon /> This email is already taken
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
          <label htmlFor="username">Username:</label>
          <div>
            <input
              id="username"
              placeholder="Enter your username..."
              type="username"
              {...formik.getFieldProps("username")}
              onBlur={() => {
                setIsUsernameTip(false);
                formik.validateField("username");
              }}
              onFocus={() => setIsUsernameTip(true)}
            />

            <p>Min. 6, Max. 32, without Polish characters</p>

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
          <label htmlFor="password">Password:</label>
          <div>
            <input
              id="password"
              placeholder="Enter your password..."
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
          type="submit"
        >
          Register
        </RegistrationButton>
      </RegistrationForm>
      <LastParagraph>
        Already have an account? {/* eslint-disable-next-line */}
        <span onClick={() => navigate(paths.login)}>Log in</span>
      </LastParagraph>
    </RegistrationWrapper>
  );
};

export default RegistrationPage;
