import React from 'react'
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import HeroImg2 from '../component/HeroImg2';
import PricingCard from '../component/pricingCard';
import { Work } from '../component/Work';


const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS." text="Some of My Most Recent Works"/>
  <Work/>
    <PricingCard/>
    <Footer/>  
    </div>
  )
}

export default Project
