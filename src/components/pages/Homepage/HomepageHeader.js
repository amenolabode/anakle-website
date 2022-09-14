import React from "react";
import Button from "../../AppButton";
import "./../../../styles/homepage.css";

const HomePageHero = () => {
  function onClick() {
    console.log("click");
  }
  return (
    <>
      <div className="home-hero">
        <div className="hero-container">
          <div className="row">
            <div className="col">
              <div className="hero-text-wrapper">
                <h1 className="heading">Accelerate your growth results!</h1>
                <p className="subtitle">
                  At Anakle, we are agile, strategic, innovative and passionate.
                  Using data driven marketing solutions, we help our clients
                  make faster and more meaningful connections with their target
                  audience.
                </p>
                <Button
                  className="homebutton"
                  bgColor="white"
                  txtColor="black"
                  buttonText="CONTACT US"
                  fontsize="18px"
                  fontweight="bold"
                  onClick={onClick}
                />
              </div>
            </div>

            <div className="col">
              <div className="hero-image-wrapper">
                <img src="./heroimage.png" alt="Car" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;
