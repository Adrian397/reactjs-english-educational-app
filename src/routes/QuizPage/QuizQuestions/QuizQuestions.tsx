import { ReactElement, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArgsType, DifficultyType, questions } from "../QuizPage.utils";
import {
  Heading,
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
    isCorrect: false,
  });
  const [resetTimer, setResetTimer] = useState(0);

  const navigate = useNavigate();
  const difficulty = searchParams.get("difficulty");
  const questionsLength = questions[difficulty as DifficultyType].length;

  const handleAnswerCorrectness = (isCorrect: boolean) => {
    if (isCorrect && args.currentPage + 1 < questionsLength) {
      setArgs({
        ...args,
        currentPage: args.currentPage + 1,
        score: args.score + 1,
      });
      setResetTimer((prevState) => prevState + 1);
    } else if (!isCorrect && args.currentPage + 1 < questionsLength) {
      setArgs({
        ...args,
        currentPage: args.currentPage + 1,
      });
      setResetTimer((prevState) => prevState + 1);
    } else if (isCorrect && args.currentPage + 1 === questionsLength) {
      setArgs({
        ...args,
        isCompleted: true,
        score: args.score + 1,
      });
      setResetTimer((prevState) => prevState + 1);
    } else if (!isCorrect && args.currentPage + 1 === questionsLength) {
      setArgs({
        ...args,
        isCompleted: true,
      });
      setResetTimer((prevState) => prevState + 1);
    }
  };

  return (
    <Wrapper>
      <Quiz isCompleted={args.isCompleted}>
        {args.isCompleted ? (
          <Score>
            <p>
              You scored {args.score} out of {questionsLength}
            </p>
            <p>
              Based on your result, we encourage you to continue working on your
              progress at <strong>beginner</strong> difficulty.
            </p>
            <button onClick={() => navigate(-1)}>Finish</button>
          </Score>
        ) : (
          <>
            <Heading>
              <h3>
                Question {args.currentPage + 1}/{questionsLength}
              </h3>
              <CountdownCircleTimer
                colors="#be63f9"
                duration={10}
                isPlaying
                key={resetTimer}
                onComplete={() => {
                  if (args.currentPage + 1 < questionsLength) {
                    setArgs((prevState) => ({
                      ...prevState,
                      currentPage: prevState.currentPage + 1,
                    }));
                  } else {
                    setArgs({ ...args, isCompleted: true });
                  }

                  return { shouldRepeat: true };
                }}
                size={60}
                strokeWidth={6}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </Heading>
            <p>
              {
                questions[difficulty as DifficultyType][args.currentPage]
                  .questionText
              }
            </p>
            <Questions>
              {questions[difficulty as DifficultyType][
                args.currentPage
              ].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.id}
                  onClick={() =>
                    handleAnswerCorrectness(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </Questions>
          </>
        )}
      </Quiz>
    </Wrapper>
  );
};

export default QuizQuestions;
