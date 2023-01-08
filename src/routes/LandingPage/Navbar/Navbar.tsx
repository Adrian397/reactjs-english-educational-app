import { paths } from "@utils/paths";
import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Logo,
  NavButtons,
  NavList,
  NavListMobile,
  NavWrapper,
} from "./Navbar.styled";

export const Navbar = (): ReactElement => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <NavWrapper>
      <Logo>
        <h1>Englify</h1>
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
