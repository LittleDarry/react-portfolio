import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sector2 from '../Components/Sector2';


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Sector2 Heading='Contact Me' Text='Feel free to send me a message and I will get back to you' />
      <Footer />
    </div>
  )
}

export default Contact