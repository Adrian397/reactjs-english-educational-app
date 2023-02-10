import i18n from "@utils/i18next";
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type StatusType = "auth" | "anon";

export type SessionStateType = {
  accessToken: string | null;
  status: StatusType;
};

export type ContextType = {
  currentLanguage: string;
  sessionState: SessionStateType;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
  setSessionState: Dispatch<SetStateAction<SessionStateType>>;
};

const AuthContext = createContext<ContextType>({
  currentLanguage: "",
  sessionState: { status: "anon", accessToken: null },
  setSessionState: () => {} /* eslint-disable-line*/,
  setCurrentLanguage: () => {} /* eslint-disable-line*/,
});

export const AuthProvider = ({ children }: Props): ReactElement => {
  const [sessionState, setSessionState] = useState<SessionStateType>({
    status: "anon",
    accessToken: null,
  });

  const [currentLanguage, setCurrentLanguage] = useState("en");

  // persist user on page refresh and manage language
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setSessionState({ status: "auth", accessToken: token });
    }

    const language = localStorage.getItem("language");

    if (language) {
      setCurrentLanguage(language);
      i18n.changeLanguage(language);
    }
  }, []);

  // logout user when token expires
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setSessionState({ status: "anon", accessToken: null });
    }

    window.addEventListener("storage", () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setSessionState({ status: "anon", accessToken: null });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sessionState,
        currentLanguage,
        setSessionState,
        setCurrentLanguage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
