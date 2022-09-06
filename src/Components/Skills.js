import React from "react";

function Skills() {
  return (
    <div className="skills-page">
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
          Proficient
        </h5>
        <div
          className="skill-section o-0 margin-bottom-skills"
          id="skill-animate-2"
        >
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>Node.JS</span>
          <span>Express</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
        <h5 id="skill-animate-3" className="o-0">
          Knowledgeable
        </h5>
        <div className="skill-section o-0" id="skill-animate-4">
          <span>Python</span>
          <span>Django</span>
          <span>SQL</span>
          <span>MongoDB</span>
          <span>SASS</span>
          <span>Java</span>
          <span>jQuery</span>
        </div>
        <h5 id="skill-animate-5" className="o-0">
          Skills
        </h5>
        <div
          className="skill-section o-0 margin-bottom-skills"
          id="skill-animate-6"
        >
          <span>Git</span>
          <span>Restful APIs</span>
          <span>Responsive Web Design</span>
          <span>Testing</span>
          <span>Basic Photoshop</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
