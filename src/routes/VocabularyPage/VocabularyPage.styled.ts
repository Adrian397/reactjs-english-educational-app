import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Sentence = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  span {
    font-size: 1.2rem;
  }

  select {
    margin: 0 0.5rem;
    border: 1px solid;
    padding: 0.2rem;
    border-radius: 4px;
    font-weight: 500;
    border-color: ${({ isChecked, isCorrect }) =>
      !isChecked ? "currentColor" : isCorrect ? "green" : "red"};
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Vocabulary = styled.div`
  width: 65rem;
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  button {
    margin-left: auto;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
  }

  h3 {
    color: #333;
    margin-bottom: 2rem;
  }
`;

export const Heading = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;

  @keyframes refresh {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  button {
    background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    animation: ${({ isAnimated }) => (isAnimated ? "0.5s refresh" : "")};
  }
`;

export const Sentences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;
