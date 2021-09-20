import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
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
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/Home">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Menu">Menu</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Cart">CART</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
