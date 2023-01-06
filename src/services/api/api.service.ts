import { asyncWrapper } from "./api.utils";
import axios from "./axios";

type LoginArgs = {
  password: string;
  username: string;
};

type RegistrationArgs = {
  email: string;
  password: string;
  username: string;
};

type ResetPasswordArgs = {
  newPassword: string;
  newPasswordRepeat: string;
  token: string;
};

const apiServiceDef = () => {
  const login = async (args: LoginArgs) => {
    try {
      const response = await axios.post("/login", {
        username: args.username,
        password: args.password,
      });

      const { data } = response;
      const { token } = data;

      localStorage.setItem("accessToken", "Bearer " + token);

      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  };

  const register = async (args: RegistrationArgs) => {
    try {
      const response = await axios.post("/register", {
        email: args.email,
        username: args.username,
        password: args.password,
      });

      const { data } = response;
      const { token } = data;

      localStorage.setItem("accessToken", "Bearer " + token);

      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await axios.post("/forgotPassword", {
        email,
      });

      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  };

  const resetPassword = async (args: ResetPasswordArgs) => {
    const response = await axios.patch(`/resetPassword/${args.token}`, {
      password: args.newPassword,
      passwordConfirm: args.newPasswordRepeat,
    });

    return response;
  };

  const getAllUsers = asyncWrapper(async () => {
    const token = localStorage.getItem("accessToken");

    const response = await axios.get("/users", {
      headers: {
        Authorization: token,
      },
    });

    return response;
  });

  const refreshToken = async () => {
    try {
      const response = await axios.get("/refreshToken");

      const { data } = response;
      const { token } = data;

      localStorage.setItem("accessToken", "Bearer " + token);

      return response;
    } catch (e) {
      localStorage.removeItem("accessToken");
      window.dispatchEvent(new Event("storage"));
    }
  };

  const getQuizDifficulty = asyncWrapper(async (difficulty: string) => {
    const response = await axios.get(`/questions`, { params: { difficulty } });

    console.log("test");

    return response;
  });

  return {
    login,
    register,
    forgotPassword,
    resetPassword,
    refreshToken,
    getQuizDifficulty,
    getAllUsers,
  };
};

export const apiService = apiServiceDef();
