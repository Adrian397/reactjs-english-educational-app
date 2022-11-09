import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavWrapper>
      <Logo>
        <h1>LearningApp</h1>
      </Logo>
      <NavList>
        <li>About</li>
        <li>Reasons</li>
        <li>Activities</li>
        <li>Games</li>
      </NavList>
      <NavButtons>
        <button>Log in</button>
        <button>Register</button>
      </NavButtons>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 3rem;
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

  li {
    cursor: pointer;
    color: #9fa2af;
    font-weight: 600;
  }

  li:hover {
    color: #3c2f60;
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
`;
