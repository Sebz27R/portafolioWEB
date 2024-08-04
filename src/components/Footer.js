import "./FooterStyles.css"

import { TiSocialInstagram } from "react-icons/ti";
import { IoMdPhonePortrait } from "react-icons/io";

import React from 'react'
import { FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="instagram">
                    <h4>
                    <TiSocialInstagram size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    s_ruiz04
                    </h4>
                </div>
                <div className="phone">
                    <h4> 
                    <IoMdPhonePortrait size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    3226781832
                    </h4>  
                </div>
                <div className="mail">
                    <h4> 
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    serulo1827@gmail.com
                    </h4>  
                </div>
                <div className="github">
                <h4><FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                Sebz27R</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Sebastian</h4>
                <p>Current student with knowledge in some programming languages like Python, Java, html, css, javascript.
                    I also have some experience working with some frameworks like React and express. Mainly a back-end developer and willing to learn all about cybersecurity.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer