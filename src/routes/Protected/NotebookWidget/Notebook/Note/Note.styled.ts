import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const NoteWrapper = styled.div<StyledProps>`
  background-color: lightyellow;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: ${({ isExpanded }) => (isExpanded ? "99%" : "15rem")};
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  padding: 1rem;
  padding-top: ${({ isExpanded }) => (!isExpanded ? "1rem" : "4rem")};
  padding-bottom: ${({ isExpanded }) => (!isExpanded ? "3rem" : "2rem")};

  textarea {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    resize: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Close = styled.button<StyledProps>`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1rem;
  height: 1rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1rem;
  border: none;
`;

export const Save = styled.button<StyledProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 2rem;
  border: none;
`;

export const Delete = styled.button<StyledProps>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1.5rem;
  border: none;
`;

export const Export = styled.button<StyledProps>`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent url(${({ imgSrc }) => imgSrc}) no-repeat center;
  background-size: 1.5rem;
  border: none;
`;
