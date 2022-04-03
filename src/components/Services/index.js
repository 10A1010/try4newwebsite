import React from "react";
import Icon1 from "../../images/svg-1.svg";
import { Link } from "react-router-dom";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  CardLink,
} from "./ServicesElements";
const Services = ({
  topLine1,
  topLine2,
  topLine3,
  headline1,
  headline2,
  headline3,
  description1,
  description2,
  description3,
  img1,
  img2,
  img3,
  id,
  alt,
  linkurl1,
  linkurl2,
  linkurl3,
}) => {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>{topLine1}</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <CardLink to={`/${linkurl1}`}>Click Here</CardLink>
          <ServicesIcon src={img1} alt={alt} />
          <ServicesH2>{headline1}</ServicesH2>
          <ServicesP>{description1}</ServicesP>
          <br></br>
        </ServicesCard>
        <ServicesCard>
          <CardLink to={`/${linkurl2}`}>Click Here</CardLink>
          <ServicesIcon src={img2} alt={alt} />
          <ServicesH2>{headline2}</ServicesH2>
          <ServicesP>{description2}</ServicesP>
          <br></br>
        </ServicesCard>
        <ServicesCard>
          <CardLink to={`/${linkurl3}`}>Click Here</CardLink>
          <ServicesIcon src={img3} alt={alt} />
          <ServicesH2>{headline3}</ServicesH2>
          <ServicesP>{description3}</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
