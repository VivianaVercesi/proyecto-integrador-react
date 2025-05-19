import React from "react";
import "../styles/title.css";

function Title({trademark}) {
    return (
        <div className="trademark" id="trademark">
            <p>{trademark}</p>
        </div>
    ); 
}

export default Title;