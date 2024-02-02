import React from "react";
import "./EmptyTodos.css";

function EmptyTodos() {
    return(
        <div className={ "empty" }>
            <p> ✒️ Crea tu primer to do ✒️ </p>
        </div>
    );
}

export { EmptyTodos }