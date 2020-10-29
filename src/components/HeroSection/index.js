import React, { useState } from 'react';
import {
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroBtnWrapper,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBg,
  ImgBg,
} from './HeroElements';
import Video from '../../videos/video.mp4';
import Cover from '../../images/cover.jpeg';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }


  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        <ImgBg src={Cover} alt="cover" />
      </HeroBg>

      <HeroContent id="herocontent">
        <HeroH1>Apps Of The Future</HeroH1>
        <HeroP>
          Transform your powerful app ideas into reality.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}
            primary='true'
            dark='true'>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer >
  )
}

export default HeroSection
