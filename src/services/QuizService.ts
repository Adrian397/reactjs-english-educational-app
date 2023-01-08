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

      try {
        const response = await axios.get("/questions", {
          params: { difficulty },
          headers: {
            Authorization: token,
          },
        });

        return response.data;
      } catch (e) {
        throw new Error("Custom");
      }
    }
  );

  const setUserScore = asyncWrapper(async (score: number) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.post(
        "/questions/setScore",
        { score },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  });

  return {
    getQuestions,
    setUserScore,
  };
};

export const quizService = quizServiceDef();
