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
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolores
          velit at, praesentium incidunt eligendi dolore, adipisci voluptate
          asperiores nobis cumque obcaecati, officia consectetur perspiciatis
          dolorum commodi quibusdam excepturi sapiente. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Sint dolores velit at, praesentium
          incidunt eligendi dolore, adipisci voluptate asperiores nobis cumque
          obcaecati, officia consectetur perspiciatis dolorum commodi quibusdam
          excepturi sapiente.
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
