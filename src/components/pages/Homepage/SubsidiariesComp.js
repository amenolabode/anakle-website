import React from "react";
import "./../../../styles/homepage.css";

const SubsidiariesComponent = () => {
  return (
    <>
      <div className="sub-container">
        <div className="sub-col">
          <div className="sub-img-wrapper">
            <img src="./blogimage.jpg" alt="" className="sub-img" />
          </div>

          <div className="sub-content-container">
            <div className="sub-content-wrapper">
              <p className="sub-content-topline">THE COMPANY</p>
              <img src="./ANAKLE.svg" alt="" className="sub-logo" />
              <p className="sub-content-underline">The Agency</p>
              <p className="sub-content-text">
                Marketing is constantly evolving, and our team is constantly
                adapting to help clients build experiences for their offline and
                online platforms to ensure maximum return on their advertising
                investments. Our team offers localised solutions, tailored to
                meet specific client needs. Clients are involved throughout the
                strategy design process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubsidiariesComponent;
