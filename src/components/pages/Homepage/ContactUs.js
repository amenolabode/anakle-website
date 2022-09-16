import React from "react";
import Button from "../../AppButton";
import "./../../../styles/homepage.css";

const ContactUs = ({ onClick }) => {
  return (
    <>
      <div className="contact-wrapper container">
        <h1 className="contact-text">HAVE A PROJECT? LET’S TALK</h1>
        <div className="contact-button-wrapper">
          <Button
            className="homebutton contact-button"
            bgColor="white"
            txtColor="black"
            buttonText="CONTACT US"
            fontsize="18px"
            fontweight="bold"
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
