import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Text = styled.p<StyledProps>`
  color: ${({ isValidated, initialState }) =>
    !isValidated ? "#00A567" : initialState ? "#333" : "#FA233B"};
  font-size: 0.75rem;
  margin-right: 3px;
`;

export const Success = styled.span`
  margin-right: 0.375rem;
  margin-top: 1px;
  svg {
    fill: #00a567;
    width: 0.75rem;
    height: max-content;
  }
`;

export const Error = styled.span`
  margin-right: 0.375rem;
  margin-top: 1px;

  svg {
    fill: #fa233b;
    width: 0.75rem;
    height: max-content;
  }
`;
