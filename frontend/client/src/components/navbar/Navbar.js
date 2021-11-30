import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MenuContext } from "../../context/context";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Span,
  NavSpan,
} from "./navbarStyles";

const Navbar = () => {
  const { cart } = useContext(MenuContext);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img
                src="https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/10/11/crea.jpg__500x233_q85_crop_subsampling-2_upscale.jpg"
                alt="logo"
                width="100px"
              />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
              {!click ? <NavSpan>{cart.length}</NavSpan> : <p />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">DRINKS</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Food">FOOD</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Tray">
                  TRAY <Span>{cart.length}</Span>
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
