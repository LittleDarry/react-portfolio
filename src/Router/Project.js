import React from 'react'
import Navbar from '../Components/Navbar';
import Sector2 from '../Components/Sector2';
import Footer from '../Components/Footer';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
        <Navbar />
        <Sector2 Heading = "Projects" Text = "My recent projects and small programes during uni years"/>
        <Work />
        <Footer />
    </div> 
  )
}

export default Project