import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroP, 
    HeroBtnWrappers, 
    ArrowForward, 
    ArrowRight,
    NameColor,
    ReactColor,
    // PythonColorA,
    PythonColorB,
} from './HeroElements';

const HeroSection = () => {
  const[hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroP>
                Hello, my name is <strong><NameColor>Vince</NameColor></strong>.
                <p>I am a software developer from Markham with experience in building full-stack web applications with Javascript, <ReactColor>React</ReactColor> and <PythonColorB>Python</PythonColorB>.</p>
            </HeroP>
            <HeroBtnWrappers>
                <Button to="about"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                Learn More {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrappers>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection