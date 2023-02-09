import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  AboutFeatures,
  AboutInfo,
  AboutWrapper,
  Feature,
  Star,
} from "./AboutSection.styled";

export const AboutSection = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "AboutSection" });
  return (
    <AboutWrapper id="about">
      <AboutInfo>
        <span>{t("about")}</span>
        <h2>
          {t("whatIs")}
          <span>
            Englify? <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>{t("desc")}</p>
      </AboutInfo>
      <AboutFeatures>
        <Feature>
          <div>
            <img alt="quality" src="./assets/quality.svg" />
          </div>
          <div>
            <h3>{t("quality")}</h3>
            <p>{t("qualityDesc")}</p>
          </div>
        </Feature>
        <Feature>
          <div>
            <img alt="star" src="./assets/runner.svg" />
          </div>
          <div>
            <h3>{t("upToDate")}</h3>
            <p>{t("upToDateDesc")}</p>
          </div>
        </Feature>
        <Feature>
          <div>
            <Star alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>{t("rating")}</h3>
            <p>{t("ratingDesc")}</p>
          </div>
        </Feature>

        <Feature>
          <div>
            <img alt="entertainment" src="./assets/confetti.svg" />
          </div>
          <div>
            <h3>{t("entertainment")}</h3>
            <p>{t("entertainmentDesc")}</p>
          </div>
        </Feature>
      </AboutFeatures>
    </AboutWrapper>
  );
};
