import axios from "@api/axios";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useMutation } from "@tanstack/react-query";
import { KeyNames } from "@utils/keyNames";
import { paths } from "@utils/paths";

import { useFormik } from "formik";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as Yup from "yup";
import {
  LoginButton,
  LoginForm,
  LoginWrapper,
  Password,
  RememberMe,
  TextInfo,
  Username,
} from "./LoginPage.styled";
import { LoginArgs } from "./LoginPage.utils";

const LoginPage = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const login = async (args: LoginArgs) => {
    const response = await axios.post("/users/login", {
      username: args.username,
      password: args.password,
    });

    return response;
  };

  const { mutate } = useMutation({
    mutationFn: login,
  });

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

  return (
    <LoginWrapper>
      <img alt="england" src="./assets/england.svg" />
      <LoginForm onSubmit={formik.handleSubmit}>
        <h2>Logowanie</h2>
        <Username isError={isError}>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input
            id="username"
            placeholder="Wprowadź nazwę użytkownika..."
            type="username"
            {...formik.getFieldProps("username")}
          />
        </Username>
        <Password isCapsLockOn={isCapsLockOn} isError={isError}>
          <label htmlFor="password">Hasło:</label>
          <div>
            <input
              id="password"
              onKeyUp={(e) => checkCapsLock(e)}
              placeholder="Wprowadź hasło..."
              type={isVisible ? "text" : "password"}
              {...formik.getFieldProps("password")}
            />
            <p>
              <ErrorOutlineIcon /> Błędne hasło lub nazwa użytkownika
            </p>
            <TextInfo isCapsLockOn={isCapsLockOn} isVisible={isVisible}>
              <button
                onClick={() => setIsVisible((prevState) => !prevState)}
                type="button"
              />
              <span />
            </TextInfo>
          </div>
          <span>Zapomniałeś hasła?</span>
        </Password>
        <RememberMe>
          <input id="rememberMe" type="checkbox" />
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
        Nie posiadasz konta? {/* eslint-disable-next-line */}
        <span onClick={() => navigate(paths.register)}>Zarejestruj się</span>
      </p>
    </LoginWrapper>
  );
};

export default LoginPage;
