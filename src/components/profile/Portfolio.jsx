import React from 'react'
import './Portfolio.css'
import utube from '../../assests/youube.PNG'
import Ecom from '../../assests/E-com_website.PNG'
import IMG3 from '../../assests/fvs1.PNG'
import IMG4 from '../../assests/todo.jpeg'
import portfolio_web from '../../assests/portfolio.PNG'
import IMG6 from '../../assests/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Project Work</h5>
      <h2>Portfolio</h2>
     <div className="container portfolio__container">
      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={Ecom} alt=''/>
            </div>
              <h3>QuickMart E-commerce Application</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/ANKIT-KASHYAP/QuickMart_E-commerce_website'className='btn' target='_blank'>Github Link</a>
                <a href='https://github.com/ANKIT-KASHYAP/QuickMart_E-commerce_website' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
      </article>
      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={utube} alt=''/>
            </div>
              <h3>Youtube clone</h3>
              <div className="portfolio__item-cta">
                <a href='https://iamankitkashyap-youtube-app.netlify.app/'className='btn' target='_blank'>Github Link</a>
                <a href='https://iamankitkashyap-youtube-app.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
      </article>
      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt=''/>
            </div>
              <h3>Sorting Visalizer Web app</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/ANKIT-KASHYAP/Sorting-visualizer'className='btn' target='_blank'>Github Link</a>
                <a href='https://ankit-kashyap.github.io/Sorting-visualizer/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
      </article>

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt=''/>
            </div>
              <h3>To do application</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/ANKIT-KASHYAP/Mytodoapp'className='btn' target='_blank'>Github Link</a>
                <a href='https://github.com/ANKIT-KASHYAP/Mytodoapp' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
      </article>
      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={portfolio_web} alt=''/>
            </div>
              <h3>Portfolio Website</h3>
              <div className="portfolio__item-cta">
                <a href='https://github.com/ANKIT-KASHYAP/Mytodoapp'className='btn' target='_blank'>Github Link</a>
                <a href='https://github.com/ANKIT-KASHYAP/Mytodoapp' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
         
      </article>
      
      
     
     
      

     </div>
    </section>
  )
}

export default Portfolio