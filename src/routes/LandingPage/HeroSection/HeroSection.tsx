import styled from "styled-components";
export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroInfo>
        <h1>Lorem Ipsum is simply dummy text of the printing and </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industryLorem Ipsum is simply dummy text of the printing and
          typesetting industry
        </p>
        <button>Learn more</button>
      </HeroInfo>
      <HeroImg>
        <img src="./hero.svg" alt="hero" />
      </HeroImg>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem 6rem;
  height: calc(100vh - 76px);
`;

const HeroInfo = styled.div`
  h1 {
    font-size: 2rem;
    color: #825db3;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.5;
    color: #9fa2af;
  }

  button {
    background-color: #825db3;
    font-weight: bold;
    color: white;
    font-size: 1.125rem;
    border: none;
    padding: 0.7rem 1.7rem;
    border-radius: 10px;
  }
`;

const HeroImg = styled.div`
  justify-self: center;
  img {
    width: max-content;
    height: 37.5rem;
  }
`;

// const HeroWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem 3rem;
// `;

// const HeroInfo = styled.div`
//   flex: 1;
// `;

// const HeroImg = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   img {
//     width: max-content;
//     height: 600px;
//   }
// `;
