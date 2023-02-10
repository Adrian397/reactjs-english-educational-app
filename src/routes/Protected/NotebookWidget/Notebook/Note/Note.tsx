import { notesService, NoteType } from "@services/NotesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import React, { ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal/DeleteConfirmationModal";
import { ExportFileNameModal } from "./ExportFileNameModal/ExportFileNameModal";
import { Close, Delete, Export, NoteWrapper, Save } from "./Note.styled";

type Props = {
  note: NoteType;
  onExpandCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Note = ({ note, onExpandCheck }: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Notebook" });

  const [isExpanded, setIsExpanded] = useState(false);
  const [textValue, setTextValue] = useState("");

  const [isVisible, setIsVisible] = useState({
    deleteModal: false,
    exportModal: false,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(notesService.updateNote, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleNoteUpdate = (values: NoteType) => {
    mutate(values);
  };

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
          noteId={note._id}
          onVisibilityChange={setIsVisible}
        />
      )}
      {isVisible.exportModal && (
        <ExportFileNameModal
          noteId={note._id}
          onNoteExport={handleExportText}
          onVisibilityChange={setIsVisible}
        />
      )}
      <NoteWrapper isExpanded={isExpanded} onClick={handleOpenNote}>
        {isExpanded && (
          <>
            <Close
              imgSrc={imgBasePath + "/close.svg"}
              onClick={(e) => handleCloseNote(e)}
            />
            <Save
              imgSrc={imgBasePath + "/save.svg"}
              onClick={() =>
                handleNoteUpdate({ text: textValue, _id: note._id })
              }
            />
          </>
        )}

        {!isExpanded && (
          <>
            <Delete
              imgSrc={imgBasePath + "/trash.svg"}
              onClick={(e) => handleDeleteModalOpen(e)}
            />
            <Export
              imgSrc={imgBasePath + "/export.svg"}
              onClick={(e) => handleExportModalOpen(e)}
            />
          </>
        )}

        <textarea
          defaultValue={note.text}
          disabled={!isExpanded}
          id={note._id}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder={t("enterNotes")}
        />
      </NoteWrapper>
    </>
  );
};
