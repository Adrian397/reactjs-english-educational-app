import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const Logout = styled.button<StyledProps>`
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-size: 4rem;
  border: none;
  cursor: pointer;
`;
