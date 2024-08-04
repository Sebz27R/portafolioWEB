import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import grados from "../assets/grados.jpg"
import eia from "../assets/eia2.jpg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>My educational background</h1>
            <p>I graduated from Colegio Calasanz Medellin and I am 
                currently studying in EIA University</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={grados} 
                    className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent