import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import { homeObjeOne, homeObjeTwo, homeObjeThree } from "../components/Services/data";
import Sidebar from "../components/Sidebar";
import HeroSection from "../HeroSection";
import InfoSection from "../InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/data";

const Home = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Services {...homeObjeOne}/>
      <Services {...homeObjeTwo}/>
      <Services {...homeObjeThree}/>
      <Footer />
    </>
  );
};

export default Home;
