import { StyledProps } from "@utils/styledProps";
import styled from "styled-components";

export const NavListMobile = styled.div<StyledProps>`
  display: none;

  button {
    padding: 1rem;
    background-color: transparent;
    border: 2px solid #825db3;
    background: url("./assets/hamburger.svg") no-repeat center;
    background-size: 1.125rem;
    border-radius: 10px;
    cursor: pointer;
    fill: red;
  }

  ul {
    position: absolute;
    list-style: none;
    top: 12%;
    width: 95%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    left: 0;
    right: 0;
    background-color: rgb(251, 248, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: ${({ isVisible }) =>
      isVisible ? "translateY(0%)" : "translateY(-15%)"};
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    pointer-events: ${({ isVisible }) => (isVisible ? "all" : "none")};
    transition: all 0.3s ease;

    li {
      width: 100%;
      padding: 1rem 0rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }

    li:not(:nth-of-type(4)) {
      border-bottom: 2px solid #825db3;
    }

    a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #524f4f;
      font-weight: 600;
    }
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 3rem;

  @media (max-width: 1241px) {
    div:nth-of-type(2) {
      display: flex;
      gap: 2rem;
    }

    padding-right: 2.5%;
  }
`;

export const Logo = styled.div`
  height: 100%;
  background-color: #825db3;
  color: white;
  border-bottom-right-radius: 48px;
  padding: 1.5rem 1.5rem;
  padding-right: 2.5rem;

  h1 {
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }
`;
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-left: 8rem;

  a {
    text-decoration: none;
    color: #524f4f;
    font-weight: 600;
    cursor: pointer;
    font-size: 1.125rem;
  }

  @media (max-width: 1241px) {
    display: none;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 1rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button:nth-child(1) {
    color: #825db3;
    font-weight: bold;
  }

  button:nth-child(2) {
    padding: 0.6rem 1.2rem;
    background-color: #825db3;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Buttons = styled.div<StyledProps>`
  display: flex;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    transform: ${({ isVisible }) =>
      isVisible ? "rotate(-180deg)" : "rotate(0deg)"};
    margin-left: 2px;
    transition: transform 120ms ease;
  }

  div:last-child {
    position: relative;
    button {
      text-transform: uppercase;
      width: 3.5rem;
      border: 2px solid #825db3;
      background-color: white;
      padding: 0.5rem;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #825db3;
      font-weight: bold;
    }

    div {
      position: absolute;
      width: 100%;
      bottom: -2.5rem;
      visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
      transform: ${({ isVisible }) =>
        isVisible ? "translateY(0%)" : "translateY(-20%)"};
      opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
      transition: all 120ms ease;
      button {
        width: 100%;
      }
    }
  }
`;
