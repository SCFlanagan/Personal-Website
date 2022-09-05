import React, { useEffect } from "react";

function SocialIcons({ animateId }) {
  return (
    <span id={animateId} className={animateId ? "o-0" : null}>
      <a
        href="https://github.com/SCFlanagan"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="social-icons github-icon"></div>
      </a>

      <a
        href="https://www.linkedin.com/in/scflanagan/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="social-icons linkedin-icon"></div>
      </a>

      <a
        href="mailto:susanflanagan7@gmail.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="social-icons email-icon"></div>
      </a>
    </span>
  );
}

export default SocialIcons;
