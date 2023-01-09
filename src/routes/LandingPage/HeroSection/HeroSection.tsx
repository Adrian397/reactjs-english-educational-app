import { ReactElement } from "react";
import { HeroImg, HeroInfo, HeroWrapper } from "./HeroSection.styled";
export const HeroSection = (): ReactElement => {
  return (
    <HeroWrapper>
      <HeroInfo>
        <h1>
          Learning English can be <span>easy</span> and <span>enjoyable</span>
        </h1>
        <p>It is simply about what materials you use and how you learn...</p>
        <a href="#about">Read more</a>
      </HeroInfo>
      <HeroImg>
        <img alt="hero" src="./assets/hero.svg" />
      </HeroImg>
    </HeroWrapper>
  );
};
