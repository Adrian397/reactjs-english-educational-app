import { NoteType } from "@components/NotebookWidget/Notebook/Notebook.utils";
import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  data?: NoteType[];
  errors?: FormikErrors<{
    email: string;
    password: string;
    username: string;
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
  isValidated?: boolean;
  isVisible?: boolean;
};
