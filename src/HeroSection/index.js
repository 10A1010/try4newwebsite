import React, { useState } from "react";
import video from "../videos/video.mp4";
import { Button } from "../components/ButtonElements";
import { NavBtnLink, NavLink2 } from "../components/Navbar/NavbarElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={video} type='video/mp4'></VideoBg> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Kheyraadka Islaamka ee Somalida</HeroH1>
        <HeroP>
          Dhageyso Codka Sheekha ugu weyn ee Soomaaliyeed ee Tafsiirka Quraanka,
          Xadiiska iyo Kutubta Islaamka
        </HeroP>
        <HeroBtnWrapper>
          <NavLink2
            to='Quran'
            onMouseEnter={onHover}
            on
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Bilow {hover ? <ArrowForward /> : <ArrowRight />}
          </NavLink2>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
