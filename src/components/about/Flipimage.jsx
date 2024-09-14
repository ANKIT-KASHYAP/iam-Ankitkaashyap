import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import ME from '../../assests/foto_image.png'
import './Flipimage.css';
import { FaGithub } from 'react-icons/fa';

const Flipimage = () => {
  return (
    <>
 <div className="wrapper">
      <div className="card front-face">
        <img src={ME} alt='myimage' />
      </div>
      <div className="card back-face">
        <img src={ME} alt='myimage' />
        <div className="info">
          <div className="title">Ankit Kashyap</div>
          <p>Web Developer <br />front-end developer</p>
        </div>
        <ul>
       
        <a href='https://github.com/ANKIT-KASHYAP' target='blank'><FaGithub /></a>
        < a href='https://leetcode.com/u/27ankitkashyap/' target='blank'><SiLeetcode/></a>
        <a href='https://www.linkedin.com/in/ankit-kashyap-5733881a5/' target='blank'><BsLinkedin/></a>
        <a href='https://www.geeksforgeeks.org/user/27ankitkashyap/?utm_source=geeksforgeeks'target='blank'><SiGeeksforgeeks /></a>

        </ul>
      </div>
    </div>

    </>
  )
}

export default Flipimage