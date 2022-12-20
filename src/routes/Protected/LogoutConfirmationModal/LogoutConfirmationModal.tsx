import { SessionStateType } from "@context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import {
  Close,
  Modal,
  ModalWrapper,
  Warning,
} from "./LogoutConfirmationModal.styles";

type Props = {
  onSessionStateChange: React.Dispatch<React.SetStateAction<SessionStateType>>;
  onVisibilityChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogoutConfirmationModal = ({
  onVisibilityChange,
  onSessionStateChange,
}: Props): ReactElement => {
  return (
    <ModalWrapper>
      <Modal>
        <Close onClick={() => onVisibilityChange(false)}>
          <CloseIcon />
        </Close>
        <Warning>
          <img alt="logout icon" src={imgBasePath + "/logoutModal.svg"} />
        </Warning>
        <h3>Log out</h3>
        <p>Are you sure you want to log out?</p>
        <div>
          <button onClick={() => onVisibilityChange(false)}>Cancel</button>
          <button onClick={() => onSessionStateChange({ status: "anon" })}>
            Log out
          </button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
