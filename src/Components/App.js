import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    setTimeout(() => {
      let titles = document.getElementsByClassName("landing-title");
      titles[0].className = "landing-title text-surge-animation";
      titles[1].className = "landing-title text-surge-animation";
    }, 2600);

    // Animate an element when it comes into view
    const animateWhileScrolling = (triggerId, idAndClassArr) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            idAndClassArr.forEach((item) => {
              let elem = document.getElementById(item.id);
              elem.className = `${elem.className} ${item.class}`;
            });
          }
        });
      });
      observer.observe(document.getElementById(triggerId));
    };

    // Animate the skills page while scrolling.
    for (let i = 0; i < 7; i++) {
      animateWhileScrolling(`skill-animate-${i}`, [
        {
          id: `skill-animate-${i}`,
          class: "rise-and-appear-animation",
        },
      ]);
    }

    // Animate the about page while scrolling.
    for (let i = 0; i < 4; i++) {
      animateWhileScrolling(`about-animate-${i}`, [
        {
          id: `about-animate-${i}`,
          class: "rise-and-appear-animation",
        },
      ]);
    }

    // Animate the projects page while scrolling.
    for (let i = 0; i < 4; i++) {
      let animationClass =
        i === 0
          ? "rise-and-appear-animation"
          : "project-rise-and-appear-animation";
      animateWhileScrolling(`project-animate-${i}`, [
        { id: `project-animate-${i}`, class: animationClass },
      ]);
    }

    // Make scroll down indication disappear when you start to scroll
    animateWhileScrolling("animation-marker-1", [
      {
        id: "scroll-down",
        class: "scroll-down-fade-animation",
      },
    ]);
  });

  return (
    <div className="app">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
