import { ReactElement } from "react";
import { GamesImg, GamesInfo, GamesWrapper } from "./GamesSection.styled";

export const GamesSection = (): ReactElement => {
  return (
    <GamesWrapper id="games">
      <GamesInfo>
        <span>Games</span>
        <h2>
          As a bonus for completing a{" "}
          <span>
            quiz... <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>
          After finishing a quiz you will be awarded with availability to sign
          in into our external games section. You will be able to play the games
          whose level of difficulty are adjusted to the score you achieved in
          the quiz.
        </p>
      </GamesInfo>
      <GamesImg>
        <img alt="games" src="./assets/games.svg" />
      </GamesImg>
    </GamesWrapper>
  );
};
