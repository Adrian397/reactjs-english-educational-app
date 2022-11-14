import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";
import { StyledProps } from "../../utils/styledProps";

type Props = {
  initialState?: boolean;
  isValidated?: boolean;
  text: string;
};

export const PasswordTip = ({ initialState, isValidated, text }: Props) => {
  return (
    <>
      <Text isValidated={isValidated} initialState={initialState}>
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

const Text = styled.p<StyledProps>`
  color: ${({ isValidated, initialState }) =>
    !isValidated ? "#00A567" : initialState ? "#333" : "#FA233B"};
  font-size: 0.75rem;
  margin-right: 3px;
`;

const Success = styled.span`
  margin-right: 0.375rem;
  margin-top: 1px;
  svg {
    fill: #00a567;
    width: 0.75rem;
    height: max-content;
  }
`;

const Error = styled.span`
  margin-right: 0.375rem;
  margin-top: 1px;

  svg {
    fill: #fa233b;
    width: 0.75rem;
    height: max-content;
  }
`;
