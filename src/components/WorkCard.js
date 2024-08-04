import "./WorkCardStyles.css"

import React from 'react'
import juegoP from "../assets/juegoProyecto.png"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image"></img>
            <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>
                </div>
    </div>
  )
}

export default WorkCard