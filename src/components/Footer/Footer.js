import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import {
  FooterContainer,
  FooterTitle,
  FooterWrap,
  FooterWrapContent,
  FooterLinksContainer,
  FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  // FooterLinkSocial,
  // FooterLinkResume,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialLetsTalk,
} from "./FooterElements";

const URLLinkedin = "https://www.linkedin.com/in/vincent-vuong-dev/";
const URLGitHub = "https://github.com/VinceCustomz";
const URLemail = "mailto:vince.vuong@live.com";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>CONTACT</FooterTitle>
      <FooterWrap>
        <FooterWrapContent>
          I would love to hear from you. <br />
          Email me at vince.vuong@live.com or click below!
        </FooterWrapContent>
        <SocialIconLink href={URLemail} target="_blank" aria-label="GitHub">
          {/* <AiOutlineMail /> */}
          <SocialLetsTalk>Let's Talk</SocialLetsTalk>
        </SocialIconLink>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
              <FooterLink to="about">About Me</FooterLink>
              <FooterLink to="projectsOne">Projects</FooterLink>
              <a href="https://docs.google.com/document/d/1Tnn2t1nFRSSCS88WXW1CRcVkYVvc96_5LOOdNXHxGzg/export?format=pdf">
                <FooterLinkResume>Resume</FooterLinkResume>
              </a>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
              <FooterLinkSocial href={URLLinkedin}>Linkedin</FooterLinkSocial>
              <FooterLinkSocial href={URLGitHub}>GitHub</FooterLinkSocial>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/"></SocialLogo>
            <WebsiteRights>
              Vince Vuong © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIconLink
              href={URLLinkedin}
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink
              href={URLGitHub}
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink href={URLemail} target="_blank" aria-label="GitHub">
              <AiOutlineMail />
            </SocialIconLink>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
