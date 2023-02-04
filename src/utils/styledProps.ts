import { NoteType } from "@services/NotesService";
import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  data?: NoteType[];
  errorMsg?: string;
  errors?: FormikErrors<{
    email?: string;
    newPassword?: string;
    newPasswordRepeat?: string;
    password?: string;
    username?: string;
  }>;
  imgSrc?: string;
  initialState?: boolean;
  isAnimated?: boolean;
  isCapsLockOn?: boolean;
  isChecked?: boolean;
  isCompleted?: boolean;
  isCorrect?: boolean;
  isError?: boolean;
  isExpanded?: boolean;
  isLoading?: boolean;
  isValidated?: boolean;
  isVisible?: boolean;
};
