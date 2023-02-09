import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { GamesImg, GamesInfo, GamesWrapper } from "./GamesSection.styled";

export const GamesSection = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "GamesSection" });

  return (
    <GamesWrapper id="games">
      <GamesInfo>
        <span>{t("games")}</span>
        <h2>
          {t("bonus")}
          <span>
            {t("quiz")} <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>{t("desc")}</p>
      </GamesInfo>
      <GamesImg>
        <img alt="games" src="./assets/games.svg" />
      </GamesImg>
    </GamesWrapper>
  );
};
