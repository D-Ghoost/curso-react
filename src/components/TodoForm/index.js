import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    let alertHiden = true;

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue !== '') {
            addTodo( newTodoValue );
            setOpenModal(false);           
        }else{
            alertHiden = false;
            console.log(alertHiden);
        }
    }

    const onCancel = () => {
        setOpenModal(false);        
    }

    const onChange = (ev) => {
        setNewTodoValue(ev.target.value);    
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
            <div className={ `TodoForm--alert ${ alertHiden && 'TodoForm--alert-hiden' }` }>
                <p>
                    Importante: No olvides escribir tu tarea.
                </p>
            </div>
            <div className='TodoForm-buttonContainer'>
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
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };