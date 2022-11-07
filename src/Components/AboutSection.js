import './AboutSectionStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../Images/CSharp.png'
import img3 from '../Images/VS.png'
import img4 from '../Images/VScode.png'
import ProfileImage from '../Images/ProfileImg.PNG'

const AboutSection = () => {
  return (
    <div className='aboutContainer'>
        <div className='top'>
            <img className='ProImg' src= {ProfileImage} alt='Avatar'/>
            <h1>
                Who Am I?
            </h1>
            <p>
                I'm a graduate student from the IIE Varsity College, and soon will be a graduate honor
                from IIE MSA. Completed my Bachlor's degree in Computer and Information Science in Application
                Development, currently completing an honours degree in Computer and Informaiton science. I am in
                the market for any types of interships or graduate work. I want to become a developer and working
                with a team, expanding my knowledge and skills.
            </p>
            <Link to='/contact'>
                <button className='btn'>Contact Me</button>
            </Link>
        </div>

        <div className='bottom'>
            <div className='image-box'>
                <div className='order1'>
                    <img className='img' src={img3} alt='Img not found'/>
                </div>
                <div className='order2'>
                    <img className='img' src={img4} alt='Img not found'/>
                </div>
                <div className='order3'>
                    <img className='img' src={img1} alt='Img not found' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection