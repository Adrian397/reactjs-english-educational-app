import { asyncWrapper } from "./api/api.utils";
import axios from "./api/axios";

export type QuestionsType = {
  answerOptions: {
    answerText: string;
    id: number;
    isCorrect: boolean;
  };
  questionText: string;
};

const quizServiceDef = () => {
  const getQuestions = asyncWrapper(
    async (difficulty: string): Promise<QuestionsType> => {
      const token = localStorage.getItem("accessToken");

      const response = await axios.get(`/questions`, {
        params: { difficulty },
        headers: {
          Authorization: token,
        },
      });

      return response.data;
    }
  );

  return {
    getQuestions,
  };
};

export const quizService = quizServiceDef();
