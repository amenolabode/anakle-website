import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const teamvideo = () => {
  return (
    <>
      <Container>
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default teamvideo;
