import {useState} from "react";
import PopupWindow from "./popup.jsx";



function Project(props) {

    const [buttonText, setButtonText] = useState("Show info")

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
    setIsOpen(!isOpen) + setButtonText(buttonText === "Show info" ? "Hide info" : "Show info");


};


return (
    <div>
    <div className="project-card">
    <h1 className="project-title">{props.title}</h1>
    <img src={props.image} alt="project-img" className="project-img"/>
    <button className="pop-button" onClick={handleClick}>{buttonText}</button>
        {isOpen && (
            <PopupWindow 
        repo={props.repo}
        techUsed={props.techUsed}
        info={props.info}
        />
        )}
    
    </div>
    </div>

)
}

export default Project;