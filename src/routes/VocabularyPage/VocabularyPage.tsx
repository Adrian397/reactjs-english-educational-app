import { vocabularyService } from "@services/VocabularyService";
import { useQuery } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { ReactElement, useState } from "react";
import {
  Heading,
  Sentence,
  Sentences,
  Vocabulary,
  Wrapper,
} from "./VocabularyPage.styled";

const VocabularyPage = (): ReactElement => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isCorrect, setIsCorrect] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const { data, refetch } = useQuery(
    ["vocabulary"],
    vocabularyService.getSentences,
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleRandomSentencesFetch = () => {
    setIsAnimated(true);
    refetch();
    setIsChecked(false);
    setIsCorrect({});
  };

  const handleValueChange = (value: string, id: string) => {
    setIsCorrect((prev) => ({
      ...prev,
      [id]: value === "true",
    }));
  };

  return (
    <Wrapper>
      <Vocabulary>
        <Heading imgSrc={imgBasePath + "/refresh.svg"} isAnimated={isAnimated}>
          <h3>Choose the correct option for each blank...</h3>
          <button
            onAnimationEnd={() => setIsAnimated(false)}
            onClick={handleRandomSentencesFetch}
          />
        </Heading>
        <Sentences>
          {data &&
            data.map((sentence, index) => (
              <Sentence
                isChecked={isChecked}
                isCorrect={isCorrect[sentence._id]}
                key={sentence._id}
              >
                <span>
                  {index + 1}. {sentence.sentenceFirstPart}
                </span>
                <select
                  onChange={(e) =>
                    handleValueChange(e.target.value, sentence._id)
                  }
                >
                  {sentence.answerOptions.map((option) => (
                    <option
                      key={option._id}
                      value={option.isCorrect.toString()}
                    >
                      {option.answerText}
                    </option>
                  ))}
                </select>
                <span>{sentence.sentenceSecondPart}</span>
              </Sentence>
            ))}
        </Sentences>
        <button onClick={() => setIsChecked(true)}>Check</button>
      </Vocabulary>
    </Wrapper>
  );
};

export default VocabularyPage;
