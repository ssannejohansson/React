import React from "react";


 

const PopupWindow = (props) => {

    return (
        <div className="popup-window">
        <h3 className="project-info-title">GitHub Repo:</h3>
        <p className="project-info">{props.repo}</p>
            <h3 className="project-info-title">Tech used:</h3>
            <p className="project-info">{props.techUsed}</p>
            <h3 className="project-info-title">Additional info:</h3>
            <p className="project-info">{props.info}</p>
        </div>
    );
};

export default PopupWindow; 





