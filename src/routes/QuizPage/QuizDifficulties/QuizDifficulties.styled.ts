import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  flex-direction: column;
`;

export const QuizIntroduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333;

  h1 {
    margin-bottom: 1rem;
  }

  p:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }

  p:nth-of-type(2) {
    margin-bottom: 2rem;
  }
`;

export const Difficulties = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
  }

  button:hover {
    background-color: #f5e6fe;
    color: #be63f9;
  }
`;

export const Leaderboard = styled.button`
  padding: 1rem 4rem;
  border-radius: 8px;
  border: none;
  background-color: #117960;
  color: #f5e6fe;
  font-weight: bold;
  cursor: pointer;
  transition: all 120ms ease;
  text-transform: uppercase;
  margin-top: 3rem;
`;
