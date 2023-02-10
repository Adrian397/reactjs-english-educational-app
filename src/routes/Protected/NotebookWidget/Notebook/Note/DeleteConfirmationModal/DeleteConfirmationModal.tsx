import CloseIcon from "@mui/icons-material/Close";
import { notesService } from "@services/NotesService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import {
  Close,
  Modal,
  ModalWrapper,
  Warning,
} from "./DeleteConfirmationModal.styled";

type Props = {
  noteId: string;
  onVisibilityChange: React.Dispatch<
    React.SetStateAction<{
      deleteModal: boolean;
      exportModal: boolean;
    }>
  >;
};

export const DeleteConfirmationModal = ({
  noteId,
  onVisibilityChange,
}: Props): ReactElement => {
  const { t } = useTranslation("common", { keyPrefix: "Notebook" });

  const queryClient = useQueryClient();

  const { mutate } = useMutation(notesService.deleteNote, {
    onSuccess: () => {
      queryClient.invalidateQueries(["notes"]);
    },
  });

  const handleNoteDelete = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    mutate(id);
    onVisibilityChange((prevState) => ({
      ...prevState,
      deleteModal: false,
    }));
  };

  return (
    <ModalWrapper>
      <Modal>
        <Close
          onClick={() =>
            onVisibilityChange((prevState) => ({
              ...prevState,
              deleteModal: false,
            }))
          }
        >
          <CloseIcon />
        </Close>
        <Warning>
          <img alt="warning icon" src={imgBasePath + "/warning.svg"} />
        </Warning>
        <h3>{t("deletion")}</h3>
        <p>{t("deletionInfo")}</p>
        <div>
          <button
            onClick={() =>
              onVisibilityChange((prevState) => ({
                ...prevState,
                deleteModal: false,
              }))
            }
          >
            {t("cancel")}
          </button>
          <button onClick={(e) => handleNoteDelete(noteId, e)}>
            {t("delete")}
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
