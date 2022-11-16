import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <img src="./assets/abstract2.svg" alt="abstract" />
      <img src="./assets/abstract1.svg" alt="abstract" />
      <FooterInfo>
        <h1>LearningApp</h1>

        <div>
          <FooterContact>
            <div>
              <h4>E-mail</h4>
              <p>learningapp@gmail.com</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+48 123 123 123</p>
            </div>
          </FooterContact>

          <FooterSocials>
            <h4>Socials</h4>
            <div>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src="./assets/facebook.svg" alt="facebook" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src="./assets/twitter.svg" alt="twiiter" />
              </a>
              {/* eslint-disable-next-line */}
              <a href="#">
                <img src="./assets/instagram.svg" alt="instagram" />
              </a>
            </div>
          </FooterSocials>
        </div>
      </FooterInfo>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: auto;
  padding: 2rem 0rem;
  position: relative;

  & > img:nth-of-type(1) {
    position: absolute;
    width: max-content;
    height: 200px;
    top: 0;
    right: 0;
    z-index: -1;
  }
  & > img:nth-of-type(2) {
    position: absolute;
    width: max-content;
    height: 200px;
    bottom: 0;
    left: -1rem;
    z-index: -1;
  }

  @media (max-width: 900px) {
    & > img {
      width: max-content;
      height: 150px !important;
    }
  }

  @media (max-width: 665px) {
    & > img {
      width: max-content;
      height: 100px !important;
    }
  }
`;

const FooterInfo = styled.div`
  height: 300px;
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

const FooterContact = styled.div`
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

const FooterSocials = styled.div`
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

export default Footer;
