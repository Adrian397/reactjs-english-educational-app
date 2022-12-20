import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import {
  Close,
  Modal,
  ModalWrapper,
  Warning,
} from "./DeleteConfirmationModal.styled";

type Props = {
  noteId: string;
  onNoteDelete: (
    id: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onVisibilityChange: React.Dispatch<
    React.SetStateAction<{
      deleteModal: boolean;
      exportModal: boolean;
    }>
  >;
};

export const DeleteConfirmationModal = ({
  onNoteDelete,
  noteId,
  onVisibilityChange,
}: Props): ReactElement => {
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

        <h3>Deletion</h3>
        <p>Are you sure you want to delete this note?</p>
        <div>
          <button
            onClick={() =>
              onVisibilityChange((prevState) => ({
                ...prevState,
                deleteModal: false,
              }))
            }
          >
            Cancel
          </button>
          <button onClick={(e) => onNoteDelete(noteId, e)}>Delete</button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
