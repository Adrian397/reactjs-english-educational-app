import styled from "styled-components";

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
    font-weight: 400 !important;
  }

  position: relative;
`;

export const Email = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #e5f6ff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 1.5rem;
    height: 1.5rem;
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
