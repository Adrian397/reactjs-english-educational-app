import { asyncWrapper } from "./api/api.utils";
import axios from "./api/axios";

export type QuestionsType = {
  answerOptions: {
    _id: string;
    answerText: string;
    isCorrect: boolean;
  }[];
  questionText: string;
};

const quizServiceDef = () => {
  const getQuestions = asyncWrapper(
    async (difficulty: string): Promise<QuestionsType[]> => {
      const token = localStorage.getItem("accessToken");

      const response = await axios.get("/questions", {
        params: { difficulty },
        headers: {
          Authorization: token,
        },
      });

      console.log(response.data);

      return response.data;
    }
  );

  const setUserScore = asyncWrapper(async (score: number) => {
    const token = localStorage.getItem("accessToken");

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
  });

  return {
    getQuestions,
    setUserScore,
  };
};

export const quizService = quizServiceDef();
