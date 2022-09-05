import React from "react";
import SocialIcons from "./SocialIcons";

function About() {
  return (
    <div className="about-page">
      <div id="scroll-down-fade-marker"></div>
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
        JavaScript. Coming from a background in wildlife conservation and
        veterinary health care, I began coding recreationally five years ago and
        fell in love with it. I decided to pursue it professionally and recently
        completed an A.S. in Computer Information Systems with a concentration
        in Web Development and Programming. I am now seeking an entry-level
        full-stack or front-end developer position. I am based out of
        Massachusetts, but am hoping to relocate. Contact me if you'd like to
        connect!
      </p>
      <SocialIcons animateId="about-animate-3" />
    </div>
  );
}

export default About;
