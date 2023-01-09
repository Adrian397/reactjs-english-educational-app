import { ReactElement } from "react";
import {
  Activities,
  ActivitiesInfo,
  ActivitiesWrapper,
} from "./ActivitiesSection.styled";

export const ActivitiesSection = (): ReactElement => {
  return (
    <ActivitiesWrapper id="activities">
      <ActivitiesInfo>
        <span>Activities</span>
        <h2>
          How does the learning look{" "}
          <span>
            like? <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>
          Take part in a grammar quiz or test your knowladge of vocabulary. In
          both cases you have access to the notebook widget that allows you to
          make important notes and then export them in .txt files if needed.{" "}
          <strong>Go challange yourself!</strong>
        </p>
      </ActivitiesInfo>

      <Activities>
        <div>
          <img alt="test" src="./assets/quiz.svg" />
          <h4>QUIZ</h4>
        </div>
        <div>
          <img alt="test" src="./assets/vocabulary.svg" />
          <h4>VOCABULARY</h4>
        </div>
      </Activities>
    </ActivitiesWrapper>
  );
};
