import React from 'react';
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton(){

    const { openModal, setOpenModal } = React.useContext(TodoContext);

    return(
        <button className="CreateTodoButton" onClick={ () => {
            setOpenModal(true);
        } }
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                stroke-width="2" 
                stroke="currentColor" 
                fill="none" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
            </svg>
            <label> Agregar Tarea</label>
        </button>
    );
}

export { CreateTodoButton }