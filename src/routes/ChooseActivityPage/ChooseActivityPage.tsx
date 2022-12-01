import { imgBasePath } from "@utils/imgs";
import { paths } from "@utils/paths";
import { StyledProps } from "@utils/styledProps";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChooseActivityPage = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Quiz imgSrc={imgBasePath + "/quiz.svg"}>
        <button onClick={() => navigate(paths.quiz)} />
        <span>Quiz</span>
      </Quiz>
      <Vocabulary imgSrc={imgBasePath + "/vocabulary.svg"}>
        <button onClick={() => navigate(paths.vocabulary)} />
        <span>Nauka Słownictwa</span>
      </Vocabulary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: rgb(251, 248, 255);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Quiz = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }

  span {
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
    text-transform: uppercase;
  }

  button {
    width: 15rem;
    height: 15rem;
    background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
    background-size: 15rem;
    border: none;
    cursor: pointer;
  }
`;

const Vocabulary = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.5);
  }

  span {
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    color: #825db3;
  }

  button {
    width: 15rem;
    height: 15rem;
    background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
    background-size: 15rem;
    border: none;
    cursor: pointer;
  }
`;

export default ChooseActivityPage;
