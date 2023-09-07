import "./pro.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const pro = (props) => {
  return (
    <div className="pro-card">
    <img src={props.imgsrc} alt="images" />
        <h2 className="project-title">{props.title}</h2>
        <div className="details">
        <p>
            {props.text}
        </p>
        <div className="pro-btns">
            <NavLink to={props.view} className="btn">
            View
            </NavLink>
            <NavLink to=" url.com" className="btn">
            Source
            </NavLink>
        </div>
        </div>
    </div>
  );
};

export default pro;