import React from "react";
import "./styles/Navbar.css";

export const Navbar = () => {
  const navItems = ["about", "projects", "contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
