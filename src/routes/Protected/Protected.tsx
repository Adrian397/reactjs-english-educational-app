import { NotebookWidget } from "@components/NotebookWidget/NotebookWidget";
import { imgBasePath } from "@utils/imgs";
import { StyledProps } from "@utils/styledProps";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Protected = (): ReactElement => {
  return (
    <div>
      <NotebookWidget />
      <Logout imgSrc={imgBasePath + "/logout.svg"} />
      <Outlet />
    </div>
  );
};

const Logout = styled.button<StyledProps>`
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-size: 4rem;
  border: none;
  cursor: pointer;
`;

export default Protected;
