import React from "react";
import "../styles/button.css";
import { Link } from "react-router-dom";

function Button({Link2, text}) {
    return(
        <div>
            <Link to={Link2} className="boton btn-in" id="btn-in">{text}</Link>
        </div>
        
    )
}

export default Button;