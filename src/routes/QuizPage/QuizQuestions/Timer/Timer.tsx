import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  currentPage: number;
  onCurrentPagePage: React.Dispatch<React.SetStateAction<number>>;
  questionsLenght: number;
};

export const Timer = ({
  onCurrentPagePage,
  currentPage,
  questionsLenght,
}: Props): ReactElement => {
  const [timer, setTimer] = useState(10);

  console.log(currentPage);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevState) => prevState - 1);
      }
      if (timer === 0 && currentPage + 1 < questionsLenght) {
        onCurrentPagePage((prevState) => prevState + 1);
        setTimer(10);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <TimerWrapper>
      <span>{timer}</span>
    </TimerWrapper>
  );
};

const TimerWrapper = styled.div`
  border: 5px solid #be63f9;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 22px;
    color: #333;
  }
`;
