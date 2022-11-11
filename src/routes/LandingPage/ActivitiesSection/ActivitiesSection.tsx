import styled from "styled-components";

const ActivitiesSection = () => {
  return (
    <ActivitiesWrapper id="activities">
      <ActivitiesInfo>
        <span>Activities</span>
        <h2>
          How does the learning look{" "}
          <span>
            like? <img src="./circle.svg" alt="circle" />
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
          <img src="./quiz.svg" alt="test" />
          <h4>QUIZ</h4>
        </div>
        <div>
          <img src="./vocabulary.svg" alt="test" />
          <h4>VOCABULARY</h4>
        </div>
        <div>
          <img src="./vocabulary.svg" alt="test" />
          <h4>LOREM</h4>
        </div>
      </Activities>
    </ActivitiesWrapper>
  );
};

const ActivitiesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 6rem;
`;

const ActivitiesInfo = styled.div`
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
`;

const Activities = styled.div`
  display: flex;
  height: 31.25rem;

  div:nth-child(1) {
    align-self: flex-start;
  }

  div:nth-child(2) {
    align-self: center;
  }

  div:nth-child(3) {
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
`;

export default ActivitiesSection;
