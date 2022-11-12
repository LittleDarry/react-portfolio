import "./FooterStyles.css";
import { ImProfile } from 'react-icons/im';
import { IoSchoolOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaGoogleDrive } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-box">
            <div className="footer-left-box">
                <div className="leftbox">
                    <ImProfile size={25} style={{color: "white", marginRight: "36px"}}/>
                    <div><p>Darren Wei</p></div>
                </div>

                <div className="leftbox">
                    <IoSchoolOutline size={25} style={{color: "white", marginRight: "36px"}}/>
                    <div>
                        <p>IIE MSA 2022-Current</p>
                        <p>Bachelor of Computer and information Science Honours</p>
                        <p>IIE Varsity College 2019-2021</p>
                        <p>Bachelor of Computer and Information Science</p>
                        <p>in Application Development</p>
                    </div>
                </div>

                <div className="leftbox">
                    <AiOutlineMail size={25} style={{color: "White", marginRight: "36px"}}/>
                    <div><p>darrenwei655@gmail.com</p></div>
                </div>

                <div className="leftbox">
                    <IoPhonePortraitOutline size={25} style={{color: "White", marginRight: "36px"}}/>
                    <div><p>+27 (76) 338 8929</p></div>
                </div>
            </div>
            <div className="footer-right-box">
                <h4>About Me</h4>
                <p>I am a graduate student from the IIE varsity college,
                completed my bachelor degree in computer and information science in application
                development, currently completing an honours degree at IIE MSA and I am interested
                in any graduate program for next year</p>
                <div className="social">
                    <a href="https://github.com/LittleDarry"><AiFillGithub size={28} style={{color: "white", marginRight: "20px"}}/></a>
                    <a href="https://www.linkedin.com/in/wei-darren/"><AiFillLinkedin size={28} style={{color: "white", marginRight: "20px"}}/></a>
                    <a href="https://drive.google.com/drive/folders/1VVDH1woP0gLiTkBXUMkJ_05MfYAFZYGT?usp=sharing"><FaGoogleDrive size={28} style={{color: "white", marginRight: "20px"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer