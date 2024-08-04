import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import React from 'react'


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text1={val.text1}
                    text2={val.text2}
                    text3={val.text3}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work