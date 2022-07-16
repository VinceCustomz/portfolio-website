import React from "react";
import { InfoButton } from "../ButtonElement";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "../InfoSection/InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  link,
  toolsUsed,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>
                  <strong>Tools: </strong>
                  {toolsUsed}
                </Subtitle>
                <BtnWrap>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <InfoButton
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </InfoButton>
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <div class="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ImgWrap>
                    <Img src={img} alt={alt} className="drop-shadow-2xl" />
                  </ImgWrap>
                </a>
              </div>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
