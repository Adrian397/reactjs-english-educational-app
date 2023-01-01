import CloseIcon from "@mui/icons-material/Close";
import { imgBasePath } from "@utils/imgs";
import { ReactElement } from "react";
import { Close, Email, Modal } from "./SendEmailSuccessModal.styled";

type Props = {
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SendEmailSuccessModal = ({
  onOpenChange,
}: Props): ReactElement => {
  return (
    <Modal>
      <Close onClick={() => onOpenChange(false)}>
        <CloseIcon />
      </Close>
      <Email>
        <img alt="email icon" src={imgBasePath + "/email.svg"} />
      </Email>
      <h3>Email has been sent!</h3>
      <p>Check your inbox and click the link to set a new password</p>
    </Modal>
  );
};
