import React from 'react';
import { TodoIcon } from '.';

function CompleteIcon({ completed, onComplete }){
    return (
        <TodoIcon 
            type="check"
            color = { completed ? "TodoItem-check--active" : ""} 
            onClick={ onComplete }
        />
    );
}

export { CompleteIcon };