import {useState} from "react";

function Preview () {

    const [buttonText, setButtonText] = useState('Show Projects'); 

    const onClick = () => {
        setButtonText (buttonText === "Show Projects" ? "Hide Projects" : "Show Projects");
    };

return( <div>
        <button className="preview-button" onClick={onClick}>{buttonText}</button>
    </div>
    )
}

export default Preview; 