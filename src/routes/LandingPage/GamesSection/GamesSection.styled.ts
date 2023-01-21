import styled from "styled-components";

export const GamesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;

  @media (max-width: 920px) {
    padding: 2rem 1rem;
  }
`;

export const GamesInfo = styled.div`
  text-align: center;
  max-width: 60rem;
  & > span {
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }

  h2 {
    font-size: 2.625rem;
    color: #333;
    margin-bottom: 2rem;

    span {
      position: relative;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    z-index: -1;
    top: -1rem;
    right: -1rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.5;
    color: #524f4f;
    font-size: 1.25rem;
  }
`;

export const GamesImg = styled.div`
  img {
    width: max-content;
    height: 37.5rem;
  }

  @media (max-width: 900px) {
    img {
      width: max-content;
      height: 28.125rem;
    }
  }

  @media (max-width: 665px) {
    img {
      width: max-content;
      height: 18.75rem;
    }
  }
`;
