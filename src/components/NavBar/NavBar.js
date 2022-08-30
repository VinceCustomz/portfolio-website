import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksResume,
  // NavBtn,
  // NavBtnLink
} from "./NavBarElements";


const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">Vince Vuong</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="calorieTracker">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <a href="https://drive.google.com/file/d/1lVaE0aCu2b9Sq4junADvXDE9NSsU1fbu/view?usp=sharing">
                <NavLinksResume to="Resume">Resume</NavLinksResume>
              </a>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
