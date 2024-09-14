import React from 'react'
import './Head.css'
import CTA from './CTA'
import ME from '../../assests/My_image_bg_remove.png'
import Headersocial from './Headersocial'
import Textsyle from './Textsyle'
import './Textsyle.css'
const Head = () => {
  return (
    <header>
        <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Ankit Kashyap </h1>
        <Textsyle/>
        {/* <h5 className="tex-light">Fullstack Developer</h5> */}
       <CTA/>
       <Headersocial/>
       <div className="me">
        <img src={ME} alt="" />
       </div>
    <a href='#contact' className='scroll_down'>Scroll Down</a>

       
    </div>
    </header>
  )
}
export default Head


