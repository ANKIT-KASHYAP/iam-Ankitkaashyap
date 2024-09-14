import React from 'react'
import './Footer.css'
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ANKIT KASHYAP</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#sevices'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
       
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/ANKIT-KASHYAP'><FaGithub /></a>
        < a href='https://leetcode.com/u/27ankitkashyap/'><SiLeetcode/></a>
        <a href='https://www.linkedin.com/in/ankit-kashyap-5733881a5/'><BsLinkedin/></a>
        <a href='https://www.geeksforgeeks.org/user/27ankitkashyap/?utm_source=geeksforgeeks'><SiGeeksforgeeks /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; Ankit Kashyap. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer