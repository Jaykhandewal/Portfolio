import "./foot.css";
import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <div>
                    <p>  In front of malipura moad,sewar road </p>
                    <p>Sewar,Bharatpur[Raj.] </p>
                </div>
                </div>
                <div className="phone">
                   <h4>
                <FaPhone size={20} style={{color:"blue" ,marginRight:"2rem"}}/>
              7221875568 </h4> 
                </div>          
                <div className="maili">
            <h4>
            <FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}} />   jaykhandelwal07072001@gmail.com   </h4>   
            </div>
         </div>

            
            <div className="right">
                <h4>
                    About Me.
                </h4>
                <p>
                    This is me Jay khandelwal.A Web and cloud Developer.I enjoy developiong new projects and challenges.
                </p>
                <div className="social">
                <FaLinkedin size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <FaInstagram size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff" ,marginRight:"2rem"}}/>
                

                </div>
            </div>

        </div>
    </div>
  );
};

export default Footer;