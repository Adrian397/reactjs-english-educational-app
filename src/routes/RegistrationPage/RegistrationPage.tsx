import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { StyledProps } from "../../utils/styledProps";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../../utils/validationSchema";

const RegistrationPage = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
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

    // validateOnBlur: false,
  });

  const safePasswordValidate = (password: string) => {
    try {
      const value = passwordValidation.validateSync(password, {
        abortEarly: false,
      });
      return { status: "succcess", value };
    } catch (e) {
      return { status: "error", errors: (e as Yup.ValidationError).errors };
    }
  };

  const allErrors = safePasswordValidate(formik.values.password);

  console.log(formik.isValid);

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
            />
            {formik.values.email.length > 0 && (
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
        <Username errors={formik.errors}>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <div>
            <input
              placeholder="Wprowadź nazwę użytkownika..."
              type="username"
              id="username"
              {...formik.getFieldProps("username")}
            />

            {formik.values.username.length > 0 && (
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
        <Password errors={formik.errors} isVisible={isVisible}>
          <label htmlFor="password">Hasło:</label>
          <div>
            <input
              placeholder="Wprowadź hasło..."
              type={isVisible ? "text" : "password"}
              id="password"
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={() => setIsVisible((prevState) => !prevState)}
            />
          </div>
        </Password>
        <RegistrationButton disabled={!formik.isValid} type="submit">
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

  p {
    font-size: 14px;
    color: #333;

    span {
      text-decoration: underline;
      font-weight: 700;
      margin-left: 0.5rem;
      color: #825db3;
    }
  }
`;

const RegistrationForm = styled.form`
  width: 20.3rem;
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
`;

const Email = styled.div<StyledProps>`
  margin-bottom: 2rem;

  div {
    position: relative;
    input {
      width: 100%;
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
  margin-bottom: 2rem;

  div {
    position: relative;
    input {
      width: 100%;
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
  margin-bottom: 2.5rem;

  div {
    position: relative;
    input {
      width: 100%;
    }

    input:focus {
      border-color: ${({ errors }) =>
        errors?.username || errors?.password ? "#fa233b" : "#dbdeea"};
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
      background: ${({ isVisible }) =>
        isVisible
          ? "transparent url('./assets/view.svg') no-repeat center"
          : "transparent url('./assets/hide.svg') no-repeat center"};
      background-size: 18px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default RegistrationPage;
