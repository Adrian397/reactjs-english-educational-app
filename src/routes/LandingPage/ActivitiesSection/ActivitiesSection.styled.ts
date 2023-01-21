import styled from "styled-components";

export const ActivitiesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 6rem;

  @media (max-width: 1390px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ActivitiesInfo = styled.div`
  flex: 1;
  & > span {
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }

  img {
    width: 4rem;
    height: 4rem;
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
    color: #524f4f;
    line-height: 1.5;
    font-size: 1.25rem;
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

export const Activities = styled.div`
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
