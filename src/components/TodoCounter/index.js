import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

const messages = {
  "nothing": 'No tienes nada que hacer 😺',
  "completed": 'Todos los todos completados 😸'
};

function TodoCounter() {
  const {           
    totalTodos: total, 
    completedTodos: completed
  } = React.useContext(TodoContext);

  let message = messages.nothing;  
  if( completed < total ){
    message = `Has completado ${ completed } de ${ total } To Do's`;
  }else if( completed === total && total > 0){
    message = messages.completed;
  }
    

    return(
      <h1>
        {
          message
        }
      </h1>
    );
}

export { TodoCounter };