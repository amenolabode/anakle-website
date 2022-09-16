import React from "react";

const Wanderers = () => {
  return (
    <>
      <div className="wanderers-container">
        <div className="wanderers-content-wrapper">
          <iframe
            className="wanderer"
            title="animation"
            src="https://embed.lottiefiles.com/animation/115190"
            width="720px"
            height="400px"
          ></iframe>
          <div className="CTA">
            <h1 className="wanderers-text">
              Wanderers, <br /> Welcome
            </h1>
            <p className="wanderers-subtitile">
              Our recruitment process places high premium on teamwork and
              happiness, because our team loses creative coherence, if our team
              members are not happy. We are also a women-friendly technology
              team. Our recruitment lines are always open even though there are
              no open vacancies. Simply send us the answer to the question “why
              did the chicken cross the road”, along with a CV/resume, emailed
              to hr@anakle.com
            </p>
            <button className="nav-button black-button">Join Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wanderers;
