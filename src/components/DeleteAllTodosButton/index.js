import React from "react";
import './DeleteAllTodosButton.css';
import { TodoContext } from "../TodoContext";

function DeleteAllTodosButton() {

    const { openDeleteModal, setOpenDeleteModal } = React.useContext(TodoContext);

    return (
        <button 
            className="DeleteAllTodosButton"
            onClick={ () => setOpenDeleteModal(true) }
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 13.5H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" 
            />
            </svg>
            <label> Eliminar memoria </label>
        </button>

    );
}

export { DeleteAllTodosButton };