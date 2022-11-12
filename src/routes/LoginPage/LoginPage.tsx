import { ReactElement } from "react";
import styled from "styled-components";

const LoginPage = (): ReactElement => {
  return (
    <LoginWrapper>
      <img src="./assets/england.svg" alt="england" />
      <LoginForm>
        <h2>LearningApp</h2>
        <Username>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input type="username" id="username" />
        </Username>
        <Password>
          <label htmlFor="password">Hasło:</label>
          <input type="password" id="password" />
          <span>Zapomniałeś hasła?</span>
        </Password>
        <RememberMe>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Zapamiętaj mnie w przeglądarce</label>
        </RememberMe>

        <button>Zaloguj się</button>
      </LoginForm>
      <p>
        Nie posiadasz konta? <span>Zarejestruj się</span>
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

  button {
    width: 100%;
    padding: 0.5rem 0rem;
    background-color: #825db3;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 6px;
  }

  button:focus-visible {
    outline-color: #825db3;
  }
`;

const Username = styled.div`
  margin-bottom: 2rem;
`;

const Password = styled.div`
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  input {
    margin-bottom: 1rem;
  }

  span {
    text-decoration: underline;
    font-weight: 700;
    margin-left: 0.2rem;
    font-size: 12px;
    color: #825db3;
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
    background-image: url(.assets/check.svg);
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

export default LoginPage;
