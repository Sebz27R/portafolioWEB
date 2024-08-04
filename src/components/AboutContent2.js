import { Link } from "react-router-dom"
import "./AboutContentStyles2.css"
import equipoFutbol from "../assets/equipoFutbol.jpg"


import React from 'react'

const AboutContent2 = () => {
  return (
    <div className="about2">
        <div className="left">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={equipoFutbol} 
                    className="img" alt="true"/>
                </div>
            </div>
        </div>
        <div className="right">
            <h1>My hobbies</h1>
            <p>I love doing sports. I have played soccer since I was really young
                 and for a few years I was competing with soccer 
                 teams in the Antioquia's Soccer League. 
                 Currently I only work out in the gym and play 
                 soccer from time to time. 
                 Exercise has always been present 
                 throughout my life and became a fundamental
                part of it. 
            </p>
        </div>

        
    </div>
  )
}

export default AboutContent2