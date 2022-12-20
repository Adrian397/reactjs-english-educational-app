import { imgBasePath } from "@utils/imgs";
import React, { ReactElement, useState } from "react";
import { NoteType } from "../Notebook.utils";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal/DeleteConfirmationModal";
import { ExportFileNameModal } from "./ExportFileNameModal/ExportFileNameModal";
import { Close, Delete, Export, NoteWrapper, Save } from "./Note.styled";

type Props = {
  note: NoteType;
  onExpandCheck: React.Dispatch<React.SetStateAction<boolean>>;
  onNoteDelete: (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onNoteSave: (text: string, id: string) => void;
};

export const Note = ({
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
          placeholder="Enter your notes..."
        />
      </NoteWrapper>
    </>
  );
};
