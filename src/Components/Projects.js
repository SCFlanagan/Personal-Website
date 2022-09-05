import React from "react";

function Projects() {
  const streetguessrDesc = (
    <p>
      StreetGuessr is a game built using the Google Maps API. You are given an
      interactive street view and must guess where in the world it is located.
      This is a clone of the game{" "}
      <a
        href="http://geoguessr.com"
        target="_blanket"
        rel="noreferrer noopener"
        className="links"
      >
        Geoguessr
      </a>{" "}
      and was a solo project.
    </p>
  );
  const beachHouseDesc = (
    <p>
      A mock e-commerce site selling beach-themed products, featuring a
      responsive design. This was a solo project.
    </p>
  );
  const personalSiteDesc = (
    <p>
      I took this project as an opportunity to have some fun with the front end.
      I played around with CSS animations and achieved the neon lights effect
      using a combination of box-shadow, text-shadow and photoshop. This was a
      solo project.
    </p>
  );

  const projectDetails = [
    {
      title: "StreetGuessr",
      img: require("../images/Streetguessr2.png"),
      desc: streetguessrDesc,
      tech: [
        "JavaScript",
        "React",
        "Redux",
        "Node.JS",
        "Express",
        "MongoDB",
        "Mongoose",
        "Jasmine",
        "Google Maps API",
      ],
      site: "http://streetguessr.herokuapp.com",
      github: "http://github.com/SCFlanagan/streetguessr",
    },
    {
      title: "The Beach House",
      img: require("../images/TheBeachHouse.png"),
      desc: beachHouseDesc,
      tech: [
        "JavaScript",
        "React",
        "Redux",
        "Python",
        "Django",
        "PostgreSQL",
        "Bootstrap",
      ],
      site: "http://thebeachhouse.herokuapp.com",
      github: "http://github.com/SCFlanagan/the-beach-house",
    },
    {
      title: "Personal Website",
      img: require("../images/personal-website.png"),
      desc: personalSiteDesc,
      tech: ["JavaScript", "React", "Sass"],
      site: "",
      github: "http://SCFlanagan/personal-website",
    },
  ];

  return (
    <div className="projects-page">
      <img
        className="rocket-ship dimmer-animation"
        src={require("../images/rocketship.png")}
        alt=""
      />
      <img
        className="balloon-animal"
        src={require("../images/balloonanimal.png")}
        alt=""
      ></img>
      <div id="project-animate-0" className="o-0">
        <h1 className="section-title">
          <span className="text-flicker-animation">P</span>rojects
        </h1>
      </div>
      <div className="projects-container">
        {projectDetails.map((item, index) => {
          return (
            <div
              key={index}
              id={`project-animate-${index + 1}`}
              className="project o-0"
            >
              {item.site.length ? (
                <a href={item.site} target="_blank" rel="noreferrer noopener">
                  <img src={item.img} alt="" className="proj-img" />{" "}
                </a>
              ) : (
                <img src={item.img} alt="" className="proj-img" />
              )}
              <span className="mt-3 mb-3 project-header">
                <h2 className="project-title" id="project-title">
                  {item.title}
                </h2>
                <a href={item.github} target="_blank" rel="noreferrer noopener">
                  <div className="project-icon proj-github-icon"></div>
                </a>
                {item.site.length ? (
                  <a href={item.site} target="_blank" rel="noreferrer noopener">
                    <div className="project-icon proj-link-icon"></div>
                  </a>
                ) : null}
              </span>
              <div className="project-text">
                {item.desc}
                <div className="project-tech-section">
                  {item.tech.map((x, index) => {
                    return (
                      <span key={index} className="project-tech">
                        {x}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
