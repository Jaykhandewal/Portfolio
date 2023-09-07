import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import HeroImg2 from '../comp/HeroImg2';
import Work from '../comp/Work';
 const Project = () => {
  return (
    <div>
       <Navbar/>
      <HeroImg2 heading="Projects" text="Some of My most recent works."/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project