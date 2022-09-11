import React from "react";
import Button from "../../AppButton";
import './../../../styles/homepage.css'

const HomepageHeader = () => {
  function onClick() {
    console.log("click");
  }
  return (
    <>
      <section className="homepage-header">
        <h1>Accelerate your growth results</h1>
        <p>
          At Anakle, we are agile, strategic, innovative and passionate. Using
          data driven marketing solutions, we help our clients make faster and
          more meaningful connections with their target audience
        </p>

        <Button
          buttonText="CONTACT US"
          onClick={onClick}
        />
      </section>
    </>
  );
};

export default HomepageHeader;
