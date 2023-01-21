import styled from "styled-components";

export const AboutWrapper = styled.section`
  padding: 2rem 6rem;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 730px) {
    padding: 2rem 1rem;
  }
`;

export const AboutInfo = styled.div`
  text-align: center;
  width: 100%;

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
    line-height: 1.5;
    color: #524f4f;
    white-space: normal;
    max-width: 60rem;
    margin: 3.5rem auto;
    font-size: 1.25rem;
  }
`;

export const AboutFeatures = styled.div`
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

export const Feature = styled.div`
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
  }

  img {
    width: 1.75rem;
    height: 1.75rem;
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

export const Star = styled.img`
  width: 1.5rem !important;
  height: 1.5rem !important;
`;
