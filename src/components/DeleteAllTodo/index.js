import React from "react";
import { TodoContext } from "../TodoContext";
import './DeleteAllTodo.css';

function DeleteAllTodo() {

    const { 
        openDeleteModal, 
        setOpenDeleteModal,
        removeTodos
     } = React.useContext(TodoContext);

     const onSubmit = (ev) => {
        removeTodos();
        setOpenDeleteModal(state => !state);
     }

     const onCancel = () => setOpenDeleteModal(false)

    return (
        <form className=" DeleteAllTodo " onSubmit={ onSubmit }>
            <h2>¿Estas seguro que quieres eliminar todos los To Do?</h2>
            <div className="DeleteAllTodo-buttonContainer">
                <button 
                    type="button"
                    className=" DeleteAllTodo-button DeleteAllTodo-button__cancel "
                    onClick={ onCancel }
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className=" DeleteAllTodo-button DeleteAllTodo-button__delete "
                >
                    Eliminar
                </button>
            </div>
        </form>
    );
}

export { DeleteAllTodo };