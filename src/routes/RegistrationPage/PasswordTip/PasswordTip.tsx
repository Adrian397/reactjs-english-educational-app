import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { ReactElement } from "react";
import { Error, Success, Text } from "./PasswordTip.styled";

type Props = {
  initialState?: boolean;
  isValidated?: boolean;
  text: string;
};

export const PasswordTip = ({
  initialState,
  isValidated,
  text,
}: Props): ReactElement => {
  return (
    <>
      <Text initialState={initialState} isValidated={isValidated}>
        {text}
      </Text>
      {!isValidated ? (
        <Success>
          <CheckIcon />
        </Success>
      ) : initialState ? null : (
        <Error>
          <ErrorOutlineIcon />
        </Error>
      )}
    </>
  );
};
