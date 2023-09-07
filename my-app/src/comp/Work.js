import "./pro.css";
import React from 'react';
import Pro from "./pro";
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div className="pro-container">
        <h1 className="project-heading">PROJECTS</h1>
    <div className="proj-container">
    {WorkCardData.map((val,ind)=>{
        return(
            
            <Pro
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        );
    })}
    </div>
    </div>
  );
};

export default Work