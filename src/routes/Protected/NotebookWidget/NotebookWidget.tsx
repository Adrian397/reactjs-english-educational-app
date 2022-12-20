import { imgBasePath } from "@utils/imgs";
import { ReactElement, useState } from "react";
import { Notebook } from "./Notebook/Notebook";
import { WidgetButton, WidgetWrapper } from "./NotebookWidget.styled";

export const NotebookWidget = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <WidgetWrapper>
      <WidgetButton
        imgSrc={imgBasePath + "/notebookWidget.svg"}
        onClick={() => setIsVisible((prevState) => !prevState)}
      />
      <Notebook isVisible={isVisible} />
    </WidgetWrapper>
  );
};
