import { SessionStateType } from "@context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import {
  Close,
  Logout,
  Modal,
  ModalWrapper,
} from "./LogoutConfirmationModal.styles";

type Props = {
  onSessionStateChange: React.Dispatch<React.SetStateAction<SessionStateType>>;
  onVisibilityChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LogoutConfirmationModal = ({
  onVisibilityChange,
  onSessionStateChange,
}: Props): ReactElement => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    onSessionStateChange({ status: "anon", accessToken: null });
  };

  return (
    <ModalWrapper>
      <Modal>
        <Close onClick={() => onVisibilityChange(false)}>
          <CloseIcon />
        </Close>
        <Logout>
          <img alt="logout icon" src={imgBasePath + "/logoutModal.svg"} />
        </Logout>
        <h3>Logout</h3>
        <p>Are you sure you want to log out?</p>
        <div>
          <button onClick={() => onVisibilityChange(false)}>Cancel</button>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
