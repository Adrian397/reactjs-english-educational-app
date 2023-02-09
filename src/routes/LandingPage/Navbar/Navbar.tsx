import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import i18n from "@utils/i18next";
import { paths } from "@utils/paths";
import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  Buttons,
  Logo,
  NavButtons,
  NavList,
  NavListMobile,
  NavWrapper,
} from "./Navbar.styled";

export const Navbar = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Navbar" });

  const [isMenuVisible, setIsMenuVisible] = useState({
    mobile: false,
    language: false,
  });
  const [currentLanguage, setCurrentLanguage] = useState("pl");

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      setCurrentLanguage(language);
      i18n.changeLanguage(language);
    }
  }, []);

  const navigate = useNavigate();

  const handleLanguageChange = () => {
    if (currentLanguage === "pl") {
      setCurrentLanguage("en");
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    } else {
      setCurrentLanguage("pl");
      i18n.changeLanguage("pl");
      localStorage.setItem("language", "pl");
    }
    setIsMenuVisible({ ...isMenuVisible, language: false });
  };

  return (
    <NavWrapper>
      <Logo>
        <h1>{t("logo")}</h1>
      </Logo>
      <NavList>
        <li>
          <a href="#about">{t("about")}</a>
        </li>
        <li>
          <a href="#benefits">{t("benefits")}</a>
        </li>
        <li>
          <a href="#activities">{t("activities")}</a>
        </li>
        <li>
          <a href="#games">{t("games")}</a>
        </li>
      </NavList>
      <div>
        <Buttons isVisible={isMenuVisible.language}>
          <NavButtons>
            <button onClick={() => navigate(paths.login)}>{t("logIn")}</button>
            <button onClick={() => navigate(paths.register)}>
              {t("register")}
            </button>
          </NavButtons>
          <div>
            <button
              onClick={() =>
                setIsMenuVisible({
                  ...isMenuVisible,
                  language: !isMenuVisible.language,
                })
              }
            >
              {currentLanguage} <KeyboardArrowDownIcon />
            </button>
            <div>
              <button onClick={handleLanguageChange}>
                {currentLanguage === "en" ? "pl" : "en"}
              </button>
            </div>
          </div>
        </Buttons>

        <NavListMobile isVisible={isMenuVisible.mobile}>
          <button
            onClick={() =>
              setIsMenuVisible({
                ...isMenuVisible,
                mobile: !isMenuVisible.mobile,
              })
            }
          />
          <ul>
            <li>
              <a href="#about">{t("about")}</a>
            </li>
            <li>
              <a href="#reasons">{t("reasons")}</a>
            </li>
            <li>
              <a href="#activities">{t("activities")}</a>
            </li>
            <li>
              <a href="#games">{t("games")}</a>
            </li>
          </ul>
        </NavListMobile>
      </div>
    </NavWrapper>
  );
};
