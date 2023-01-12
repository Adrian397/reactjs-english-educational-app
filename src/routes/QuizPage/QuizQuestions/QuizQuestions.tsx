import { quizService } from "@services/QuizService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { paths } from "@utils/paths";
import { ReactElement, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArgsType } from "../QuizPage.utils";
import {
  AnswerButton,
  Heading,
  NextQuestion,
  Questions,
  Quiz,
  Score,
  Wrapper,
} from "./QuizQuestions.styled";

const QuizQuestions = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const [args, setArgs] = useState<ArgsType>({
    currentPage: 0,
    score: 0,
    isCompleted: false,
    isCorrect: undefined,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [resetTimer, setResetTimer] = useState(0);

  const navigate = useNavigate();
  const difficulty = searchParams.get("difficulty") || "";

  const { data } = useQuery(["quiz", difficulty], () =>
    quizService.getQuestions(difficulty)
  );

  const { mutate } = useMutation(quizService.setUserScore);

  const handleAnswerCorrectness = (isCorrect: boolean) => {
    if (isCorrect) {
      setArgs({
        ...args,
        score: args.score + 1,
        isCorrect: true,
      });
      setIsChecked(true);
    } else {
      setArgs({
        ...args,
        isCorrect: false,
      });
      setIsChecked(true);
    }
  };

  const isResponseCorrect = (isAnswerCorrect: boolean) => {
    if (args.isCorrect === undefined) {
      return;
    }
    if (args.isCorrect) {
      return isAnswerCorrect ? true : undefined;
    }

    return isAnswerCorrect;
  };

  const handleNextPage = () => {
    if (data) {
      if (args.currentPage + 1 < data.length) {
        setArgs({
          ...args,
          currentPage: args.currentPage + 1,
          isCorrect: undefined,
        });
        setResetTimer((prevState) => prevState + 1);
        setIsChecked(false);
      }

      if (args.currentPage + 1 === data.length) {
        setArgs({
          ...args,
          isCompleted: true,
          isCorrect: undefined,
        });
        setResetTimer((prevState) => prevState + 1);
        setIsChecked(false);
      }
    }
  };

  const handleUserScore = () => {
    mutate(args.score);
    navigate(paths.app, { replace: true });
  };

  return (
    <Wrapper>
      {data && (
        <>
          <Quiz isCompleted={args.isCompleted}>
            {args.isCompleted ? (
              <Score>
                <p>
                  You scored {args.score} out of {data.length}
                </p>
                <p>
                  Based on your result, we encourage you to continue working on
                  your progress at <strong>beginner</strong> difficulty.
                </p>
                <button onClick={handleUserScore}>Finish</button>
              </Score>
            ) : (
              <>
                <Heading>
                  <h3>
                    Question {args.currentPage + 1}/{data.length}
                  </h3>
                  {!isChecked && (
                    <CountdownCircleTimer
                      colors="#be63f9"
                      duration={10}
                      isPlaying
                      key={resetTimer}
                      onComplete={() => {
                        setArgs((prevState) => ({
                          ...prevState,
                          isCorrect: false,
                        }));
                        setIsChecked(true);

                        return { shouldRepeat: true };
                      }}
                      size={60}
                      strokeWidth={6}
                    >
                      {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                  )}
                </Heading>
                <p>{data[args.currentPage].questionText}</p>
                <Questions isChecked={isChecked}>
                  {data[args.currentPage].answerOptions.map((answerOption) => (
                    <AnswerButton
                      disabled={isChecked}
                      isCorrect={isResponseCorrect(answerOption.isCorrect)}
                      key={answerOption._id}
                      onClick={() =>
                        handleAnswerCorrectness(answerOption.isCorrect)
                      }
                    >
                      {answerOption.answerText}
                    </AnswerButton>
                  ))}
                </Questions>
                {isChecked && (
                  <NextQuestion onClick={handleNextPage}>Next</NextQuestion>
                )}
              </>
            )}
          </Quiz>
        </>
      )}
    </Wrapper>
  );
};

export default QuizQuestions;
