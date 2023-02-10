import AuthContext from "@context/AuthContext";
import { quizService } from "@services/QuizService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { paths } from "@utils/paths";
import { ReactElement, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Score } from "./Result.styled";
import { resultTextEN, resultTextPL } from "./Result.utils";

type Props = {
  dataLength: number;
  difficulty: string;
  score: number;
};

export const Result = ({
  score,
  dataLength,
  difficulty,
}: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Quiz" });

  const { currentLanguage } = useContext(AuthContext);

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation(quizService.setUserScore, {
    onSuccess: () => {
      queryClient.invalidateQueries(["quiz"]);
    },
  });

  const handleUserScore = () => {
    mutate({ score, difficulty });
    navigate(paths.quiz, { replace: true });
  };

  return (
    <Score>
      <p>
        {t("scoreFirstPart")} {score} {t("scoreSecondPart")} {dataLength}
        {currentLanguage === "pl" && t("points")}
      </p>
      <p>
        {currentLanguage === "en"
          ? resultTextEN(difficulty, score)
          : resultTextPL(difficulty, score)}
      </p>

      {difficulty !== "adjust" ? (
        <button onClick={handleUserScore}>{t("finish")}</button>
      ) : (
        <button onClick={() => navigate(paths.quiz, { replace: true })}>
          {t("finish")}
        </button>
      )}
    </Score>
  );
};
