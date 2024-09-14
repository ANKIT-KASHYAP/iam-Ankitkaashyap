import React from 'react'
import './Services.css'
import CTA from '../header/CTA'
import {AiOutlineCheck}from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I had done </h5>
      <h2>Academic Qualifications</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Master of Computer Application</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> University School of Information, Communication and Technology, New Delhi</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> 2022-2024 | Completed</p>
            </li>
           
          </ul>
        </article>

        {/* ==============END OF SECOND CARD================== */}

        <article className='service'>
          <div className="service__head">
            <h3>Bachelor of Computer Science</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> University Of delhi, Ramanujan Collage</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> 2018-2021 | Completed</p>
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Matriculation </h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Haryana Board of School Education</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> 2014-2015 | Completed</p>
            </li>
          
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Intermediate </h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Haryana Board of School Education</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> 2016-2017 | Completed</p>
            </li>
          
          </ul>
        </article>
       



        

       

        {/* ==============END OF FIRST CARD================== */}
      </div>

    </section>
    

  )
}

export default Services