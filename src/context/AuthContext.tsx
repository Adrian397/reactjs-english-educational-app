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
  sessionState: SessionStateType;
  setSessionState: Dispatch<SetStateAction<SessionStateType>>;
};

const AuthContext = createContext<ContextType>({
  sessionState: { status: "anon", accessToken: null },
  setSessionState: () => {} /* eslint-disable-line*/,
});

export const AuthProvider = ({ children }: Props): ReactElement => {
  const [sessionState, setSessionState] = useState<SessionStateType>({
    status: "anon",
    accessToken: null,
  });

  // persist user on page refresh
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setSessionState({ status: "auth", accessToken: token });
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
    <AuthContext.Provider value={{ sessionState, setSessionState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
