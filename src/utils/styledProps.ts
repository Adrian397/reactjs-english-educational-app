import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  isVisible?: boolean;
  isCapsLockOn?: boolean;
  isValidated?: boolean;
  isError?: boolean;
  initialState?: boolean;
  errors?: FormikErrors<{
    email: string;
    username: string;
    password: string;
  }>;
};
