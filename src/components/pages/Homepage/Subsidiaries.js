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
import anaklelogo from "./anakle.svg";

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
                  <img className="logos-image" src={anaklelogo} alt="" />
                  {/* <h1>ANAKLE</h1> */}
                </div>
                {/*  */}
                <div
                  className="anaklefilms logo-col"
                  onClick={() => setSubsidiary(subsidiaries[1])}
                >
                  <img className="logos-image" src="./logo192.png" alt="" />
                </div>
                {/*  */}
                <div
                  className="anaklelabs logo-col"
                  onClick={() => setSubsidiary(subsidiaries[2])}
                >
                  <img className="logos-image" src="./anaklelabs.svg" alt="" />
                </div>
                {/*  */}
                <div
                  className="drovvo logo-col"
                  onClick={() => setSubsidiary(subsidiaries[3])}
                >
                  <img className="logos-image" src="./drovvo.svg " alt="" />
                </div>
                {/*  */}
                <div
                  className="forward logo-col"
                  onClick={() => setSubsidiary(subsidiaries[4])}
                >
                  <img src="./forward.svg" alt="" className="logos-image" />
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
