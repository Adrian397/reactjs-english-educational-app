import { ReactElement } from "react";
import styled from "styled-components";

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

const AboutWrapper = styled.section`
  padding: 2rem 6rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 730px) {
    padding: 2rem 1rem;
  }
`;

const AboutInfo = styled.div`
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #825db3;
  }

  p {
    line-height: 1.5;
    color: #9fa2af;
    white-space: normal;
    max-width: 60rem;
    margin: 3.5rem auto;
  }
`;

const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  width: 100%;

  @media (max-width: 1235px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 2rem;
  }

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  width: 15rem;
  height: 13rem;
  background-color: #deccf7;
  border: 2px solid #ceb3f1;
  border-radius: 3px;
  padding: 0 1rem;

  div:nth-child(1) {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    background-color: #ceb3f1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

    img {
      width: 24px;
      height: 24px;
    }
  }

  h3 {
    color: #8551c9;
    margin-bottom: 0.5rem;
  }

  p {
    color: #674692;
    font-weight: 500;
  }
`;
