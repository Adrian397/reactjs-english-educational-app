import { apiService } from "@services/api/api.service";
import { useMutation } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz, Vocabulary, Wrapper } from "./ChooseActivityPage.styled";

const ChooseActivityPage = (): ReactElement => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => apiService.getAllUsers(),
  });

  return (
    <>
      <button onClick={() => mutate()}>Click</button>
      <Wrapper>
        <Quiz imgSrc={imgBasePath + "/quiz.svg"}>
          <button onClick={() => navigate(paths.quiz)} />
          <span>Quiz</span>
        </Quiz>
        <Vocabulary imgSrc={imgBasePath + "/vocabulary.svg"}>
          <button onClick={() => navigate(paths.vocabulary)} />
          <span>Vocabulary</span>
        </Vocabulary>
      </Wrapper>
    </>
  );
};

export default ChooseActivityPage;
