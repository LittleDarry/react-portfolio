import "./NavbarStyles.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {

  const [onClick, setClick] = useState(false); 
  //a Hook function that lets you "hook into" react features
  const handleClick = () => setClick(!onClick);

  //useState for changing the colour when scrolling down, setting the colour using setColour
  const [colour, setColour] = useState(false);
  const changeColour = () => { //Arrow function 
    if (window.scrollY >= 100) { //Scrolling down by pixels
      setColour(true);
    } else {
      setColour(false);
    }
  };

  window.addEventListener("scroll", changeColour);

  return (
    <div className={colour ? "header header-bg" : "header"}>
        <Link to={"/"}>
            <h1>Portfolio</h1>
        </Link>
        <ul className={onClick ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/project"}>Project</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
        </ul>
        <div className="HamburgerBar" onClick= {handleClick}>
          {onClick ? (
          <FaTimes size={20} style={{color: "#fff"}} /> 
          ) : (
          <FaBars size={20} style={{color: "#fff"}}/>
          )}
        </div>
    </div>
  );
};

export default Navigation