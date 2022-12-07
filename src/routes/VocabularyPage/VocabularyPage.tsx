import { imgBasePath } from "@utils/imgs";
import { StyledProps } from "@utils/styledProps";
import { ReactElement, useState } from "react";
import styled from "styled-components";
import { sentences } from "./VocabularyPage.utils";

const VocabularyPage = (): ReactElement => {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <Wrapper>
      <Vocabulary>
        <Heading imgSrc={imgBasePath + "/refresh.svg"} isAnimated={isAnimated}>
          <h3>Choose the correct option for each blank...</h3>
          <button
            onAnimationEnd={() => setIsAnimated(false)}
            onClick={() => setIsAnimated(true)}
          />
        </Heading>
        <Sentences>
          {sentences.map((sentence, index) => (
            <Sentence key={sentence.id}>
              <span>
                {index + 1}. {sentence.sentenceFirstPart}
              </span>
              <select>
                {sentence.answerOptions.map((option) => (
                  <option key={option.id} value={option.answerText}>
                    {option.answerText}
                  </option>
                ))}
              </select>
              <span>{sentence.sentenceSecondPart}</span>
            </Sentence>
          ))}
        </Sentences>
        <button>Check</button>
      </Vocabulary>
    </Wrapper>
  );
};

const Sentence = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  span {
    font-size: 1.2rem;
  }

  select {
    margin: 0 0.5rem;
    border: none;
    padding: 0.2rem;
    border-radius: 4px;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Vocabulary = styled.div`
  width: 65rem;
  background-color: #eee5fd;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  button {
    margin-left: auto;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: #be63f9;
    color: #f5e6fe;
    font-weight: bold;
    cursor: pointer;
    transition: all 120ms ease;
    text-transform: uppercase;
  }

  h3 {
    color: #333;
    margin-bottom: 2rem;
  }
`;

const Heading = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;

  @keyframes refresh {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  button {
    background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
    background-size: 2rem;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    animation: ${({ isAnimated }) => (isAnimated ? "0.5s refresh" : "")};
  }
`;

const Sentences = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default VocabularyPage;
