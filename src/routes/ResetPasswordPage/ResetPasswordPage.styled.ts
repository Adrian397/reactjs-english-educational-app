import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const PasswordResetWrapper = styled.div`
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
`;

export const ResetForm = styled.form`
  width: 23rem;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1rem;
  z-index: 2137;
  border-radius: 10px;

  h3 {
    color: #825db3;
    margin-bottom: 1rem;
  }

  label {
    color: #333;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input {
    border-radius: 6px;
    border: 2px solid #dbdeea;
    width: 1rem;
    height: 1rem;
    width: 100%;
    padding: 0.2rem 0.7rem;
    height: 1.875rem;
  }

  input:focus-visible {
    outline-color: #825db3;
  }
`;

export const NewPassword = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  position: relative;

  div {
    position: relative;

    input {
      width: 100%;
      margin-bottom: 0.5rem;
      padding-right: ${({ isCapsLockOn }) =>
        isCapsLockOn ? "4.5rem" : "2.5rem"};
      border-color: ${({ errors, errorMsg }) =>
        errors?.newPassword || errorMsg ? "#fa233b" : "#dbdeea"};
    }
  }
`;

export const RepeatNewPassword = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  div {
    position: relative;

    input {
      width: 100%;
      margin-bottom: ${({ errorMsg }) => (errorMsg ? "8px" : "45px")};
      padding-right: ${({ isCapsLockOn }) =>
        isCapsLockOn ? "4.5rem" : "2.5rem"};
      border-color: ${({ errors, errorMsg }) =>
        errors?.newPasswordRepeat || errorMsg ? "#fa233b" : "#dbdeea"};
    }
  }

  p {
    color: #fa233b;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.875rem;
    margin-bottom: 19px;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 0.5rem 0rem;
  background-color: #825db3;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background-color: #b3b6cc;
    color: #4a4f67;
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

    background: ${({ isVisible, imgSrc }) =>
      isVisible
        ? `transparent url(${imgSrc + "view.svg"}) no-repeat center`
        : `transparent url(${imgSrc + "hide.svg"}) no-repeat center`};
    background-size: 18px;
    border: none;
    cursor: pointer;
  }

  span {
    width: 2rem;
    height: 2rem;
    background: transparent url(${({ imgSrc }) => imgSrc + "capsLock.svg"})
      no-repeat center;
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
