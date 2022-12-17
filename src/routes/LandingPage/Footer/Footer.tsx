import { ReactElement } from "react";
import {
  FooterContact,
  FooterInfo,
  FooterSocials,
  FooterWrapper,
} from "./Footer.styled";

export const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <img alt="abstract" src="./assets/abstract2.svg" />
      <img alt="abstract" src="./assets/abstract1.svg" />
      <FooterInfo>
        <h1>LearningApp</h1>
        <div>
          <FooterContact>
            <div>
              <h4>E-mail</h4>
              <p>learningapp@gmail.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+48 123 123 123</p>
            </div>
          </FooterContact>

          <FooterSocials>
            <h4>Socials</h4>
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
