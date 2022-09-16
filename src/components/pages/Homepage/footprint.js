import React from "react";
import "./../../../styles/homepage.css";

const Footprint = () => {
  return (
    <>
      <div className="footprint-container">
        <div className="footprint-container-wrapper container"><div className=" footprint-col">
          <div className="footprint-text-wrapper">

            <div className="footprint-text">
              <div className="footprint-header">
                <p className="topline">PROUDLY SERVED</p>
                <h3 className="footprint-header-text">OUR FOOTPRINT</h3>
                <p className="footprint-subtitle-text">
                  Since our earliest days, we’ve represented companies across
                  almost every sector from Financial services to Telecoms to
                  FMCG. We are a core pillar for international brands who want
                  to succeed in their respective markets. Our stakeholders trust
                  us to bring their stories to life through ad campaigns, TV
                  shows, and internationally broadcast films.
                </p>
              </div>
            </div>

            <div className="footprint-subheader">
              <h4 className="footprint-subheader-text">
                BEING A MULTI-DISCIPLINARY AGENCY SERVING CLIENTS IN NIGERIA,
                GHANA AND NOW CANADA, WE’VE SERVED THE FOLLOWING INDUSTRIES:
              </h4>
              <p className="footprint-subheader-subtitle">
                Architecture, Construction & Engineering | Beer, Wine &
                Hospitality | Education | Banking | Aeronautical Engineering
              </p>
            </div>
          </div>
        </div>
        <div className="footprint-col footprint-logos-container">
          <div className="footprint-logos-wrapper">
            <div className="logos">
              <img className="footprint-logos" src="./british_council-1.png" alt="yaaay" />
              <img className="footprint-logos" src="./wikipedia-1.png" alt="" />
              <img className="footprint-logos" src="./pz.png" alt="" />
            </div>
            <div className="logos">
              <img className="footprint-logos" src="./access.png" alt="" />
              <img className="footprint-logos" src="./PGLogo.png" alt="" />
              <img className="footprint-logos" src="./uba.png" alt="" />
            </div>
            {/* <div className="thirdline-logos">
              <img className="footprint-logos" src="" alt="" />
              <img className="footprint-logos" src="" alt="" />
              <img className="footprint-logos" src="" alt="" />
            </div> */}
          </div>
        </div></div>
      </div>
    </>
  );
};

export default Footprint;
