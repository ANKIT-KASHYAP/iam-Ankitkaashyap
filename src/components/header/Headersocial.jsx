import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ankit-kashyap-5733881a5/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/ANKIT-KASHYAP' target='_blank'><FaGithub/></a>
        <a href='https://instagram.com' target='_blank'><FaInstagramSquare/></a>
    </div>

  )
}

export default Headersocial
