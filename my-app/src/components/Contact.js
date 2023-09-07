import React from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import HeroImg2 from '../comp/HeroImg2'
import Conta from '../comp/Conta'
const Contact = () => {
  return (
    <div>
       <Navbar/>
      <HeroImg2 heading="CONTACT" text="Let's have a chat."/>
      <Conta/>
      <Footer/>
    </div>
  )
}

export default Contact