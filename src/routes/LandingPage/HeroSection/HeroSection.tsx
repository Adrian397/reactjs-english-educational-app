import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { HeroImg, HeroInfo, HeroWrapper } from "./HeroSection.styled";
export const HeroSection = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "HeroSection" });

  return (
    <HeroWrapper>
      <HeroInfo>
        <h1>
          Learning English can be <span>easy</span> and <span>enjoyable</span>
        </h1>
        <p>{t("desc")}</p>
        <a href="#about">Read more</a>
      </HeroInfo>
      <HeroImg>
        <img alt="hero" src="./assets/hero.svg" />
      </HeroImg>
    </HeroWrapper>
  );
};
