import { vocabularyService } from "@services/VocabularyService";
import { useQuery } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { ReactElement, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Heading,
  Sentence,
  Sentences,
  Vocabulary,
  Wrapper,
} from "./VocabularyPage.styled";

const VocabularyPage = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Vocabulary" });

  const [isAnimated, setIsAnimated] = useState(false);
  const [isCorrect, setIsCorrect] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const selectsRef = useRef<(HTMLSelectElement | null)[]>([]);

  const { data, refetch } = useQuery(
    ["vocabulary"],
    vocabularyService.getSentences,
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleReset = () => {
    setIsAnimated(true);
    refetch();
    setIsChecked(false);
    setIsCorrect({});
    selectsRef.current.forEach((item) => {
      if (!item) {
        return;
      }
      item.value = "";
    });
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
          <h3>{t("vocabularyInfo")}</h3>
          <button
            onAnimationEnd={() => setIsAnimated(false)}
            onClick={handleReset}
          />
        </Heading>
        <Sentences>
          {data &&
            data.map((sentence, index) => (
              <Sentence
                isChecked={isChecked}
                isCorrect={isCorrect[sentence._id as keyof typeof isCorrect]}
                key={sentence._id}
              >
                <span>
                  {index + 1}. {sentence.sentenceFirstPart}
                </span>
                <select
                  onChange={(e) =>
                    handleValueChange(e.target.value, sentence._id)
                  }
                  ref={(node) => (selectsRef.current[index] = node)}
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
        <button onClick={() => setIsChecked(true)}>{t("check")}</button>
      </Vocabulary>
    </Wrapper>
  );
};

export default VocabularyPage;
