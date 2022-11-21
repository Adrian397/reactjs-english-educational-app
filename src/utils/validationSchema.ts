import * as Yup from "yup";

type ValidationValues = {
  errors?: string[];
  status: string;
  value?: string;
};

export const usernameValidation = Yup.string()
  .matches(/^[a-zA-Z][a-zA-Z0-9.\-_]+$/, "UsernameWrongChar")
  .max(32, "UsernameToLong")
  .min(6, "UsernameToShort")
  .required("Require");

export const passwordValidation =
  Yup.string().max(64).required("MaxLength") &&
  Yup.string()
    .min(8, "MinLength")
    .matches(/[A-Z]/g, "CapitalLetterError")
    .matches(/[a-z]/g, "LowerLetterError")
    .matches(/\d/g, "DigitError")
    .required("RequiredError");

export const emailValidation = Yup.string()
  .email("EmailError")
  .required("EmailError");

export const safePasswordValidate = (password: string): ValidationValues => {
  try {
    const value = passwordValidation.validateSync(password, {
      abortEarly: false,
    });
    return { status: "succcess", value };
  } catch (e) {
    return { status: "error", errors: (e as Yup.ValidationError).errors };
  }
};
