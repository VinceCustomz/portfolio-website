import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  // SideBarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About Me
          </SideBarLink>
          <SideBarLink to="projectsOne" onClick={toggle}>
            Projects
          </SideBarLink>
          <SideBarLink to="resume" onClick={toggle}>
            Resume
          </SideBarLink>
          {/* <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink> */}
        </SideBarMenu>
        <SideBtnWrap>
          {/* <SideBarRoute to="/signin">Sign In</SideBarRoute> */}
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
