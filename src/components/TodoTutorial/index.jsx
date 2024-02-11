import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoTutorial.css";

function TodoTutorial() {
    const { showTutorial, setShowTutorial } = React.useContext(TodoContext);
    const handleClick = () => {
        setShowTutorial(false);
        localStorage.setItem('TUTORIAL', 'false');
    }
    
    return(
        <div className="TodoTutorial">
            <h1 className="TodoTutorial--title">Bienvenido 👋</h1>
            <p className="TodoTutorial--parragraph">
                Este es un tutorial breve para que aprendas a utilizar la aplicación.
            </p>
            <h1 className="TodoTutorial--title">Crear un To Do ✍️ </h1>
            <p className="TodoTutorial--parragraph">
                Para crear un To Do, solo debes hacer clic en el botón de "Agregar Tarea" y llenar el campo de texto con la tarea que deseas agregar.
            </p>
            <h1 className="TodoTutorial--title">Eliminar un To Do ⛔</h1>
            <p className="TodoTutorial--parragraph">
                Si deseas eliminar todas las tareas, puedes hacer clic en el botón "Eliminar To Do's".
            </p>
            <button 
                className="TodoTutorial--button"
                onClick={ () =>  handleClick() }
            >
                Aceptar
            </button>
        </div>
    );
}

export { TodoTutorial };