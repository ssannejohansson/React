import {useState} from "react";


function ShowHideContent () {
    const [isVisible, setIsVisible] = useState(false);
    return (<>
        <button className="preview-button" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? "Hide content" : "Show content"}</button>
    </>
    );
}

export default ShowHideContent; 