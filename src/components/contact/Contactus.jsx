import React from 'react'
import './Contactus.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import { CiLinkedin } from "react-icons/ci";
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contactus = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
       <h3 className='contact_me'>Contact Me</h3>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>27ankitkashyap@gmail.com</h5>
            <a href='mailto:27ankitkashyap@gmail.com' target='_blank'>Connect with me</a>
          </article>

          <article className='contact__option'>
          <CiLinkedin className='contact__option-icon' />
           
            <h4>Linkedin</h4>
            <h5>Ankit kashyap</h5>
            <a href='https://www.linkedin.com/in/ankit-kashyap-5733881a5/' target='_blank'>Let's Connect and Talk</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+918882520239</h5>
            <a href='https://api.whatsapp.com/send?phone=918882520239' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* =========end of cobtact options========= */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email ' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      
      </div>
    </section>
  )
}

export default Contactus