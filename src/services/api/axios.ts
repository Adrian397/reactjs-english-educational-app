import axios from "axios";

export default axios.create({
  baseURL: "https://english-educational-app-backend.vercel.ap",
  withCredentials: true,
});
