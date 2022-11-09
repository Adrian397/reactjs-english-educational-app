import styled from "styled-components";
import { AboutSection } from "./AboutSection/AboutSection";
import ActivitiesSection from "./ActivitiesSection/ActivitiesSection";
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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default LandingPage;
