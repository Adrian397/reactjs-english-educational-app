import styled from "styled-components";

const ReasonsSection = () => {
  return (
    <ReasonsWrapper>
      <ReasonsImg>
        <img src="./reasons.svg" alt="reasons" />
      </ReasonsImg>
      <Reasons>
        <span>REASONS</span>
        <h2>Why would you start learning English?</h2>
        <p>
          <span>1</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>2</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>3</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>4</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
      </Reasons>
    </ReasonsWrapper>
  );
};

const ReasonsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 6rem;
  justify-items: left;
`;

const ReasonsImg = styled.div`
  img {
    width: 600px;
    height: 600px;
  }
`;

const Reasons = styled.div`
  & > span {
    text-transform: uppercase;
    margin-bottom: 1rem;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }

  h2 {
    font-size: 2.625rem;
    color: #333;
    margin-bottom: 2rem;
  }

  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
    color: #9fa2af;

    span {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      font-weight: 600;
      border: 2px solid #825db3;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
    }
  }
`;

export default ReasonsSection;
