import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import styled from "styled-components";

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

        <h3>Usuwanie</h3>
        <p>Czy na pewno chcesz usunąc tę notatkę?</p>
        <div>
          <button
            onClick={() =>
              onVisibilityChange((prevState) => ({
                ...prevState,
                deleteModal: false,
              }))
            }
          >
            Anuluj
          </button>
          <button onClick={(e) => onNoteDelete(noteId, e)}>Usuń</button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  position: fixed;
  left: 0;
  top: 0;
`;

const Modal = styled.div`
  height: 15rem;
  width: 30rem;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  box-shadow: 26px 20px 13px rgba(0, 0, 0, 0.01),
    14px 11px 11px rgba(0, 0, 0, 0.04), 6px 5px 8px rgba(0, 0, 0, 0.04),
    2px 1px 4px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);

  p {
    color: #333;
  }

  & > div:nth-of-type(2) {
    display: flex;
    gap: 3rem;

    button {
      cursor: pointer;
    }

    button:nth-of-type(1) {
      border: none;
      padding: 0;
      text-decoration: underline;
      background-color: transparent;
      color: #4a4f67;
      font-weight: bold;
    }

    button:nth-of-type(2) {
      padding: 0.7rem 1.2rem;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      color: white;
      background-color: #fa233b;
    }
  }
  position: relative;
`;

const Close = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 2rem;
  background-color: transparent;
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  cursor: pointer;

  svg {
    fill: #393d51;
  }
`;

const Warning = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffeeea;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
