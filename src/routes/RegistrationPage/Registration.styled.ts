import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const RegistrationWrapper = styled.div`
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

export const RegistrationForm = styled.form`
  width: 23rem;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
  z-index: 2137;
  border-radius: 10px;

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

export const RegistrationButton = styled.button`
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

export const Email = styled.div<StyledProps>`
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
export const Username = styled.div<StyledProps>`
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
export const Password = styled.div<StyledProps>`
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

export const PasswordTips = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  span:last-child {
    margin-right: 0rem;
  }
`;

export const TextInfo = styled.div<StyledProps>`
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