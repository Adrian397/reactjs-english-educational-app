import axios from "axios";

export default axios.create({
  baseURL: "https://english-educational-app-backend.vercel.app/api",
  withCredentials: true,
});
