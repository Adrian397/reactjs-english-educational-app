import { imgBasePath } from "@utils/imgs";
import { StyledProps } from "@utils/styledProps";
import { nanoid } from "nanoid";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import Note from "./Note/Note";
import { NoteType } from "./Notebook.utils";

type Props = {
  isVisible: boolean;
};

export const Notebook = ({ isVisible }: Props): ReactElement => {
  const [data, setData] = useState<NoteType[]>(
    JSON.parse(localStorage.getItem("notes") ?? "[]")
  );
  const [inputValue, setInputValue] = useState("");
  const [isExpandedCheck, setIsExpandedCheck] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const handleNoteSave = (text: string, id: string) => {
    const updatedNotes = data.map((note) => {
      if (note.id === id) {
        return { ...note, text };
      }
      return note;
    });

    setData(updatedNotes);
  };

  const handleNoteAdd = () => {
    setData((prevState) => [...prevState, { text: "", id: nanoid() }]);
  };

  const handleNoteDelete = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const newNotes = data.filter((note) => note.id !== id);
    setData(newNotes);
  };

  return (
    <NotebookWrapper isVisible={isVisible}>
      <img
        alt="notebook decoration"
        src={imgBasePath + "/notebookDecoration.svg"}
      />
      <InputWrapper>
        <SearchNotes
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
      </InputWrapper>
      <NotesList>
        <Scroll data={data} isExpanded={isExpandedCheck}>
          {(!isExpandedCheck || data.length === 0) && (
            <AddNote onClick={handleNoteAdd}>Dodaj notatkę</AddNote>
          )}

          {data
            .filter((val) => val.text.toLowerCase().includes(inputValue))
            .map((note) => (
              <Note
                key={note.id}
                note={note}
                onExpandCheck={setIsExpandedCheck}
                onNoteDelete={handleNoteDelete}
                onNoteSave={handleNoteSave}
              />
            ))}
        </Scroll>
      </NotesList>
    </NotebookWrapper>
  );
};

const NotebookWrapper = styled.div<StyledProps>`
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

const SearchNotes = styled.input`
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

const InputWrapper = styled.div`
  padding: 0rem 1.5rem;
`;

const NotesList = styled.div`
  width: 100%;
  height: calc(100% - 61px);
  padding-right: 0.5rem;
`;

const Scroll = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: ${({ data }) =>
    data && data.length > 1
      ? "0.6rem"
      : "1rem"}; // change when notes.length > 2 to 1rem
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

const AddNote = styled.button`
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
