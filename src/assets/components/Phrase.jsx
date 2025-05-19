import React from "react";
import "../styles/phrase.css";

function Phrase({text}) {
    return(
        <div className="phrase">
            <h1>{text}</h1>
        </div>
    )
}

export default Phrase;