import styled from "styled-components";

export const Score = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  button {
    padding: 0.5rem 1.5rem;
    letter-spacing: 0.2px;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
  }

  p:nth-of-type(1) {
    font-size: 1.7rem;
  }

  strong {
    color: #be63f9;
  }
`;
