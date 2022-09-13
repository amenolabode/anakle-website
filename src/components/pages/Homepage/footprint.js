import React from "react";
import "./../../../styles/homepage.css";

const Footprint = () => {
  return (
    <>
      <div className="footprint-container">
        <div className="footprint-content-wrapper">
          <div className="footprint-col footprint-text">

            <div className="footprint-header">
              <p className="overline">PROUDLY SERVED</p>
              <h3 className="footprint-header-text">OUR FOOTPRINT</h3>
              <p className="footprint-subtitle-text">
                Since our earliest days, we’ve represented companies across
                almost every sector from Financial services to Telecoms to FMCG.
                We are a core pillar for international brands who want to
                succeed in their respective markets. Our stakeholders trust us
                to bring their stories to life through ad campaigns, TV shows,
                and internationally broadcast films.
              </p>
            </div>
          </div>

          <div className="footprint-subheader">
            <h4 className="footprint-subeader-text">
                BEING A MULTI-DISCIPLINARY AGENCY SERVING CLIENTS IN NIGERIA, GHANA AND NOW CANADA, WE’VE SERVED THE FOLLOWING INDUSTRIES:
            </h4>
            <p className="footprint-subheader-subtitle">
            Architecture, Construction & Engineering | Beer, Wine & Hospitality | Education | Banking | Aeronautical Engineering
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footprint;
