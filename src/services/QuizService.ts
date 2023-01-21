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

type UserScoreType = {
  _id: string;
  result: {
    difficulty: string;
    score: number;
  };
  username: string;
};

type UsersScoreReturnType = {
  list: UserScoreType[];
  numberOfPages: number;
  numberOfRows: number;
};

type UserArgs = {
  limit: number;
  page: number;
};

const limitUsers = (list: UserScoreType[], limit?: number, page = 0) => {
  if (limit) {
    return list.slice(page * limit, page * limit + limit);
  }

  return list;
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

      return response.data;
    }
  );

  const getUsersScore = asyncWrapper(
    async (args: UserArgs): Promise<UsersScoreReturnType> => {
      const token = localStorage.getItem("accessToken");

      const response = await axios.get("/questions/getAllUsersScore", {
        headers: {
          Authorization: token,
        },
      });
      const limitedUsers = limitUsers(response.data, args.limit, args.page);
      const paginatedUsers = Math.ceil(response.data.length / args.limit);

      return {
        list: limitedUsers,
        numberOfRows: response.data.length,
        numberOfPages: paginatedUsers,
      };
    }
  );

  const setUserScore = asyncWrapper(async (args: UserScoreType["result"]) => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.post(
      "/questions/setScore",
      { score: args.score },
      {
        params: { difficulty: args.difficulty },
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  });

  return {
    getQuestions,
    getUsersScore,
    setUserScore,
  };
};

export const quizService = quizServiceDef();
