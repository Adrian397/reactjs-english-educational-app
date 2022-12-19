import AuthContext, { ContextType } from "@context/AuthContext";
import { useContext } from "react";

export const useAuth = (): ContextType => {
  return useContext(AuthContext);
};
