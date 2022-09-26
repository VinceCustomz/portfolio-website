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
              <a href="https://docs.google.com/document/d/e/2PACX-1vQhepet1r9jdsE98ARNoFZVDd4EZxMNuZb5PFxYClKQ-4asib2s5ZqnTDrfj38gRDXyY255Q4xouDhs/pub">
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
