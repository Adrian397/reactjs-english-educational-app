import { ReactElement } from "react";
import {
  AboutFeatures,
  AboutInfo,
  AboutWrapper,
  Feature,
} from "./AboutSection.styled";

export const AboutSection = (): ReactElement => {
  return (
    <AboutWrapper id="about">
      <AboutInfo>
        <span>ABOUT</span>
        <h2>
          What is{" "}
          <span>
            Englify? <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>
          It is a service that provides an educational activities for people who
          want step up with their english skills based on their actual level.
          Proven and qualitative educational materials are our hallmark. Feel
          free to explore!
        </p>
      </AboutInfo>

      <AboutFeatures>
        <Feature>
          <div>
            <img alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit
              amet, consectetur ad
            </p>
          </div>
        </Feature>
        <Feature>
          <div>
            <img alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit
              amet, consectetur ad
            </p>
          </div>
        </Feature>
        <Feature>
          <div>
            <img alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit
              amet, consectetur ad
            </p>
          </div>
        </Feature>
        <Feature>
          <div>
            <img alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>Lorem</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit
              amet, consectetur ad
            </p>
          </div>
        </Feature>
      </AboutFeatures>
    </AboutWrapper>
  );
};
