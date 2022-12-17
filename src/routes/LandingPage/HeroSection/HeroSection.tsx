import { ReactElement } from "react";
import { HeroImg, HeroInfo, HeroWrapper } from "./HeroSection.styled";
export const HeroSection = (): ReactElement => {
  return (
    <HeroWrapper>
      <HeroInfo>
        <h1>Lorem Ipsum is simply dummy text of the printing and </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </p>
        <button>Learn more</button>
      </HeroInfo>
      <HeroImg>
        <img alt="hero" src="./assets/hero.svg" />
      </HeroImg>
    </HeroWrapper>
  );
};
