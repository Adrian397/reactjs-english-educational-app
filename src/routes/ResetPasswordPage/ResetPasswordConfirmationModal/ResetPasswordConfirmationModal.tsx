import { imgBasePath } from "@utils/imgs";
import { paths } from "@utils/paths";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Success } from "./ResetPasswordConfirmationModal.styled";

export const ResetPasswordConfirmationModal = (): ReactElement => {
  const navigate = useNavigate();

  return (
    <Modal>
      <Success>
        <img alt="success icon" src={imgBasePath + "/success.svg"} />
      </Success>
      <h3>Password has been changed!</h3>
      <p>Your password has been changed, please log in again.</p>
      <button onClick={() => navigate(paths.login, { replace: true })}>
        Go back to login page
      </button>
    </Modal>
  );
};
