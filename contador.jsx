import React from "react";
import { useState } from "react";

function Contador(){

    const [conteo, setConteo] = useState(1)

    return(<div>

        <p>Contador basico</p>
        <p>{conteo}</p>
        <button onClick={()=> setConteo(conteo + 1)}>+</button>
        <button onClick={()=> setConteo(conteo - 1)}>-</button>
    </div>

    )
}

export default Contador;
