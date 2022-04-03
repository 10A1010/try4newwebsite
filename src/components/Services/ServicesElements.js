import styled from "styled-components";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 760px) {
    height: 1100px;
    html{
      width: 100vw;
      overflow-x: hidden;
    }
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    html{
      width: 100vw;
      overflow-x: hidden;
    }
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media sceen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    html{
      width: 100vw;
      overflow-x: hidden;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    html{
      width: 100vw;
      overflow-x: hidden;
    }
  }
`;

export const CardLink = styled(Link)`
  border-radius: 30px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 35px;
  // 64
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    html{
      width: 100vw;
      overflow-x: hidden;
    }
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
