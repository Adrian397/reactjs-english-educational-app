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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry Lorem Ipsum is simply dummy text of the printing
          and typesetting industryLorem Ipsum is simply dummy text of the
          printing and typesetting industry
        </p>
      </GamesInfo>
      <GamesImg>
        <img alt="games" src="./assets/games.svg" />
      </GamesImg>
    </GamesWrapper>
  );
};
