import { asyncWrapper } from "./api.utils";
import axios from "./axios";

type LoginArgs = {
  password: string;
  username: string;
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

      console.log(response.data);

      return response;
    } catch (e) {
      throw new Error("Custom");
    }
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

  return { login, refreshToken, getAllUsers };
};

export const apiService = apiServiceDef();
