import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvier } from '../components/TodoContext';



function App() { 
  
  return (
    <TodoProvier>
      <AppUI />
    </TodoProvier>
  );
}

export default App;
