import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand" href="/">
        <img src="images/weather.png" alt="" loading="lazy" />
      </a>
      <span className="navbar-text">Weather</span>
    </nav>
  );
}
