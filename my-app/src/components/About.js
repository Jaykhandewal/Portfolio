import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import HeroImg2 from '../comp/HeroImg2'
import AboutContent from '../comp/AboutContent'
const About = () => {
  return (
    <div>
        <Navbar/>
      <HeroImg2 heading="JAY KHANDELWAL" text="I am a friendly Front-End Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About