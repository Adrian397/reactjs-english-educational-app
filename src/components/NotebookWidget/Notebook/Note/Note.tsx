import { StyledProps } from "@utils/styledProps";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { NoteType } from "../Notebook.utils";

type Props = {
  note: NoteType;
  onExpandCheck: React.Dispatch<React.SetStateAction<boolean>>;
  onNoteDelete: (id: string) => void;
  onNoteSave: (text: string, id: string) => void;
};

const Note = ({
  note,
  onExpandCheck,
  onNoteSave,
  onNoteDelete,
}: Props): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleCloseNote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsExpanded(false);
    onExpandCheck(false);
  };

  const handleOpenNote = () => {
    setIsExpanded(true);
    onExpandCheck(true);
  };

  return (
    <NoteWrapper isExpanded={isExpanded} onClick={handleOpenNote}>
      {isExpanded && <Close onClick={(e) => handleCloseNote(e)} />}
      {isExpanded && <Save onClick={() => onNoteSave(textValue, note.id)} />}
      {!isExpanded && <Delete onClick={() => onNoteDelete(note.id)} />}
      <textarea
        defaultValue={note.text}
        disabled={!isExpanded}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Wprowadź swoje notatki..."
      />
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div<StyledProps>`
  background-color: lightyellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: ${({ isExpanded }) => (isExpanded ? "97%" : "15rem")};
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  padding: 1rem;
  padding-top: ${({ isExpanded }) => (!isExpanded ? "1rem" : "4rem")};
  padding-bottom: ${({ isExpanded }) => (!isExpanded ? "3rem" : "2rem")};

  textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: transparent url("./assets/close.svg") no-repeat center;
  background-size: 1rem;
  border: none;
`;

const Save = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: transparent url("./assets/save.svg") no-repeat center;
  background-size: 2rem;
  border: none;
`;

const Delete = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  background: transparent url("./assets/trash.svg") no-repeat center;
  background-size: 1rem;
  border: none;
`;

export default Note;
