import './ProjectCardsStyle.css'
import React from 'react'
import ProjectCard from './ProjectCards'
import WordCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='workContainer'>
        <h1 className='Heading'>Projects and Tasks</h1>
        <div className='projectContainer'>
            {WordCardData.map((Value, Index) => {
              return (
                <ProjectCard 
                key={Index}
                imgsrc={Value.imgsrc}
                title={Value.title}
                text={Value.text}
                view={Value.view}
                />
              )
            })}
        </div>
    </div>
  )
}

export default Work