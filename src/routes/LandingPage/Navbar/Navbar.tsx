import AuthContext from "@context/AuthContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import i18n from "@utils/i18next";
import { paths } from "@utils/paths";
import { ReactElement, useContext, useState } from "react";
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

  const { currentLanguage, setCurrentLanguage } = useContext(AuthContext);

  const [isMenuVisible, setIsMenuVisible] = useState({
    mobile: false,
    language: false,
  });

  const navigate = useNavigate();

  const handleLanguageChange = () => {
    if (currentLanguage === "en") {
      setCurrentLanguage("pl");
      i18n.changeLanguage("pl");
      localStorage.setItem("language", "pl");
    } else {
      setCurrentLanguage("en");
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
    setIsMenuVisible({ ...isMenuVisible, language: false });
  };

  return (
    <NavWrapper>
      <Logo>
        <h1>Englify</h1>
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
              <a href="#reasons">{t("benefits")}</a>
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
