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

  return (
    <AuthContext.Provider value={{ sessionState, setSessionState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
