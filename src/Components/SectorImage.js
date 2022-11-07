import "./SectorImageStyle.css";

import React from 'react'
import intoImage from '../Images/Project1.jpg';
import { Link } from "react-router-dom";

const SectorImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {intoImage} alt="Img not found"/>
        </div>
        <div className="content">
            <p>Hi, Welcome</p>
            <h1>My Portfolio Page</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default SectorImage