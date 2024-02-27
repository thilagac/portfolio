import React from 'react'
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import HeroImg2 from '../component/HeroImg2';
import AboutContent from '../component/AboutContent';
const About = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading="About." text="Im a friendly Front-End Developer."/>
      <AboutContent/>
    <Footer/> 
    </div>
  )
}

export default About
