import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const WidgetWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;

export const WidgetButton = styled.button<StyledProps>`
  width: 4rem;
  height: 4rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 4rem;
  border: none;
  cursor: pointer;
`;
