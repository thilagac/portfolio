import "./HeroImg.css";
import React from 'react'
import IntroImg from "../assets/hero.jpg"
import { Link } from "react-router-dom";
const HeroImg=()=>{
<div className=""></div> 
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroIMG"/>
        </div>
        <div className="content">
            <p>HI, I'M A THILAGAVATHI.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/Project" className="btn"> Projects</Link>
                <Link to="/Contact" className="btn btn-light"> Contact</Link>
            </div>
            
        </div>
    </div>
  )
}

export default HeroImg;
