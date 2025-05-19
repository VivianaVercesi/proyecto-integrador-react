import React from "react";
import "../styles/detailButton.css";
import { Link } from "react-router-dom";

function DetailButton({product}) {
    return(
        <div>
            <Link 
                to={`/product/${product.id}`} 
                className="boton btn-in" 
                id="btn-in"
            >Ver detalle</Link>
        </div>
        
    )
}

export default DetailButton;