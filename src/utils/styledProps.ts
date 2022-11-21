import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  errors?: FormikErrors<{
    email: string;
    password: string;
    username: string;
  }>;
  imgSrc?: string;
  initialState?: boolean;
  isCapsLockOn?: boolean;
  isError?: boolean;
  isValidated?: boolean;
  isVisible?: boolean;
};
