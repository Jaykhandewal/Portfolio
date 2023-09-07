import "./about.css"
import images from "../assets/images.png"
import Blog from "../assets/Blog-3.webp"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                I am a react Front-End Developer.I create responsive secure Websites and interested in creating Projects.
            </p>
            <Link to="/contact">
                <button className="btn">
                Contact
                </button>
            </Link>
        </div>

    <div className="right">
<div className="img-container">
<div className="img-stack top">
<img src={images} className="img" alt="true"/>
</div>
<div className="img-stack bottom">
<img src={Blog} className="img" alt="true"/>
</div>
</div>
    </div>
    </div>
  )
}

export default AboutContent