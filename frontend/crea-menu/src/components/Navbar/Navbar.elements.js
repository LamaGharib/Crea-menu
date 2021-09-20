import styled from "styled-components";

import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background-color: black;
  color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  &:hover {
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  ${Container}
`;
export const NavLogo = styled(Link)`
  curser: pointer;
  text-decoration: none;
  font-size: 2rem;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.8rem;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: ${({ click }) => (click ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    right: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: black;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid black;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: green;
      transition: all 0.3s ease;
    }
  }
`;
