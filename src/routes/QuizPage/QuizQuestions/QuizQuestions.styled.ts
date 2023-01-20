import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quiz = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60rem;
  height: ${({ isCompleted }) => (isCompleted ? "436px" : "auto")};
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;

  h3 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #333;
    margin-bottom: 2rem;
    line-height: 1.5;
    font-weight: 500;
  }
`;

export const Questions = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: ${({ isChecked }) => (isChecked ? "1.5rem" : "")};
`;

export const AnswerButton = styled.button<StyledProps>`
  text-align: left;
  padding: 1rem;
  background-color: white;
  line-height: 1.5;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid transparent;
  border-color: ${({ isCorrect }) =>
    isCorrect ? "green" : !isCorrect && isCorrect !== undefined ? "red" : ""};
  cursor: pointer;
  color: #333;
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export const NextQuestion = styled.button`
  margin-left: auto;
  padding: 0.6rem 1rem;
  border: none;
  background-color: #be63f9;
  color: white;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-left: auto;
`;
