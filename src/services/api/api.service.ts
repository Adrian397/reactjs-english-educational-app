import { getDataFromResponse } from "./api.utils";
import axios from "./axios";

type LoginArgs = {
  password: string;
  username: string;
};

const apiServiceDef = () => {
  const login = async (args: LoginArgs) => {
    try {
      const response = await axios.post("/users/login", {
        username: args.username,
        password: args.password,
      });

      const { data } = response;
      const { token } = data;

      localStorage.setItem("accessToken", token);

      console.log(response.data);

      return response;
    } catch (e) {
      throw new Error("Custom");
    }
  };

  const getAllUsers = async () => {
    const Token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get("/users", {
        headers: {
          Authorization: Token,
        },
      });
      console.log(response);
      return await getDataFromResponse(response, "getAllUsers");
    } catch (e) {
      console.log(e);
    }
  };

  const refreshToken = async () => {
    try {
      console.log("fetch new access token");
      const response = await axios.get("/users/refreshToken");

      if (response.status === 401) {
        localStorage.removeItem("accessToken");
        throw new Error("TokenExpiredError");
      }

      const { data } = response;
      const { token } = data;

      localStorage.setItem("accessToken", token);

      return response;
    } catch (e) {
      console.log(e);
    }
  };

  return { login, refreshToken, getAllUsers };
};

export const apiService = apiServiceDef();
