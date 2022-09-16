import React from "react";
import "./../../../styles/team.css";
import ANAKLE from "./../Homepage/images/ANAKLE.svg"

const WorkingAtAnakle = () => {
  return (
    <>
      <div className="working-container">
        <div className="working-content-wrapper">
          <div className="working-col-1">
            <p className="working-overline">Working at</p>
            <img src={ANAKLE} alt="" className="anakle-logo" />
          </div>

          <div className="working-col-2">
            <p className="working-content">
              Working at Anakle provides a unique life experience for every
              member of our team. Anakle operates a flat, boss-free atmosphere,
              where smart, happy people thrive, with a long term goal of
              creating the happiest workplace in Africa.{" "}
              <span className="bold">
                Our team model is “pretend you’re a genius, then act like one.”
              </span>{" "}
              This model believes that the solution to every problem can be
              found, not because we are the smartest, but because we will never
              give up till we find it. Our uni-creative system ensures every
              team member works across the creative technology spectrum; team
              members are likely to learn design, programming, client
              management, creative writing, DJing, drone flying,{" "}
              <span className="bold">puff puff eating</span> etc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingAtAnakle;
