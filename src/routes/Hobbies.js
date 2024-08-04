import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import AboutContent2 from '../components/AboutContent2'

const Hobbies = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME" text="Some of my studies and hobbies"/>
      <AboutContent/>
      <AboutContent2/>
      <Footer />
    </div>
  )
}

export default Hobbies