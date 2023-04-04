import React from "react";
import SocialIcons from "./SocialIcons";

function About() {
  return (
    <div className="about-page">
      <div id="animation-marker-1"></div>
      <div id="about-animate-0" className="o-0">
        <h1 className="section-title text-surge-animation">About</h1>
      </div>
      <img
        id="about-animate-1"
        src={require("../images/biophoto.JPG")}
        alt=""
        className="bio-photo o-0"
      />
      <p className="bio o-0" id="about-animate-2">
        Hi! I'm Susan. I am a full-stack web developer who works mainly with
        JavaScript. My specialty is building mobile apps and websites using
        React Native and React on the front end and Node and SQL on the back
        end. I love creating intuitive and appealing UI/UX designs. I am based
        out of Massachusetts. Contact me if you'd like to connect!
      </p>
      <SocialIcons animateId="about-animate-3" />
    </div>
  );
}

export default About;
