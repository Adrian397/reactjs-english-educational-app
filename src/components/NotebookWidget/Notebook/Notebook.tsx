import { StyledProps } from "@utils/styledProps";
import { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  isVisible: boolean;
};

export const Notebook = ({ isVisible }: Props): ReactElement => {
  return (
    <NotebookWrapper isVisible={isVisible}>
      <img alt="notebook decoration" src="./assets/notebookDecoration.svg" />
      <InputWrapper>
        <SearchNotes />
      </InputWrapper>
      <NotesWrapper>
        <Scroll>
          <Note />
          <Note />
          <Note />
        </Scroll>
      </NotesWrapper>
    </NotebookWrapper>
  );
};

const NotebookWrapper = styled.div<StyledProps>`
  img {
    position: absolute;
    top: -2%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
  }
  width: 23rem;
  height: 40rem;
  background-color: white;
  position: absolute;
  bottom: 7rem;
  border-radius: 8px;
  left: 0;
  opacity: 0;
  pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0)" : "translateY(3rem)"};
  transition: all 0.3s ease;
  padding: 2rem 0rem 1rem 0rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 2137;
`;

const SearchNotes = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid black;

  &:focus-visible {
    outline-color: #825db3;
  }
`;

const InputWrapper = styled.div`
  padding: 0rem 1.5rem;
`;

const NotesWrapper = styled.div`
  width: 100%;
  height: calc(100% - 71px);
  padding-right: 0.5rem;
`;

const Scroll = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 0.6rem;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: white;
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c8b1e6;
    border-radius: 4px;
  }
`;

const Note = styled.div`
  background-color: lightyellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 15rem;
  margin-bottom: 1rem;
`;
