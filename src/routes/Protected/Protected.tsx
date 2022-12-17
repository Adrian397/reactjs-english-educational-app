import { NotebookWidget } from "@components/NotebookWidget/NotebookWidget";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Logout } from "./Protected.styled";

const Protected = (): ReactElement => {
  return (
    <div>
      <NotebookWidget />
      <Logout imgSrc={imgBasePath + "/logout.svg"} />
      <Outlet />
    </div>
  );
};

export default Protected;
