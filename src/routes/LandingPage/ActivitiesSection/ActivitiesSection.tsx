import { ReactElement } from "react";
import styled from "styled-components";

const ActivitiesSection = (): ReactElement => {
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
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet,
          consectetur ad Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum
          dolor sit amet, consectetur ad Lorem ipsum dolor sit amet, consectetur
          ad Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit
          amet, consectetur ad Lorem ipsum dolor sit amet, consectetur ad
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

const ActivitiesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 6rem;

  @media (max-width: 1390px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const ActivitiesInfo = styled.div`
  flex: 1;
  & > span {
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }

  img {
    width: 64px;
    height: 64px;
    position: absolute;
    z-index: -1;
    top: -1rem;
    right: -1rem;
  }

  h2 {
    font-size: 2.625rem;
    color: #333;
    margin-bottom: 2rem;

    span {
      position: relative;
    }
  }

  p {
    color: #9fa2af;
    line-height: 1.5;
  }

  @media (max-width: 1390px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 60rem;
    }
  }
`;

const Activities = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 31.25rem;

  div:nth-child(1) {
    align-self: flex-start;
  }

  div:nth-child(2) {
    align-self: flex-end;
  }

  h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }
  img {
    width: 16.25rem;
    height: 18.75rem;
  }

  @media (max-width: 1390px) {
    width: 100%;
    justify-content: space-evenly;

    div:nth-child(1) {
      align-self: center;
    }

    div:nth-child(2) {
      align-self: center;
    }
  }

  @media (max-width: 645px) {
    flex-direction: column;
  }
`;

export default ActivitiesSection;
