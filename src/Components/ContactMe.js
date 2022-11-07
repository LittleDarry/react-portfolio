import './ContactMeStyle.css'
import React from 'react'

const ContactMe = () => {
  return (
    <div className='contactForm'>
    <form>
        <label>Your name</label>
        <input type='text'></input>
        <label>Email</label>
        <input type='e-mail'></input>
        <label>Subject</label>
        <input type='Subject'></input>
        <label>Message</label>
        <textarea rows='6' placeholder='Leave me a message here' />
        <button className='btn'>Submit</button>
    </form>
    </div>
  )
}

export default ContactMe