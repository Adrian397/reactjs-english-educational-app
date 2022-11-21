import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { paths } from "../../utils/paths";

const ChooseActivityPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Quiz>
        <button onClick={() => navigate(paths.quiz)} />
        <span>Quiz</span>
      </Quiz>
      <Vocabulary>
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

const Quiz = styled.div`
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
    background: transparent url("./assets/quiz.svg") no-repeat center;
    background-size: 15rem;
    border: none;
    cursor: pointer;
  }
`;

const Vocabulary = styled.div`
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
    background: transparent url("./assets/vocabulary.svg") no-repeat center;
    background-size: 15rem;
    border: none;
    cursor: pointer;
  }
`;

export default ChooseActivityPage;
