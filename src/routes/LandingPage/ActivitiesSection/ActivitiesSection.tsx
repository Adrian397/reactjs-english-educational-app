import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  Activities,
  ActivitiesInfo,
  ActivitiesWrapper,
} from "./ActivitiesSection.styled";

export const ActivitiesSection = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "ActivitiesSection" });

  return (
    <ActivitiesWrapper id="activities">
      <ActivitiesInfo>
        <span>{t("activities")}</span>
        <h2>
          {t("headerPartOne")}
          <span>
            {t("headerPartTwo")} <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>
          {t("desc")}
          <strong>{t("challenge")}</strong>
        </p>
      </ActivitiesInfo>

      <Activities>
        <div>
          <img alt="test" src="./assets/quiz.svg" />
          <h4>QUIZ</h4>
        </div>
        <div>
          <img alt="test" src="./assets/vocabulary.svg" />
          <h4>{t("vocabulary")}</h4>
        </div>
      </Activities>
    </ActivitiesWrapper>
  );
};
