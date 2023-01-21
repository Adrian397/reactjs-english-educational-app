import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 6rem;
  height: calc(100vh - 76px);

  @media (max-width: 1241px) {
    height: auto;
    flex-direction: column;
    gap: 4rem;
    padding: 0rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
`;

export const HeroInfo = styled.div`
  flex: 1;
  h1 {
    font-size: 3rem;
    color: #333;
    margin-bottom: 3rem;

    span {
      color: #825db3;
    }
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.5;
    font-size: 1.25rem;
    color: #524f4f;
  }

  a {
    background-color: #825db3;
    font-weight: bold;
    color: white;
    font-size: 1.125rem;
    border: none;
    padding: 0.7rem 1.7rem;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 1241px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2rem;
    }

    p {
      max-width: 35rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const HeroImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: max-content;
    height: 37.5rem;
  }

  @media (max-width: 1241px) {
    img {
      height: 28.125rem;
    }
  }

  @media (max-width: 600px) {
    img {
      height: 18.75rem;
    }
  }
`;
