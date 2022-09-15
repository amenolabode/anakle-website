import React from "react";
import { Container } from "react-bootstrap";
import "./../../../styles/team.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";

const VideoSection = () => {
  return (
    <>
      <div className="video-container">
        <div className="video-wrapper">
          <Container>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/66XwG1CLHuU?autoplay=1&mute=1&playlist=66XwG1CLHuU&loop=1&controls=0"
                title="YouTube video"
                width="1280px"
                height="720px"
                // allowFullScreen
              ></iframe>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
