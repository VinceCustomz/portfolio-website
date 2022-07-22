import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Footer from "../components/Footer/Footer";

import {
  aboutMe,
  calorieTracker,
  plentyFish,
  pokePacks,
  nineLives
} from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...aboutMe} />
      <InfoSection {...calorieTracker} />
      <InfoSection {...plentyFish} />
      <InfoSection {...pokePacks} />
      <InfoSection {...nineLives} />
      <Footer />
      
    </>
  );
};

export default Home;
