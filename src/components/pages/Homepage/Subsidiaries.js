import React, { useState } from "react";
import "./../../../styles/homepage.css";
import SubsidiariesComponent from "./SubsidiariesComp";
import { anakle, anaklefilms, anaklelabs, drovvo, forward } from "./subData";
import { motion, Variants } from "framer-motion";

const textAnimation = {
  offset: { y: 200, opacity: 0 },
  animated: { y: 0, opacity: 1, rotate: [0, 10, 0] },
};

const imageAnimation = {
  offset: { x: 5000, opacity: 0 },
  animated: { x: 0, opacity: 1 },
};

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
      <div className="home-logos">
        <motion.div
          initial={"offset"}
          whileInView={"animated"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 1 }}
          className="logo-content-wrapper"
        >
          <div
            className="anakle logo-col"
            onClick={() => setSubsidiary(subsidiaries[0])}
          >
            <img className="logos-image" src="./anakle.svg" alt="" />
          </div>
          {/*  */}
          <div
            className="anaklefilms logo-col"
            onClick={() => setSubsidiary(subsidiaries[1])}
          >
            <img className="logos-image" src="./anaklefilms.svg" alt="" />
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
        </motion.div>
      </div>

      {subsidiary === "anakle" ? <SubsidiariesComponent {...anakle} /> : null}
      {subsidiary === "anaklefilms" ? (
        <SubsidiariesComponent {...anaklefilms} />
      ) : null}
      {subsidiary === "anaklelabs" ? (
        <SubsidiariesComponent {...anaklelabs} />
      ) : null}
      {subsidiary === "drovvo" ? <SubsidiariesComponent {...drovvo} /> : null}
      {subsidiary === "forward" ? <SubsidiariesComponent {...forward} /> : null}
    </>
  );
};

export default AnakleSubsidiaries;
