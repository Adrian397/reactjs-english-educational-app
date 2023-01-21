import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import {
  Difficulties,
  Leaderboard,
  QuizIntroduction,
  Wrapper,
} from "./QuizDifficulties.styled";

const QuizDifficulties = (): ReactElement => {
  const navigate = useNavigate();

  const handleDifficultyChoice = (difficulty: string) => {
    navigate({
      pathname: paths.quizQuestions,
      search: `?difficulty=${difficulty}`,
    });
  };

  return (
    <Wrapper>
      <QuizIntroduction>
        <h1>Welcome to the quiz!</h1>
        <p>
          The quiz consists of 3 levels of difficulty and 10 questions for each
          level.
        </p>
        <p>
          You can directly select one of the levels or adjust it after answering
          a mixed batch of questions.
        </p>
        <Difficulties>
          <div>
            <button onClick={() => handleDifficultyChoice("beginner")}>
              Beginner
            </button>
            <button onClick={() => handleDifficultyChoice("intermediate")}>
              Intermediate
            </button>
            <button onClick={() => handleDifficultyChoice("advanced")}>
              Advanced
            </button>
          </div>
          <button onClick={() => handleDifficultyChoice("adjust")}>
            Adjust the level
          </button>
        </Difficulties>
      </QuizIntroduction>
      <Leaderboard onClick={() => navigate(paths.quizLeaderboard)}>
        Leaderboard
      </Leaderboard>
    </Wrapper>
  );
};

export default QuizDifficulties;
