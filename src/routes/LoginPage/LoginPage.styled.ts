import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(251, 248, 255);
  overflow: hidden;

  & > img {
    position: absolute;
    bottom: -0.625rem;
    right: -0.625rem;
    height: 56.25rem;
  }

  p:last-child {
    font-size: 0.875rem;
    color: #333;
    font-weight: bold;
    z-index: 2137;

    button {
      text-decoration: underline;
      font-weight: 700;
      margin-left: 0.5rem;
      color: #825db3;
      cursor: pointer;
      background: none;
      border: none;
    }
  }
`;

export const LoginForm = styled.form`
  width: 20.3rem;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
  z-index: 2137;
  border-radius: 10px;

  & > div {
    display: flex;
  }

  & > div:not(:nth-of-type(3)) {
    flex-direction: column;
  }

  & > div:not(:nth-of-type(3)) input {
    padding: 0.5rem;
    border: 2px solid #dbdeea;
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

export const Username = styled.div<StyledProps>`
  margin-bottom: 2rem;

  input {
    border-color: ${({ isError }) =>
      isError ? "#fa233b !important" : "#dbdeea"};
  }
`;

export const Password = styled.div<StyledProps>`
  margin-bottom: 2rem;

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
        width: 1.125rem;
        height: 1.125rem;
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

  & > button {
    text-decoration: underline;
    font-weight: 700;
    font-size: 0.75rem;
    color: #825db3;
    cursor: pointer;
    width: 8rem;
    background: none;
    border: none;
  }
`;

export const TextInfo = styled.div<StyledProps>`
  position: absolute !important;
  display: flex;
  align-items: center;
  top: 2px;
  right: ${({ isCapsLockOn }) => (isCapsLockOn ? "0.5rem" : "0")};
  padding-right: ${({ isCapsLockOn }) => (!isCapsLockOn ? "0.5rem" : "0rem")};

  button {
    width: 2rem;
    height: 2rem;
    top: 0px;
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
    width: 2rem;
    height: 2rem;
    background: url("./assets/capsLock.svg") no-repeat center;
    display: ${({ isCapsLockOn }) => (isCapsLockOn ? "flex" : "none")};

    svg {
      fill: #333;
    }
  }
  img {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const LoginButton = styled.button<StyledProps>`
  width: 100%;
  background-color: ${({ isLoading }) =>
    isLoading ? "rgba(130, 93, 179, 0.7)" : "#825db3"};
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

  div {
    display: flex;
    align-items: center;
    height: 31px;
    justify-content: center;
  }
`;
