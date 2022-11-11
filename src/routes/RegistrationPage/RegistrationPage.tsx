import { ReactElement } from "react";
import styled from "styled-components";

const RegistrationPage = (): ReactElement => {
  return (
    <RegistrationWrapper>
      <img src="./england.svg" alt="england" />
      <RegistrationForm>
        <h2>LearningApp</h2>
        <Email>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </Email>
        <Username>
          <label htmlFor="username">Nazwa użytkownika:</label>
          <input type="username" id="username" />
        </Username>
        <Password>
          <label htmlFor="password">Hasło:</label>
          <input type="password" id="password" />
        </Password>
        <button>Zarejestuj się</button>
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

const Email = styled.div`
  margin-bottom: 2rem;
`;
const Username = styled.div`
  margin-bottom: 2rem;
`;
const Password = styled.div`
  margin-bottom: 2.5rem;
`;

export default RegistrationPage;
