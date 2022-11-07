import './ProjectCardsStyle.css'
import React from 'react'

import { NavLink } from 'react-router-dom';

const ProjectCards = (props) => {
  return (
    <div className='projectCards'>
        <img src={props.imgsrc} alt='img not found'/>
        <h2 className='projectTitle'>{props.title}</h2>
        <div className='projectDetails'>
            <p>{props.text}</p>
            <div className='projectBtn'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCards