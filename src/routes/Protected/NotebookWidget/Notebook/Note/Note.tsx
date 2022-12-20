import { imgBasePath } from "@utils/imgs";
import { StyledProps } from "@utils/styledProps";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { NoteType } from "../Notebook.utils";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal/DeleteConfirmationModal";
import { ExportFileNameModal } from "./ExportFileNameModal/ExportFileNameModal";

type Props = {
  note: NoteType;
  onExpandCheck: React.Dispatch<React.SetStateAction<boolean>>;
  onNoteDelete: (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
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

  const [isVisible, setIsVisible] = useState({
    deleteModal: false,
    exportModal: false,
  });

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

  const handleExportText = (id: string, fileName: string) => {
    const element = document.createElement("a");
    const file = new Blob(
      [(document.getElementById(id) as HTMLInputElement).value],
      {
        type: "text/plain",
      }
    );
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  const handleDeleteModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsVisible({ ...isVisible, deleteModal: true });
  };

  const handleExportModalOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsVisible({ ...isVisible, exportModal: true });
  };

  return (
    <>
      {isVisible.deleteModal && (
        <DeleteConfirmationModal
          noteId={note.id}
          onNoteDelete={onNoteDelete}
          onVisibilityChange={setIsVisible}
        />
      )}
      {isVisible.exportModal && (
        <ExportFileNameModal
          noteId={note.id}
          onNoteExport={handleExportText}
          onVisibilityChange={setIsVisible}
        />
      )}
      <NoteWrapper isExpanded={isExpanded} onClick={handleOpenNote}>
        {isExpanded && (
          <Close
            imgSrc={imgBasePath + "/close.svg"}
            onClick={(e) => handleCloseNote(e)}
          />
        )}
        {isExpanded && (
          <Save
            imgSrc={imgBasePath + "/save.svg"}
            onClick={() => onNoteSave(textValue, note.id)}
          />
        )}
        {!isExpanded && (
          <Delete
            imgSrc={imgBasePath + "/trash.svg"}
            onClick={(e) => handleDeleteModalOpen(e)}
          />
        )}
        {!isExpanded && (
          <Export
            imgSrc={imgBasePath + "/export.svg"}
            onClick={(e) => handleExportModalOpen(e)}
          />
        )}
        <textarea
          defaultValue={note.text}
          disabled={!isExpanded}
          id={note.id}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Wprowadź swoje notatki..."
        />
      </NoteWrapper>
    </>
  );
};

const NoteWrapper = styled.div<StyledProps>`
  background-color: lightyellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: ${({ isExpanded }) => (isExpanded ? "99%" : "15rem")};
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

const Close = styled.button<StyledProps>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1rem;
  border: none;
`;

const Save = styled.button<StyledProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 2rem;
  border: none;
`;

const Delete = styled.button<StyledProps>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1.5rem;
  border: none;
`;

const Export = styled.button<StyledProps>`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1.5rem;
  border: none;
`;

export default Note;
