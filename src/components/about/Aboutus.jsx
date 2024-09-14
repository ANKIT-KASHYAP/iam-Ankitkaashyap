import React from 'react'
import './Aboutus.css'

import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import Flipimage from './Flipimage.jsx'

const Aboutus = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me"></div> */}
          {/* <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div> */}
{/* flip card start------------------------------------------------ */}

       <Flipimage/>


          {/* flip card============================================ */}
        
        <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FiAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>I am Freasher</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Internships</h5>
                  <small>1+ Completed</small>
                </article>


                 <article className='about__card'>
                  <AiOutlineFolderOpen className='about__icon'/>
                  <h5>Projects</h5>
                  <small>3+ Completed</small>
                </article>
              </div>
            <p>
            My name is Ankit, and I am a web developer with strong proficiency in HTML, CSS, tailwindCss, JavaScript, React.js, Node.js, and databases like MongoDB, MySQL, and SQL. I have also gained hands-on experience during my internship at CodSoft, where I worked as a front-end developer. In addition to my development skills, I am familiar with programming languages including C++, Java, and JavaScript, and I use tools like Git, GitHub, and Postman for testing. My background also includes a comprehensive understanding of software testing and quality assurance, ensuring high standards in all projects I undertake.   </p>
            
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Aboutus