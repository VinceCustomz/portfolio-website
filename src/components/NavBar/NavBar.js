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
              <NavLinks to="projectsOne">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <a href="https://docs.google.com/document/d/1Tnn2t1nFRSSCS88WXW1CRcVkYVvc96_5LOOdNXHxGzg/export?format=pdf">
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
