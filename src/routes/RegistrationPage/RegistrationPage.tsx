import { PasswordTip } from "@components/PasswordTip/PasswordTip";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import axios from "@services/api/axios";
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
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  Email,
  Password,
  PasswordTips,
  RegistrationButton,
  RegistrationForm,
  RegistrationWrapper,
  TextInfo,
  Username,
} from "./Registration.styled";
import { RegisterArgs } from "./RegistrationPage.utils";

const RegistrationPage = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [isUsernameTip, setIsUsernameTip] = useState(false);
  const [isPasswordTip, setIsPasswordTip] = useState(false);

  const navigate = useNavigate();

  const register = async (args: RegisterArgs) => {
    const response = await axios.post("/users/register", {
      username: args.username,
      email: args.email,
      password: args.password,
    });

    console.log(response.data);

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: register,
  });

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
        onSuccess: () => {
          navigate(paths.app);
        },
      });
    },

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

  return (
    <RegistrationWrapper>
      <img alt="england" src="./assets/england.svg" />
      <RegistrationForm onSubmit={formik.handleSubmit}>
        <h2>Registration</h2>
        <Email errors={formik.errors}>
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
            <p>
              <ErrorOutlineIcon /> Incorrect e-mail format
            </p>

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
      <p>
        Already have an account? {/* eslint-disable-next-line */}
        <span onClick={() => navigate(paths.login)}>Log in</span>
      </p>
    </RegistrationWrapper>
  );
};

export default RegistrationPage;
