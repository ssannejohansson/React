import React from "react";
import {useState} from "react";


const PopupWindow = ({title, info, techUsed}) => {
 
    
    return (
        <> 
        <div className="popup-window">
           
            <h1 className="title">{title}</h1>
            <h3 className="project-info-title">Tech used:</h3>
            <p className="project-info">{techUsed}</p>
            <h3 className="project-info-title">Additional info:</h3>
            <p className="project-info">{info}</p>
            
        </div></>
    );
};

export default PopupWindow; 





