import React from 'react'
import './AboutContent.css';
import { Link } from 'react-router-dom';
import im1 from '../assets/im1.jpg'
import im2 from '../assets/im2.jpg'
const AboutContent = () => {
  return (
    <div className='about'> 
      <div className='left'>
          <h1>Who Am I?</h1>
          <p>Im a react front-end developer.I create responsuve secure website for my clients</p>
     <Link to="/contact">
        <button className='btn'>Contact</button>
     </Link>
     
      </div>
      <div className='right'>
 <div className='img-container'>
    <div className='img-stack top'>
<img src={im1} className='img'/>
    </div>
    <div className='img-stack bottom'>
<img src={im2} className='img'/>
    </div>
 </div>
      </div>
    </div>
  )
}

export default AboutContent
