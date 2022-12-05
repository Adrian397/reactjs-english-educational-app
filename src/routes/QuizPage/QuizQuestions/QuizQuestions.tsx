import { StyledProps } from "@utils/styledProps";
import { ReactElement, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ArgsType, DifficultyType, questions } from "../QuizPage.utils";

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
      setResetTimer((prevKey) => prevKey + 1);
    } else if (!isCorrect && args.currentPage + 1 < questionsLength) {
      setArgs({
        ...args,
        currentPage: args.currentPage + 1,
      });
      setResetTimer((prevKey) => prevKey + 1);
    } else if (isCorrect && args.currentPage + 1 === questionsLength) {
      setArgs({
        ...args,
        isCompleted: true,
        score: args.score + 1,
      });
      setResetTimer((prevKey) => prevKey + 1);
    } else if (!isCorrect && args.currentPage + 1 === questionsLength) {
      setArgs({
        ...args,
        isCompleted: true,
      });
      setResetTimer((prevKey) => prevKey + 1);
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

const Score = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  p:nth-of-type(1) {
    font-size: 1.7rem;
  }

  strong {
    color: #be63f9;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Quiz = styled.div<StyledProps>`
  position: relative;
  width: 60rem;
  height: ${({ isCompleted }) => (isCompleted ? "436px" : "auto")};
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;

  button {
    padding: 0.5rem 1.5rem;
    letter-spacing: 0.2px;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
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

const Questions = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    text-align: left;
    padding: 1rem;
    background-color: white;
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
