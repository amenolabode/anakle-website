import React from "react";
import AnakleSubsidiaries from "./Homepage/Subsidiaries";
import Blogposts from "./Homepage/Blogposts";
import ContactUs from "./Homepage/ContactUs";
import Footprint from "./Homepage/footprint";
import GrowthSection from "./Homepage/GrowthSection";
import HomePageHero from "./Homepage/HomepageHeader";
import SubsidiariesComponent from "./Homepage/SubsidiariesComp";

const HomePage = () => {
  return (
    <>
      <HomePageHero />
      <AnakleSubsidiaries />
      <SubsidiariesComponent />
      <GrowthSection />
      <Footprint />
      <Blogposts />
      <ContactUs />
    </>
  );
};

export default HomePage;
