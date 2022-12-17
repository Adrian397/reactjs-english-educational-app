import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { DifficultyType } from "../QuizPage.utils";
import {
  Difficulties,
  QuizIntroduction,
  Wrapper,
} from "./QuizDifficulties.styled";

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

export default QuizDifficulties;
