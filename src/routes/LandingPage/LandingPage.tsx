import { ReactElement } from "react";
import { AboutSection } from "./AboutSection/AboutSection";
import { ActivitiesSection } from "./ActivitiesSection/ActivitiesSection";
import { Footer } from "./Footer/Footer";
import { GamesSection } from "./GamesSection/GamesSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { Wrapper } from "./LandingPage.styled";
import { Navbar } from "./Navbar/Navbar";
import { ReasonsSection } from "./ReasonsSection/ReasonsSection";

const LandingPage = (): ReactElement => {
  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ReasonsSection />
      <ActivitiesSection />
      <GamesSection />
      <Footer />
    </Wrapper>
  );
};

export default LandingPage;
