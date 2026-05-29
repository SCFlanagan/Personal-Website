import React from "react";

function Projects() {
  const beachHouseDesc = (
    <p>
      This is a mock e-commerce site selling beach-themed products, built
      entirely by me. I built a restful backend that stores data persistently in
      a cloud database using AWS RDS and S3. It features a responsive UI design
      and user authentication, with two different experiences for users who are
      logged in and those who are not.
    </p>
  );
  const streetguessrDesc = (
    <div>
      <p>
      StreetGuessr is an interactive location-based web application inspired by{" "}
      <a
        href="https://geoguessr.com"
        target="_blank"
        rel="noreferrer noopener"
        className="links"
      >
        Geoguessr
      </a>
      . Users are placed into Google Street View locations and must identify where they are in the world using an interactive map interface.
  </p>
  <p>
The project integrates the Google Maps and Street View APIs, features responsive UI design, and includes backend functionality for storing game data and map locations. It was built as a solo full-stack project using React, Node.js, and Redux.
    </p>
    </div>
  );
  const personalSiteDesc = (
    <div>
      <p>
        I designed and developed this portfolio site as a creative frontend project centered around a custom neon sign-inspired style.
      </p>
      <p>
        The site features handcrafted UI components, CSS animations, glow effects, and custom graphics designed to recreate the feel and movement of neon signs, while showcasing my development experience.
      </p>
    </div>
  );

  const projectDetails = [
    // {
    //   title: "The Beach House",
    //   img: require("../images/TheBeachHouse.png"),
    //   desc: beachHouseDesc,
    //   tech: [
    //     "JavaScript",
    //     "React",
    //     "Redux",
    //     "Python",
    //     "Django",
    //     "PostgreSQL",
    //     "AWS",
    //     "Bootstrap",
    //   ],
    //   site: "https://thebeachhouse.herokuapp.com",
    //   github: "https://github.com/SCFlanagan/the-beach-house",
    // },
    {
      title: "StreetGuessr",
      img: require("../images/Streetguessr.png"),
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
      site: "",
      github: "https://github.com/SCFlanagan/streetguessr",
    },
    {
      title: "Portfolio Website",
      img: require("../images/personal-website.png"),
      desc: personalSiteDesc,
      tech: ["JavaScript", "React", "SCSS"],
      site: "",
      github: "https://github.com/SCFlanagan/personal-website",
    },
  ];

  return (
    <div className="projects-page">
      <img
        className="rocket-ship dimmer-animation"
        src={require("../images/rocketship.png")}
        alt=""
      />
      <div className="cell-phone cell-animation" aria-hidden="true"></div>
      <div id="project-animate-0" className="o-0">
        <h1 className="section-title">
          Personal Projects
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
