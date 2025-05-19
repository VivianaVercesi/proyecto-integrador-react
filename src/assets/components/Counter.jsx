import React, { useState } from "react";

function Counter() {
    const [counter,setCounter] = useState(0);
    function sumCounter() {
        setCounter(counter + 1);
    }
    return(
        <div>
            <p>Valor del contador: {counter}</p>
            <button onClick={sumCounter}>Incrementar</button>
        </div>
    )
}

export default Counter;