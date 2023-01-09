import styled from "styled-components";

export const ReasonsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 6rem;

  @media (max-width: 1390px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

export const ReasonsImg = styled.div`
  flex: 1;

  img {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 620px) {
    img {
      width: 450px;
      height: 450px;
    }
  }

  @media (max-width: 470px) {
    img {
      width: 350px;
      height: 350px;
    }
  }
`;

export const Reasons = styled.div`
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
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #524f4f;

    span {
      min-width: 2rem;
      min-height: 2rem;
      border-radius: 50%;
      font-weight: 600;
      border: 2px solid #825db3;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media (max-width: 1390px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-align: left;
    }
  }
`;
