import React from "react";
import SocialIcons from "./SocialIcons";

function About() {
  return (
    <div className="about-page">
      <div id="animation-marker-1"></div>
      <div id="about-animate-0" className="o-0">
        <h1 className="section-title text-surge-animation">
        <span className="text-flicker-animation">A</span>bout
        </h1>
      </div>
      <img
        id="about-animate-1"
        src={require("../images/headshot.png")}
        alt=""
        className="bio-photo o-0"
      />
      <div className="bio o-0" id="about-animate-2">
      <p>
        Hi, I’m Susan, a frontend and mobile engineer who enjoys building intuitive, user-focused applications from design through deployment. 
      </p>
      <p>
        Having spent the last several years working in a small, fast-moving engineering environment, I’ve had the opportunity to take end-to-end ownership of multiple cross-platform mobile and web applications, including frontend architecture, UI/UX design, API development, database integration, and App Store/Google Play deployments.
      </p>
      <p>
        My experience includes React, React Native, Angular, and .NET MAUI, along with backend API and database development using Node.js, Express, .NET, and SQL Server. 
      </p>
      </div>
      <SocialIcons animateId="about-animate-3" />
    </div>
  );
}

export default About;
