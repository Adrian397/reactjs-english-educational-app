import { quizService } from "@services/QuizService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Score } from "./Result.styled";
import { resultText } from "./Result.utils";

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
        You scored {score} out of {dataLength}
      </p>
      <p>{resultText(difficulty, score)}</p>

      {difficulty !== "adjust" ? (
        <button onClick={handleUserScore}>Finish</button>
      ) : (
        <button onClick={() => navigate(paths.quiz, { replace: true })}>
          Finish
        </button>
      )}
    </Score>
  );
};
