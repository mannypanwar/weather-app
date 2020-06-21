import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-text">
        <h4 className="footer-h">Built on React using open weather API</h4>
      </div>

      <a href="/">
        <img src="images/github.png" alt="github" />
      </a>
    </section>
  );
}
