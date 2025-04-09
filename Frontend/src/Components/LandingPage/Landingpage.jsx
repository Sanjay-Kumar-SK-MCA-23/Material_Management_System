import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ModulesSection from "./ModulesSection";
import NavigationBar from "./Nav";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
 
        <NavigationBar />
        <HeroSection />
        <FeaturesSection />
        <ModulesSection />
        <Footer />
       
     
    </>
  );
};

export default LandingPage;
