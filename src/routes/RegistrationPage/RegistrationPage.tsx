import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import { useFormik } from "formik";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { PasswordTip } from "../../components/PasswordTip/PasswordTip";
import { KeyNames } from "../../utils/keyNames";
import { StyledProps } from "../../utils/styledProps";
import {
  emailValidation,
  passwordValidation,
  safePasswordValidate,
  usernameValidation,
} from "../../utils/validationSchema";

const RegistrationPage = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);

  const [isUsernameTip, setIsUsernameTip] = useState(false);
  const [isPasswordTip, setIsPasswordTip] = useState(false);

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
      console.log(values);
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
      ? "Wykorzystano maksymalną ilość znaków"
      : formik.errors.username === "UsernameToShort"
      ? "Niewystarczająca ilość znaków - min. 6"
      : formik.errors.username === "UsernameWrongChar"
      ? "Użyto niedozwolonych znaków"
      : undefined;

  return (
    <RegistrationWrapper>
      <img src="./assets/england.svg" alt="england" />
      <RegistrationForm onSubmit={formik.handleSubmit}>
        <h2>LearningApp</h2>
        <Email errors={formik.errors}>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              placeholder="Wprowadź email..."
              type="email"
              id="email"
              {...formik.getFieldProps("email")}
              onBlur={() => {
                formik.validateField("email");
              }}
            />
            <p>
              <ErrorOutlineIcon /> Nieprawidłowy format e-mail
            </p>

            {formik.values.email.length >= 1 && (
              <button
                type="button"
                onClick={() =>
                  formik.setValues({ ...formik.values, email: "" })
                }
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
          <label htmlFor="username">Nazwa użytkownika:</label>
          <div>
            <input
              placeholder="Wprowadź nazwę użytkownika..."
              type="username"
              id="username"
              {...formik.getFieldProps("username")}
              onBlur={() => {
                setIsUsernameTip(false);
                formik.validateField("username");
              }}
              onFocus={() => setIsUsernameTip(true)}
            />

            <p>Min. 6, Max. 32, bez polskich znaków</p>

            <p>
              <ErrorOutlineIcon /> {errorTranslate}
            </p>

            {formik.values.username.length >= 1 && (
              <button
                type="button"
                onClick={() =>
                  formik.setValues({ ...formik.values, username: "" })
                }
              >
                <CloseRoundedIcon />
              </button>
            )}
          </div>
        </Username>
        <Password errors={formik.errors} isCapsLockOn={isCapsLockOn}>
          <label htmlFor="password">Hasło:</label>
          <div>
            <input
              placeholder="Wprowadź hasło..."
              type={isVisible ? "text" : "password"}
              id="password"
              {...formik.getFieldProps("password")}
              onKeyUp={(e) => checkCapsLock(e)}
              onBlur={() => {
                setIsPasswordTip(false);
                formik.validateField("password");
              }}
              onFocus={() => setIsPasswordTip(true)}
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
                type="button"
                onClick={() => setIsVisible((prevState) => !prevState)}
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
          Zarejestuj się
        </RegistrationButton>
      </RegistrationForm>
      <p>
        Posiadasz już konto? <span>Zaloguj się</span>
      </p>
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(251, 248, 255);
  overflow: hidden;

  img {
    position: absolute;
    bottom: -0.625rem;
    right: -0.625rem;
    height: 56.25rem;
  }

  p:last-child {
    font-size: 0.875rem;
    color: #333;
    z-index: 2137;

    span {
      text-decoration: underline;
      font-weight: 700;
      margin-left: 0.5rem;
      color: #825db3;
      cursor: pointer;
    }
  }
`;

const RegistrationForm = styled.form`
  width: 23rem;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
  z-index: 2137;

  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    color: #825db3;
  }

  & > div {
    display: flex;
    flex-direction: column;

    input {
      padding: 0.5rem;
      padding-right: 2.5rem;
      border: 1px solid #dbdeea;
      border-radius: 6px;
    }

    input:focus-visible {
      outline-color: #825db3;
    }

    label {
      margin-bottom: 0.5rem;
      color: #333;
      font-weight: 600;
    }
  }
`;

const RegistrationButton = styled.button`
  width: 100%;
  padding: 0.5rem 0rem;
  background-color: #825db3;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:focus-visible {
    outline-color: #825db3;
  }

  &:disabled {
    background-color: #b3b6cc;
    color: #4a4f67;
  }
`;

const Email = styled.div<StyledProps>`
  div {
    position: relative;
    input {
      width: 100%;
      margin-bottom: 0.5rem;
      border-color: ${({ errors }) => (errors?.email ? "#fa233b" : "#dbdeea")};
    }

    p {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 14px;
      color: #fa233b !important;
      visibility: ${({ errors }) => (errors?.email ? "visible" : "hidden")};

      svg {
        width: 17px;
        height: 17px;
        margin-right: 4px;
        fill: #fa233b;
      }
    }

    button {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 0;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: #333;
      border: none;
      cursor: pointer;

      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`;
const Username = styled.div<StyledProps>`
  div {
    position: relative;
    input {
      width: 100%;
      margin-bottom: 0.5rem;
      border-color: ${({ errors }) =>
        errors?.username ? "#fa233b" : "#dbdeea"};
    }

    p:nth-of-type(1) {
      visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
      display: ${({ isVisible, errors }) =>
        !isVisible && errors?.username ? "none" : "flex"};
      margin-bottom: 0.5rem;
      font-size: 14px;
      color: #333;
    }

    p:nth-of-type(2) {
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 14px;
      color: #fa233b !important;
      display: ${({ errors }) => (errors?.username ? "flex" : "none")};

      svg {
        width: 17px;
        height: 17px;
        margin-right: 4px;
        fill: #fa233b;
      }
    }

    button {
      width: 2rem;
      height: 2rem;
      position: absolute;
      top: 0;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      color: #333;
      border: none;
      cursor: pointer;

      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`;
const Password = styled.div<StyledProps>`
  margin-bottom: 2rem;

  div {
    position: relative;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
      padding-right: ${({ isCapsLockOn }) =>
        isCapsLockOn ? "4.5rem" : "2.5rem"};
      border-color: ${({ errors }) =>
        errors?.password ? "#fa233b" : "#dbdeea"};
    }
  }
`;

const PasswordTips = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  span:last-child {
    margin-right: 0rem;
  }
`;

const TextInfo = styled.div<StyledProps>`
  position: absolute !important;
  display: flex;
  align-items: center;
  top: 0;
  right: ${({ isCapsLockOn }) => (isCapsLockOn ? "0.5rem" : "0")};
  padding-right: ${({ isCapsLockOn }) => (!isCapsLockOn ? "0.5rem" : "0rem")};

  button {
    width: 2rem;
    height: 2rem;
    top: 0;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ isVisible }) =>
      isVisible
        ? "transparent url('./assets/view.svg') no-repeat center"
        : "transparent url('./assets/hide.svg') no-repeat center"};
    background-size: 18px;
    border: none;
    cursor: pointer;
  }

  span {
    width: 32px;
    height: 32px;
    background: url("./assets/capsLock.svg") no-repeat center;
    display: ${({ isCapsLockOn }) => (isCapsLockOn ? "flex" : "none")};

    svg {
      fill: #333;
    }
  }
  img {
    width: 18px;
    height: 18px;
  }
`;
export default RegistrationPage;
