import { useEffect } from "react";
import SocialIcons from "./SocialIcons";

function Contact() {
  useEffect(() => {
    let btn = document.getElementById("resume-btn");
    btn.addEventListener("onmouseover", () => {
      btn.className = "resume-btn resume-hover-animation";
    });
    btn.addEventListener("onmouseleave", () => {
      btn.className = "resume-btn resume-animation";
    });
  });

  return (
    <div className="contact-page">
      <img
        className="cloud-and-moon"
        src={require("../images/cloudandmoon.png")}
        alt=""
      />
      <img className="planet" src={require("../images/planet.png")} alt="" />
      <div className="contact-content">
        <h1 className="section-title">Contact Me</h1>
        <p className="contact-text">You can download my resume here:</p>
        <a
          className="resume-btn "
          id="resume-btn"
          target="_blank"
          rel="noreferrer"
          href="https://www.docdroid.net/UEPJAUp/susanflanaganresume-pdf"
        >
          RESUME
        </a>
        <p className="contact-text">
          Check me out on LinkedIn and GitHub or send me an email to connect.
        </p>
        <SocialIcons />
        <p className="contact-text footer-text">
          This website was designed, developed, and animated by Susan Flanagan.
        </p>
      </div>
    </div>
  );
}

export default Contact;

/*
https://www.vectorstock.com/royalty-free-vector/flamingo-bird-icon-outline-style-vector-12489081
*/

/*
https://flyclipart.com/line-nature-outline-palm-plant-tree-tropical-icon-tree-outline-png-433505


https://media.istockphoto.com/vectors/cute-balloon-dog-cartoon-blue-color-vector-id1150086140?k=20&m=1150086140&s=612x612&w=0&h=4S5mxfKbDawhZAPfWqn_JTBF2RxRKzSHMBluzgYs8AU=


https://static.vecteezy.com/system/resources/thumbnails/009/241/642/small/spaceship-outline-icon-free-vector.jpg

https://eadn-wc03-463152.nxedge.io/cdn/media/catalog/product/cache/1d858328874ebd6a1883e32a918ffc61/f/r/frosteddonut-turnedon-customneon.jpg

Fav.icon


https://www.cleanpng.com/png-computer-icons-font-awesome-icon-design-button-1417937/preview.html
*/
