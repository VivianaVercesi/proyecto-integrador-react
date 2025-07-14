import React from "react";
import "../styles/phrase.css";

function Phrase({text}) {
    return(
        <div className="phrase">
            <p>{text}</p>
        </div>
    )
}

export default Phrase;