import { imgBasePath } from "@utils/imgs";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Quiz, Vocabulary, Wrapper } from "./ChooseActivityPage.styled";

const ChooseActivityPage = (): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "ChooseActivityPage" });

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Quiz imgSrc={imgBasePath + "/quiz.svg"}>
        <button onClick={() => navigate(paths.quiz)} />
        <span>{t("quiz")}</span>
      </Quiz>
      <Vocabulary imgSrc={imgBasePath + "/vocabulary.svg"}>
        <button onClick={() => navigate(paths.vocabulary)} />
        <span>{t("vocabulary")}</span>
      </Vocabulary>
    </Wrapper>
  );
};

export default ChooseActivityPage;
