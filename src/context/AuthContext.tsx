import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type SessionStateType =
  | {
      accessToken: string;
      refreshToken: string;
      status: "auth";
    }
  | {
      status: "anon";
    };

export type ContextType = {
  sessionState: SessionStateType;
  setSessionState: Dispatch<SetStateAction<SessionStateType>>;
};

const AuthContext = createContext<ContextType>({
  sessionState: { status: "anon" },
  setSessionState: () => {} /* eslint-disable-line*/,
});

export const AuthProvider = ({ children }: Props): ReactElement => {
  const [sessionState, setSessionState] = useState<SessionStateType>({
    status: "anon",
  });

  console.log(sessionState);

  return (
    <AuthContext.Provider value={{ sessionState, setSessionState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
