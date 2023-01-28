import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Modal = styled.div`
  width: 30rem;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem 1rem 1.5rem;
  gap: 1.5rem;
  box-shadow: 26px 20px 13px rgba(0, 0, 0, 0.01),
    14px 11px 11px rgba(0, 0, 0, 0.04), 6px 5px 8px rgba(0, 0, 0, 0.04),
    2px 1px 4px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);

  p:first-of-type {
    color: #333;
    margin-bottom: 1rem;
  }

  h3 {
    color: #825db3;
    margin-bottom: 1.5rem;
  }

  position: relative;
`;

export const Email = styled.div<StyledProps>`
  margin-bottom: 1.5rem;

  input {
    border-radius: 6px;
    border: 2px solid #dbdeea;
    width: 1rem;
    height: 1rem;
    width: 100%;
    padding: 0.2rem 0.7rem;
    height: 1.875rem;
    border-color: ${({ errors, isError }) =>
      errors?.email || isError ? "#fa233b" : "#dbdeea"};
    margin-bottom: ${({ errors, isError }) =>
      errors?.email || isError ? "0.5rem" : "25px"};
    &:focus-visible {
      outline-color: #825db3;
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: #fa233b !important;
    font-weight: 400 !important;

    svg {
      width: 1.0625rem;
      height: 1.0625rem;
      margin-right: 0.25rem;
      fill: #fa233b;
    }
  }
`;

export const SendEmail = styled.div`
  margin-top: auto;
  button {
    width: 100%;
    padding: 0.5rem 0rem;
    background-color: #825db3;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #b3b6cc;
    color: #4a4f67;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  background-color: transparent;
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  cursor: pointer;

  svg {
    fill: #393d51;
  }
`;
