import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  isVisible?: boolean;
  errors?: FormikErrors<{
    email: string;
    username: string;
    password: string;
  }>;
};
