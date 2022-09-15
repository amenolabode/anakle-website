import React from "react";
import AnakleSubsidiaries from "./Homepage/Subsidiaries";
import Blogposts from "./Homepage/Blogposts";
import ContactUs from "./Homepage/ContactUs";
import Footprint from "./Homepage/footprint";
import GrowthSection from "./Homepage/GrowthSection";
import HomePageHero from "./Homepage/HomepageHeader";
import SubsidiariesComponent from "./Homepage/SubsidiariesComp";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const HomePage = () => {
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={Fade()}>
            <HomePageHero />
          </Animator>
        </ScrollPage>
        <AnakleSubsidiaries />

        <GrowthSection />
        <Footprint />
        <Blogposts />
        <ContactUs />
      </ScrollContainer>
    </>
  );
};

export default HomePage;
