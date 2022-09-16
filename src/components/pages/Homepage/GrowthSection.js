import React from "react";
import "./../../../styles/homepage.css";

const GrowthSection = () => {
  return (
    <>
      <div className="growth-container">
        <div className="growth-row container" >
          <div className="growth-container-wrapper ">
            <h2 className="growth-header">
              We are more than an Agency, we're a Growth Marketing Company
            </h2>
            <p className="growth-subtitle">
              Trying to figure out how to scale and which marketing channels
              will help you grow fastest can be confusing and stressful. Every
              company is different so finding out what works for you is
              important. Driving the right customers to your small business and
              achieving real ROI is essential for any B2B and B2C company. 
              <br />
              <br />
               This is where we come in. With our comprehensive suite of marketing
              solutions, we help you get a good understanding of your ideal
              clients then craft the right strategy to achieve your business
              goals.
            </p>
          </div>

          <div className="growth-row-wrapper container">
            <div className="growth-col">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthSection;
