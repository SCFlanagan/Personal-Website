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
    <p>
      StreetGuessr is a clone of the game{" "}
      <a
        href="https://geoguessr.com"
        target="_blanket"
        rel="noreferrer noopener"
        className="links"
      >
        Geoguessr
      </a>{" "}
      , replicating its exact game function and responsive UI design. You are
      given a street view and must guess where in the world it is located. I
      integrated the Google Maps API, featuring two different interactive maps
      and moveable markers. It features a RESTful API, with tests, that stores
      map locations using a noSQL database. It was a solo project.
    </p>
  );
  const personalSiteDesc = (
    <p>
      I took creating my portfolio site as an opportunity to have some fun with
      the front end. I achieved the neon lights effect using a combination of
      photoshop and the CSS properties box-shadow, text-shadow. I used CSS
      animations to animate elements while scrolling and to mimic the movement
      of neon signs. This site features a responsive UI design.
    </p>
  );

  const projectDetails = [
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
        "AWS",
        "Bootstrap",
      ],
      site: "https://thebeachhouse.herokuapp.com",
      github: "https://github.com/SCFlanagan/the-beach-house",
    },
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
      site: "https://streetguessr.herokuapp.com",
      github: "https://github.com/SCFlanagan/streetguessr",
    },
    {
      title: "Personal Website",
      img: require("../images/personal-website.png"),
      desc: personalSiteDesc,
      tech: ["JavaScript", "React", "Sass", "Photoshop"],
      site: "",
      github: "https://SCFlanagan/personal-website",
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
