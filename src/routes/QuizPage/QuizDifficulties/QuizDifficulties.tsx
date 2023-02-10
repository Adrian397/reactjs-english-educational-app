import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Difficulties,
  Leaderboard,
  QuizIntroduction,
  Wrapper,
} from "./QuizDifficulties.styled";

const QuizDifficulties = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Quiz" });

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
        <h1>{t("welcome")}</h1>
        <p>{t("quizInfo")}</p>
        <p>{t("quizDiffInfo")}</p>
        <Difficulties>
          <div>
            <button onClick={() => handleDifficultyChoice("beginner")}>
              {t("beginner")}
            </button>
            <button onClick={() => handleDifficultyChoice("intermediate")}>
              {t("intermediate")}
            </button>
            <button onClick={() => handleDifficultyChoice("advanced")}>
              {t("advanced")}
            </button>
          </div>
          <button onClick={() => handleDifficultyChoice("adjust")}>
            {t("adjust")}
          </button>
        </Difficulties>
      </QuizIntroduction>
      <Leaderboard onClick={() => navigate(paths.quizLeaderboard)}>
        {t("leaderboard")}
      </Leaderboard>
    </Wrapper>
  );
};

export default QuizDifficulties;
