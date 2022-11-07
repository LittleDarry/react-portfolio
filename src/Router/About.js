import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sector2 from '../Components/Sector2';
import AboutSection from '../Components/AboutSection';

const About = () => {
  return (
    <div>
      <Navbar />
      <Sector2 Heading = 'About Me' Text = 'Profile Details' />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default About