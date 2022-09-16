import React from "react";
import Navbar from "../Navbar";
import Noise from "./OurTeam/Noise";
import TeamHeader from "./OurTeam/TeamHeader";
import VideoSection from "./OurTeam/VideoSection";
import Wanderers from "./OurTeam/Wanderers";
import WorkingAtAnakle from "./OurTeam/WorkingAtAnakle";

const OurTeam = () => {
  return (
    <>
      <Navbar />
      <TeamHeader />
      <VideoSection />
      <WorkingAtAnakle/>
      <Noise/>
      <Wanderers />
    </>
  );
};

export default OurTeam;
