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
          Frameworks/Libraries
        </h5>
        <div className="skill-section o-0" id="skill-animate-4">
          <span>React</span>
          <span>React Native</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>Redux</span>
          <span>AngularJS</span>
          <span>.NET Maui</span>
          <span>.NET</span>
        </div>
        <h5 id="skill-animate-5" className="o-0">
          Other Skills
        </h5>
        <div
          className="other-skill-section o-0 margin-bottom-skills"
          id="skill-animate-6"
        >
          <span>UI/UX Design and Implementation</span>
          <span>API Integration</span>
          <span>Front-end architecture</span>
          <span>Full-stack project ownership</span>
          <span>Database Design</span>
          <span>Azure (deployment)</span>
          <span>App Store & Google Play deployment</span>
          <span>Responsive design</span>
          <span>Git</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
