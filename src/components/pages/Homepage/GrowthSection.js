import React, { useState } from "react";
import "./../../../styles/homepage.css";
import { accordiondata } from "./Data/GrowthAccordionData";
import { FaChevronDown } from "react-icons/fa";

const GrowthSection = () => {
  const [selected, setSelection] = useState(null);

  const toggle = (i) => {
    if(selected === i ) {
      return setSelection(null);
    }
    setSelection(i);
  }

  return (
    <>
      <div className="growth-container">
        <div className="growth-row container">
          <div className="growth-container-wrapper ">
            <img src="./growth-heart.gif" alt="" className="growth-image-1 growth-image" />
            <img src="./growth-bar.gif" alt="" className="growth-image-2 growth-image" />
            <h2 className="growth-header">
              More than an Agency, <br /> we're a Growth Marketing Company
            </h2>
            <p className="growth-subtitle">
              
              With our comprehensive suite of marketing
              solutions, we help you get a good understanding of your ideal
              clients then craft the right strategy to achieve your business
              goals.
            </p>
            <div className="growth-row-wrapper container">
              <div className="accordion">
                {accordiondata.map((accordiondata, i) => (
                  <div className="item" onClick={() => toggle(i)}>
                    <div className="title">
                      <h2 className="accordion-title-text">
                        {" "}
                        {accordiondata.topline}{" "}
                      </h2>
                      <span>
                        {" "}
                        <FaChevronDown className={selected === i ? "iconshow" : ""}/>{" "}
                      </span>
                    </div>
                    <div className={selected === i ? "show" : "content"}>{accordiondata.text}</div>
                  </div>
                ))}
              </div>
              
            </div>

            {/* <div className="growth-col">
              <h3 className="growth-item-header">CREATIVE & DESIGN</h3>
              <ul className="growth-list">
                <li className="growth-item">Design Direction</li>
                <li className="growth-item">Creative Concepts & Ideas</li>
                <li className="growth-item">Storytelling</li>
                <li className="growth-item">Branding & Identity</li>
                <li className="growth-item">Web and Mobile UI</li>
                <li className="growth-item">App Design</li>
                <li className="growth-item">User Experience</li>
                <li className="growth-item">Wireframing & Prototyping</li>
                <li className="growth-item">Micro Interactions</li>
              </ul>
            </div>
            <div className="growth-col">
              <h3 className="growth-item-header">STRATEGY</h3>
              <ul className="growth-list">
                <li className="growth-item">Digital Strategy</li>
                <li className="growth-item">Content Strategy</li>
                <li className="growth-item">Brand Experience</li>
                <li className="growth-item">User Research</li>
                <li className="growth-item">Data Analysis</li>
                <li className="growth-item">Social Media Campaigns</li>
                <li className="growth-item">Sharable Content</li>
              </ul>
            </div>
            <div className="growth-col">
              <h3 className="growth-item-header">DEVELOPMENT</h3>
              <ul className="growth-list">
                <li className="growth-item">Responsive developement</li>
                <li className="growth-item">Creative Front & Back End</li>
                <li className="growth-item">Websites & Web Applications</li>
                <li className="growth-item">E-Commerce</li>
                <li className="growth-item">Gamification</li>
                <li className="growth-item">CMS</li>
              </ul>
            </div>
            <div className="growth-col">
              <h3 className="growth-item-header">DIGITAL</h3>
              <ul className="growth-list">
                <li className="growth-item">Social Media Management</li>
                <li className="growth-item">Online Reputation Management</li>
                <li className="growth-item">Social Media Campaigns</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
