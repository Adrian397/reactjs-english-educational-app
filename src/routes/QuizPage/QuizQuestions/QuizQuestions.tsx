import { ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DifficultyType, questions } from "../QuizPage.utils";
import { Timer } from "./Timer/Timer.jsx";

const QuizQuestions = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchParams] = useSearchParams();

  const difficulty = searchParams.get("difficulty");

  const questionsLength = questions[difficulty as DifficultyType].length;

  const handleAnswerCorrectness = () => {
    if (currentPage + 1 < questionsLength) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  console.log("rerender");

  return (
    <Wrapper>
      {difficulty && (
        <Quiz>
          <div>
            <h3>
              Pytanie {currentPage + 1}/{questionsLength}
            </h3>
            <Timer
              currentPage={currentPage}
              onCurrentPagePage={setCurrentPage}
              questionsLenght={questionsLength}
            />
          </div>
          <p>
            {questions[difficulty as DifficultyType][currentPage].questionText}
          </p>
          <Questions>
            {questions[difficulty as DifficultyType][
              currentPage
            ].answerOptions.map((answerOption) => (
              <button key={answerOption.id} onClick={handleAnswerCorrectness}>
                {answerOption.answerText}
              </button>
            ))}
          </Questions>
        </Quiz>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const Quiz = styled.div`
  width: 60rem;
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;

  & > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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

const Questions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    text-align: left;
    padding: 1rem;
    background-color: white;
    border: none;
    line-height: 1.5;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    color: #333;
    text-transform: uppercase;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export default QuizQuestions;
