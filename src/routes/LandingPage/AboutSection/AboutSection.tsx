import styled from "styled-components";

export const AboutSection = () => {
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
            <img src="./assets/star.svg" alt="star" />
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
            <img src="./assets/star.svg" alt="star" />
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
            <img src="./assets/star.svg" alt="star" />
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
            <img src="./assets/star.svg" alt="star" />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 6rem;
`;

const AboutInfo = styled.div`
  text-align: center;
  max-width: 60rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #825db3;
  }

  p {
    margin-bottom: 3.5rem;
    line-height: 1.5;
    color: #9fa2af;
    white-space: normal;
  }
`;

const AboutFeatures = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
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
