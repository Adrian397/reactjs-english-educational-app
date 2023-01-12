import { asyncWrapper } from "./api/api.utils";
import axios from "./api/axios";

type SentenceType = {
  _id: string;
  answerOptions: {
    _id: string;
    answerText: string;
    isCorrect: boolean;
  }[];
  sentenceFirstPart: string;
  sentenceSecondPart: string;
};

const vocabularyServiceDef = () => {
  const getSentences = asyncWrapper(async (): Promise<SentenceType[]> => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.get("/vocabulary/getSentences", {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  });

  return {
    getSentences,
  };
};
export const vocabularyService = vocabularyServiceDef();
