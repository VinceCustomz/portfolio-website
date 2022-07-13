import React from 'react'
import { SideBarContainer, Icon, CloseIcon } from './SideBarElements'

const SideBar = () => {
  return (
    <SideBarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="about">About Me</SideBarLink>
                <SideBarLink to="skills">Skills</SideBarLink>
                <SideBarLink to="projects">Projects</SideBarLink>
                <SideBarLink to="signup">Sign Up</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/signin">Sign In</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar