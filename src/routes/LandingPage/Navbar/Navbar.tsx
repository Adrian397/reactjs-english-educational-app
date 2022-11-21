import { paths } from "@utils/paths";
import { StyledProps } from "@utils/styledProps";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Navbar = (): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <NavWrapper>
      <Logo>
        <h1>LearningApp</h1>
      </Logo>
      <NavList>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#reasons">Reasons</a>
        </li>
        <li>
          <a href="#activities">Activities</a>
        </li>
        <li>
          <a href="#games">Games</a>
        </li>
      </NavList>
      <div>
        <NavButtons>
          <button onClick={() => navigate(paths.login)}>Log in</button>
          <button onClick={() => navigate(paths.register)}>Register</button>
        </NavButtons>
        <NavListMobile isVisible={isMenuVisible}>
          <button onClick={() => setIsMenuVisible((prevState) => !prevState)} />
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#reasons">Reasons</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#games">Games</a>
            </li>
          </ul>
        </NavListMobile>
      </div>
    </NavWrapper>
  );
};

const NavListMobile = styled.div<StyledProps>`
  display: none;

  button {
    padding: 1rem;
    background-color: transparent;
    border: 2px solid #825db3;
    background: url("./assets/hamburger.svg") no-repeat center;
    background-size: 1.125rem;
    border-radius: 10px;
    cursor: pointer;
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

    li:hover a {
      color: #3c2f60;
    }

    a {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #9fa2af;
      font-weight: 600;
    }
  }

  @media (max-width: 992px) {
    display: flex;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 3rem;

  @media (max-width: 992px) {
    div:nth-of-type(2) {
      display: flex;
      gap: 2rem;
    }

    padding-right: 2.5%;
  }
`;

const Logo = styled.div`
  height: 100%;
  background-color: #825db3;
  color: white;
  border-bottom-right-radius: 48px;
  padding: 1.5rem 1.5rem;
  padding-right: 2.5rem;

  h1 {
    color: white;
    font-size: 1.5rem;
  }
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5rem;

  a {
    text-decoration: none;
    color: #9fa2af;
    font-weight: 600;
    cursor: pointer;
  }

  a:hover {
    color: #3c2f60;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

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
