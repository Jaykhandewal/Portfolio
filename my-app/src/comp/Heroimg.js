import "./Heroimg.css"
import React from 'react'
import introImg from "../assets/intro.webp"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="introImg" src={introImg} alt="introImg"/>
        </div>
        <div className="content">
            <p>  Hi,I'M A Freelancer.  </p>       
              <h1>React Developer</h1>
              <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        </div>
       
    </div>
  );
};

export default Heroimg;