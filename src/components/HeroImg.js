import "./HeroImgStyles.css"

import React from 'react'

import personaEnComputador from "../assets/personaEnComputador.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
             <img className="into-img" src={personaEnComputador} alt="personaEnComputador"/>
        </div>
        <div className="content">
            <p>Hi, I am Sebastian Ruiz</p>
            <h1>Computer and software engineering student</h1>
            <div>
              <Link to="/project" className="btn">Projects</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>  
            </div>
        </div>
    </div>
  )
}

export default HeroImg