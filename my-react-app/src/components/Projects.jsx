import {useState} from "react";
import PopupWindow from "./popup.jsx";



function Project(props) {

const [toggle, setToggle] = useState(false);
const [buttonText, setButtonText] = useState("Open Popup")
   const handleClick = () => {
       setToggle(!toggle) + setButtonText(buttonText === "Open Popup" ? "Close Popup" : "Open Popup");
   }

    const [popupInfo, setPopupInfo] = useState({
        title: "title",
        techUsed: "techUsed",
        info: "info",
    });

return (
    <div>
    <div className="project-card">
    <button onClick={handleClick}>{buttonText}</button>
    <h1 className="project-title">{props.title}</h1>
    <img src={props.image} alt="project-img" className="project-img"/>
    <h3 className="project-info-title">GitHub Repo:</h3>
    <p className="project-info">{props.repo}</p>
    <h3 className="project-info-title">Tech used:</h3>
    <p className="project-info">{props.techUsed}</p>
    <h3 className="project-info-title">Additional info:</h3>
    <p className="project-info">{props.info}</p>
     
    {toggle ? <PopupWindow 
        title={popupInfo.title}
        techUsed={popupInfo.techUsed}
        info={popupInfo.info}
        onClick={handleClick}
        />:
       <></> }
    </div>
    </div>

)
}

export default Project;