import React from "react";
import "./TodosError.css";

function TodosError() {
    return(
        <div className={ "error" }>
            <p> 🚧 Disculpa, ocurrio un error 🚧 </p>
        </div>
    );
}

export { TodosError }