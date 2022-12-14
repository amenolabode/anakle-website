import React, { useState } from "react";
import "./../../../styles/homepage.css";
import SubsidiariesComponent from "./SubsidiariesComp";
import {
  anakle,
  anaklefilms,
  anaklelabs,
  drovvo,
  forward,
} from "./Data/subData";
import ANAKLE from "./images/ANAKLE.svg"
import ANAKLEFILMS from "./images/ANAKLEFILMS.svg"
import ANAKLELABS from "./images/ANAKLELABS.svg"
import DROVVO from "./images/DROVVO.svg"
import FORWARD from "./images/forward.svg"

// import { } from "framer-;

const AnakleSubsidiaries = () => {
  // const [name, settoActive] = useState("anakle");
  const subsidiaries = [
    "anakle",
    "anaklefilms",
    "anaklelabs",
    "drovvo",
    "forward",
  ];
  const [subsidiary, setSubsidiary] = useState("anakle");

  return (
    <>
      <div className="">
        <div className=" ">
          <div className="hm-lg-cnt">
            <div className=" home-logos container">
              <div className="logo-content-wrapper">
                <div
                  className="anakle logo-col"
                  onClick={() => setSubsidiary(subsidiaries[0])}
                >
                  <img className="logos-image" src={ANAKLE} alt="" />
                  {/* <h1>ANAKLE</h1> */}
                </div>
                {/*  */}
                <div
                  className="anaklefilms logo-col"
                  onClick={() => setSubsidiary(subsidiaries[1])}
                >
                  <img className="logos-image" src={ANAKLEFILMS} alt="" />
                </div>
                {/*  */}
                <div
                  className="anaklelabs logo-col"
                  onClick={() => setSubsidiary(subsidiaries[2])}
                >
                  <img className="logos-image" src={ANAKLELABS} alt="" />
                </div>
                {/*  */}
                <div
                  className="drovvo logo-col"
                  onClick={() => setSubsidiary(subsidiaries[3])}
                >
                  <img className="logos-image" src={DROVVO} alt="" />
                </div>
                {/*  */}
                <div
                  className="forward logo-col"
                  onClick={() => setSubsidiary(subsidiaries[4])}
                >
                  <img src={FORWARD} alt="" className="logos-image" />
                </div>
              </div>
            </div>
          </div>

          {subsidiary === "anakle" ? (
            <SubsidiariesComponent {...anakle} />
          ) : null}
          {subsidiary === "anaklefilms" ? (
            <SubsidiariesComponent {...anaklefilms} />
          ) : null}
          {subsidiary === "anaklelabs" ? (
            <SubsidiariesComponent {...anaklelabs} />
          ) : null}
          {subsidiary === "drovvo" ? (
            <SubsidiariesComponent {...drovvo} />
          ) : null}
          {subsidiary === "forward" ? (
            <SubsidiariesComponent {...forward} />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AnakleSubsidiaries;
