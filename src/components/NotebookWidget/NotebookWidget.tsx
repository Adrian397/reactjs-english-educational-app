import { ReactElement, useState } from "react";
import styled from "styled-components";
import { Notebook } from "./Notebook/Notebook";

export const NotebookWidget = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <WidgetWrapper>
      <WidgetButton onClick={() => setIsVisible((prevState) => !prevState)} />
      <Notebook isVisible={isVisible} />
    </WidgetWrapper>
  );
};

const WidgetWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

const WidgetButton = styled.button`
  width: 4rem;
  height: 4rem;
  background: transparent url("./assets/notebookWidget.svg") no-repeat center;
  background-size: 4rem;
  border: none;
  cursor: pointer;
`;
