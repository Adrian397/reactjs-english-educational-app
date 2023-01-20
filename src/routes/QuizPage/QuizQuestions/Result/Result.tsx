import { quizService } from "@services/QuizService";
import { useMutation } from "@tanstack/react-query";
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

  const { mutate } = useMutation(quizService.setUserScore);

  const handleUserScore = () => {
    mutate({ score, difficulty });
    navigate(paths.app, { replace: true });
  };

  return (
    <Score>
      <p>
        You scored {score} out of {dataLength}
      </p>
      <p>{resultText(difficulty, score)}</p>
      <button onClick={handleUserScore}>Finish</button>
    </Score>
  );
};
