import React from "react";
import Button from "../../AppButton";
import "./../../../styles/homepage.css";

const AnakleSubsidiaries = () => {
  return (
    <>
      <div className="home-logos">
        <div className="logo-content-wrapper">
          
          <div className="anakle logo-col">
            <a href="#">
              
              <img className="logos-image" src="./anakle.svg" alt="" />
            </a>
          </div>
          <div className="anakle logo-col">
            <a href="#">
              <img className="logos-image" src="./anaklefilms.svg" alt="" />
            </a>
          </div>
          <div className="anaklefilms logo-col">
            <a href="#">
              <img className="logos-image" src="./anaklelabs.svg" alt="" />
            </a>
          </div>
          <div className="drovvo logo-col">
            <a href="#">
              <img className="logos-image" src="./drovvo.svg " alt="" />
            </a>
          </div>
          <div className="forward logo-col">
            <a href="#">
              <img src="./image.svg" alt="" className="logos-image"  />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnakleSubsidiaries;
