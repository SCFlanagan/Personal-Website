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
      Hi, I'm Susan. I am a front-end engineer with 3 years of experience building and maintaining web and mobile applications. My area of expertise is in React, React Native, and .NET MAUI, with additional experience in Node.js, .NET, AngularJS, and SQL. I'm skilled at leading projects from concept to deployment and am passionate about delivering responsive, user-centered experiences. I have a proven track record of full-stack development, project ownership, and maintaining live applications. I am based in Millbury, Massachusetts. Contact me if you'd like to connect!
      </p>
      <SocialIcons animateId="about-animate-3" />
    </div>
  );
}

export default About;
