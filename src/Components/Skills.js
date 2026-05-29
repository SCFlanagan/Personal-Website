import React from "react";

function Skills() {
  return (
    <div className="skills-page">
      <div id="animation-marker-2"></div>
      <img
        className="donut dimmer-animation"
        src={require("../images/donut.png")}
        alt=""
      />
      <div className="skills-content">
        <h1 className="section-title o-0" id="skill-animate-0">
          Skills
        </h1>
        <h5 id="skill-animate-1" className="o-0">
          Languages
        </h5>
        <div
          className="skill-section o-0 margin-bottom-skills"
          id="skill-animate-2"
        >
          <span>JavaScript</span>
          <span>C#</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <h5 id="skill-animate-3" className="o-0">
          Frontend & Mobile
        </h5>
        <div className="skill-section o-0" id="skill-animate-4">
          <span>React</span>
          <span>React Native</span>
          <span>Angular</span>
          <span>.NET Maui</span>
          <span>Redux</span>
        </div>
        <h5 id="skill-animate-5" className="o-0">
          Backend
        </h5>
        <div className="skill-section o-0" id="skill-animate-6">
          <span>Node.js</span>
          <span>Express</span>
          <span>.NET</span>
          <span>REST APIs</span>
          <span>SQL Server</span>
        </div>
        <h5 id="skill-animate-7" className="o-0">
          Experience Highlights
        </h5>
        <div
          className="other-skill-section o-0 margin-bottom-skills"
          id="skill-animate-8"
        >
          <span>Full-Stack Project Ownership</span>
          <span>End-to-End Product Development</span>
          <span>Cross-Platform Development</span>
          <span>App Store & Google Play Deployment</span>
          <span>Frontend Architecture</span>
          <span>UI/UX Design and Implementation</span>
          <span>API Development & Integration</span>
          <span>Responsive Web Design</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
