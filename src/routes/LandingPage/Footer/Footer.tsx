import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  FooterContact,
  FooterInfo,
  FooterSocials,
  FooterWrapper,
} from "./Footer.styled";

export const Footer = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "FooterSection" });

  return (
    <FooterWrapper>
      <img alt="abstract" src="./assets/abstract2.svg" />
      <img alt="abstract" src="./assets/abstract1.svg" />
      <FooterInfo>
        <h1>Englify</h1>
        <div>
          <FooterContact>
            <div>
              <h4>E-mail</h4>
              <p>englify@gmail.com</p>
            </div>
          </FooterContact>
          <FooterSocials>
            <h4>{t("socials")}</h4>
            <div>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img alt="facebook" src="./assets/facebook.svg" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img alt="twiiter" src="./assets/twitter.svg" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img alt="instagram" src="./assets/instagram.svg" />
              </a>
            </div>
          </FooterSocials>
        </div>
      </FooterInfo>
    </FooterWrapper>
  );
};
