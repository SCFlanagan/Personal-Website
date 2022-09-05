function Landing() {
  return (
    <div className="landing-page">
      <h1 className="landing-title start-animation">Susan Flanagan</h1>
      <h1 className="landing-title start-animation">Web Developer</h1>
      <div className="scroll-down scroll-down-appear-animation">
        <div id="scroll-down">
          <p>Scroll Down </p>
          <i className="fa-solid fa-angle-down scroll-arrow-animation"></i>
        </div>
      </div>
      <div id="flamingo" className="flamingo flamingo-start-animation"></div>
      <div className="palm-tree palm-tree-start-animation" />
    </div>
  );
}

export default Landing;
