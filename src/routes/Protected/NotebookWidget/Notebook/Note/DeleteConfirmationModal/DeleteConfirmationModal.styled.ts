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
  height: 15rem;
  width: 30rem;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 26px 20px 13px rgba(0, 0, 0, 0.01),
    14px 11px 11px rgba(0, 0, 0, 0.04), 6px 5px 8px rgba(0, 0, 0, 0.04),
    2px 1px 4px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);

  p {
    color: #333;
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 3rem;

    button {
      cursor: pointer;
    }

    button:nth-of-type(1) {
      border: none;
      padding: 0;
      text-decoration: underline;
      background-color: transparent;
      color: #4a4f67;
      font-weight: bold;
    }

    button:nth-of-type(2) {
      padding: 0.7rem 1.2rem;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      color: white;
      background-color: #fa233b;
    }
  }
  position: relative;
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

export const Warning = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffeeea;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
