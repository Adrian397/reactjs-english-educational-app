import { ReactElement } from "react";
import {
  AboutFeatures,
  AboutInfo,
  AboutWrapper,
  Feature,
  Star,
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
            <img alt="quality" src="./assets/quality.svg" />
          </div>
          <div>
            <h3>Quality</h3>
            <p>
              Guarantee of good quality of the transferred material, checked by
              an English native speaker
            </p>
          </div>
        </Feature>
        <Feature>
          <div>
            <img alt="star" src="./assets/runner.svg" />
          </div>
          <div>
            <h3>Up-to-date</h3>
            <p>
              Rapidly developing application with systematic updates and news
            </p>
          </div>
        </Feature>
        <Feature>
          <div>
            <Star alt="star" src="./assets/star.svg" />
          </div>
          <div>
            <h3>Rating</h3>
            <p>
              Letting user know what level they are currently at based on their
              performance
            </p>
          </div>
        </Feature>

        <Feature>
          <div>
            <img alt="entertainment" src="./assets/confetti.svg" />
          </div>
          <div>
            <h3>Entertainment</h3>
            <p>
              Activities made not only to test yourself but to compete with your
              friends and have fun together
            </p>
          </div>
        </Feature>
      </AboutFeatures>
    </AboutWrapper>
  );
};
