import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const NotebookWrapper = styled.div<StyledProps>`
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
  transform: ${({ isVisible }) => (isVisible ? "none" : "translateY(3rem)")};
  transition: all 0.3s ease;
  padding: 2rem 0rem 1rem 0rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 2137;

  & > img {
    position: absolute;
    top: -2%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
  }
`;

export const SearchNotes = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #dbdeea;

  &:focus-visible {
    outline-color: #825db3;
  }
`;

export const InputWrapper = styled.div`
  padding: 0rem 1.5rem;
`;

export const NotesList = styled.div`
  width: 100%;
  height: calc(100% - 61px);
  padding-right: 0.5rem;
`;

export const Scroll = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: ${({ data }) => (data && data.length > 1 ? "0.6rem" : "1rem")};
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

export const AddNote = styled.button`
  width: 100%;
  padding: 0.5rem 0rem;
  border-radius: 8px;
  border: none;
  color: white;
  font-weight: bold;
  background-color: #825db3;
  margin-bottom: 1rem;
  cursor: pointer;
`;
