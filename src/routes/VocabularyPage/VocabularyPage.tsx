import { imgBasePath } from "@utils/imgs";
import { ReactElement, useState } from "react";
import {
  Heading,
  Sentence,
  Sentences,
  Vocabulary,
  Wrapper,
} from "./VocabularyPage.styled";
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

export default VocabularyPage;
