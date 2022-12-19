import { NotebookWidget } from "@components/NotebookWidget/NotebookWidget";
import { useAuth } from "@hooks/useAuth";
import { imgBasePath } from "@utils/imgs";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Logout } from "./Protected.styled";

const Protected = (): ReactElement => {
  const { sessionState } = useAuth();

  if (sessionState.status === "anon") {
    return <Navigate replace to={paths.login} />;
  }

  return (
    <div>
      <NotebookWidget />
      <Logout imgSrc={imgBasePath + "/logout.svg"} />
      <Outlet />
    </div>
  );
};

export default Protected;
