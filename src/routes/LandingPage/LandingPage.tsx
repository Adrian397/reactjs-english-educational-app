import styled from "styled-components";
import { AboutSection } from "./AboutSection/AboutSection";
import ActivitiesSection from "./ActivitiesSection/ActivitiesSection";
import Footer from "./Footer/Footer";
import GamesSection from "./GamesSection/GamesSection";
import { HeroSection } from "./HeroSection/HeroSection";
import { Navbar } from "./Navbar/Navbar";
import ReasonsSection from "./ReasonsSection/ReasonsSection";

const LandingPage = () => {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default LandingPage;
