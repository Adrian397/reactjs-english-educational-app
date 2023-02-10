import { SessionStateType } from "@context/AuthContext";
import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation("common", { keyPrefix: "Logout" });

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
        <h3>{t("logout")}</h3>
        <p>{t("logoutInfo")}</p>
        <div>
          <button onClick={() => onVisibilityChange(false)}>
            {t("cancel")}
          </button>
          <button onClick={handleLogout}>{t("log out")}</button>
        </div>
      </Modal>
    </ModalWrapper>
  );
};
