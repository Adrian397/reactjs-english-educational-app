import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DifficultyType } from "../QuizPage.utils";

const QuizDifficulties = (): ReactElement => {
  const navigate = useNavigate();

  const handleDifficultyChoice = (difficulty: DifficultyType) => {
    navigate({
      pathname: paths.quizQuestions,
      search: `?difficulty=${difficulty}`,
    });
  };

  return (
    <Wrapper>
      <QuizIntroduction>
        <h1>Witaj w Quizie!</h1>
        <p>
          Quiz składa się z 3 poziomów trudności i 10 pytań na każdy z nich.
        </p>
        <p>
          Możesz bezpośrednio wybrać jeden z poziomów lub dostosować go po
          odpowiedzeniu na wymieszaną partię pytań.
        </p>
        <Difficulties>
          <div>
            <button onClick={() => handleDifficultyChoice("beginner")}>
              Początkujący
            </button>
            <button onClick={() => handleDifficultyChoice("intermediate")}>
              Średnio zaawansowany
            </button>
            <button onClick={() => handleDifficultyChoice("advanced")}>
              Zaawansowany
            </button>
          </div>
          <button onClick={() => handleDifficultyChoice("beginner")}>
            Zacznij bez wybierania poziomu
          </button>
        </Difficulties>
      </QuizIntroduction>
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

const QuizIntroduction = styled.div`
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

const Difficulties = styled.div`
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

export default QuizDifficulties;
