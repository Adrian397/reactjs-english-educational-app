import { ReactElement } from "react";
import { Reasons, ReasonsImg, ReasonsWrapper } from "./ReasonsSection.styled";

export const ReasonsSection = (): ReactElement => {
  return (
    <ReasonsWrapper id="reasons">
      <ReasonsImg>
        <img alt="reasons" src="./assets/reasons.svg" />
      </ReasonsImg>
      <Reasons>
        <span>REASONS</span>
        <h2>
          Why would you start learning{" "}
          <span>
            English? <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <div>
          <p>
            <span>1</span>
            It is most widely spoken language in the world
          </p>
          <p>
            <span>2</span>
            It is a language of the media
          </p>
          <p>
            <span>3</span>
            Increase your chances of getting a good job
          </p>
          <p>
            <span>4</span>
            Travel around the world with no worry of being misunderstood
          </p>
        </div>
      </Reasons>
    </ReasonsWrapper>
  );
};
