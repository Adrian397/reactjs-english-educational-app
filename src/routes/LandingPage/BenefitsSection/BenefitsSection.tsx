import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  Benefits,
  BenefitsImg,
  BenefitsWrapper,
} from "./BenefitsSection.styled";

export const BenefitsSection = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "BenefitsSection" });

  return (
    <BenefitsWrapper id="benefits">
      <BenefitsImg>
        <img alt="benefits" src="./assets/benefits.svg" />
      </BenefitsImg>
      <Benefits>
        <span>{t("benefits")}</span>
        <h2>
          {t("why")}
          <span>
            {t("english")} <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <div>
          <p>
            <span>{t("1")}</span>
            {t("popularity")}
          </p>
          <p>
            <span>{t("2")}</span>
            {t("media")}
          </p>
          <p>
            <span>{t("3")}</span>
            {t("job")}
          </p>
          <p>
            <span>{t("4")}</span>
            {t("traveling")}
          </p>
        </div>
      </Benefits>
    </BenefitsWrapper>
  );
};
