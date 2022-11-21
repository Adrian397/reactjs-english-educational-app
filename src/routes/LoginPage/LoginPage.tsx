import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { KeyNames } from "../../utils/keyNames";
import { paths } from "../../utils/paths";
import { StyledProps } from "../../utils/styledProps";

const LoginPage = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

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
      console.log(values);
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

  return (
    <LoginWrapper>
      <img src="./assets/england.svg" alt="england" />
      <LoginForm onSubmit={formik.handleSubmit}>
        <h2>LearningApp</h2>
        <Username isError={isError}>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input
            type="username"
            id="username"
            placeholder="Wprowadź nazwę użytkownika..."
            {...formik.getFieldProps("username")}
          />
        </Username>
        <Password isError={isError} isCapsLockOn={isCapsLockOn}>
          <label htmlFor="password">Hasło:</label>
          <div>
            <input
              id="password"
              placeholder="Wprowadź hasło..."
              type={isVisible ? "text" : "password"}
              onKeyUp={(e) => checkCapsLock(e)}
              {...formik.getFieldProps("password")}
            />
            <p>
              <ErrorOutlineIcon /> Błędne hasło lub nazwa użytkownika
            </p>
            <TextInfo isCapsLockOn={isCapsLockOn} isVisible={isVisible}>
              <button
                type="button"
                onClick={() => setIsVisible((prevState) => !prevState)}
              />
              <span />
            </TextInfo>
          </div>
          <span>Zapomniałeś hasła?</span>
        </Password>
        <RememberMe>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Zapamiętaj mnie w przeglądarce</label>
        </RememberMe>

        <LoginButton
          disabled={
            !(formik.values.username && formik.values.password) ||
            !formik.isValid
          }
          type="submit"
        >
          Zaloguj się
        </LoginButton>
      </LoginForm>
      <p>
        Nie posiadasz konta?{" "}
        <span onClick={() => navigate(paths.register)}>Zarejestruj się</span>
      </p>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
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

const LoginForm = styled.form`
  width: 20.3rem;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
  z-index: 2137;

  & > div {
    display: flex;
  }

  & > div:not(:nth-of-type(3)) {
    flex-direction: column;
  }

  & > div:not(:nth-of-type(3)) input {
    padding: 0.5rem;
    border: 1px solid #dbdeea;
    border-radius: 6px;
  }

  & > div:not(:nth-of-type(3)) label {
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  input:focus-visible {
    outline-color: #825db3;
  }

  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
    color: #825db3;
  }
`;

const Username = styled.div<StyledProps>`
  margin-bottom: 2rem;

  input {
    border-color: ${({ isError }) =>
      isError ? "#fa233b !important" : "#dbdeea"};
  }
`;

const Password = styled.div<StyledProps>`
  margin-bottom: 1rem;

  div:first-of-type {
    position: relative;

    input {
      width: 100%;
      margin-bottom: ${({ isError }) => (isError ? "0rem" : "0.5rem")};
      padding-right: ${({ isCapsLockOn }) =>
        isCapsLockOn ? "4.5rem" : "2.5rem"};
      border-color: ${({ isError }) => (isError ? "#fa233b" : "#dbdeea")};
    }

    p {
      color: #fa233b;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.875rem;
      margin: 0.5rem 0rem;
      display: ${({ isError }) => (isError ? "flex" : "none")};

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  label {
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  input {
    margin-bottom: 1rem;
  }

  & > span {
    text-decoration: underline;
    font-weight: 700;
    margin-left: 0.2rem;
    font-size: 12px;
    color: #825db3;
    cursor: pointer;
  }
`;

const RememberMe = styled.div`
  align-items: center;
  margin-bottom: 1.5rem;

  label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
  input {
    appearance: none;
    margin-right: 1rem;
    width: 15px;
    height: 15px;
    border: 2px solid #dbdeea;
    cursor: pointer;
    display: grid;
    place-content: center;
    border-radius: 2px;
  }

  input::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: #825db3;
    background-image: url(./assets/check.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    transform: scale(0);
    transition: transform 120ms ease-in-out;
    border-radius: 2px;
  }

  input:checked::before {
    transform: scale(1);
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

const LoginButton = styled.button`
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

export default LoginPage;
