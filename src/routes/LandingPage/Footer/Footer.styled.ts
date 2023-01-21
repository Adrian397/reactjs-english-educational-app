import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: auto;
  padding: 2rem 0rem;
  position: relative;

  & > img:nth-of-type(1) {
    position: absolute;
    width: max-content;
    height: 12.5rem;
    top: 0;
    right: 0;
    z-index: -1;
  }
  & > img:nth-of-type(2) {
    position: absolute;
    width: max-content;
    height: 12.5rem;
    bottom: 0;
    left: -1rem;
    z-index: -1;
  }

  @media (max-width: 900px) {
    & > img {
      width: max-content;
      height: 9.375rem !important;
    }
  }

  @media (max-width: 665px) {
    & > img {
      width: max-content;
      height: 9.375rem !important;
    }
  }
`;

export const FooterInfo = styled.div`
  height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4 {
      margin-bottom: 0.5rem;
      color: #333;
    }
  }

  h1 {
    color: #825db3;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;

    & > div {
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: #333;
  }

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 1rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
