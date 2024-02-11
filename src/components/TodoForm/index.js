import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [ showAlert, setShowAlert ] = React.useState(true);

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !== '') {
            addTodo( newTodoValue );
            setOpenModal(false);           
        }
    }

    const onCancel = () => {
        setOpenModal(false);        
    }

    const onChange = (ev) => {
        setNewTodoValue(ev.target.value);    
    }

    const onValidate = (ev) => {
        if (newTodoValue === '') {
            setShowAlert(false)
        }
    }

    return (
        <form onSubmit={ onSubmit }>
            <h3>
                Que nueva tarea tienes?
            </h3>
            <textarea 
                    placeholder='Escribe tu tarea...'
                    value={ newTodoValue }
                    onChange={ onChange}
            />
            <div className={ `TodoForm-alert ${ showAlert && 'TodoForm--alert-hiden' }` }>
                <p>
                    La tarea no puede estar vacía
                </p>
            </div>
            <div className={ `TodoForm-buttonContainer` }>
                <button 
                    type='button'
                    className='TodoForm-button TodoForm-button__cancel'
                    onClick={ onCancel }
                    required
                >
                    Cancelar
                </button>
                <button 
                    type='submit'
                    className='TodoForm-button TodoForm-button__add'
                    onClick={ onValidate }
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };