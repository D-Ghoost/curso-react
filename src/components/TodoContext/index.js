import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

// Custom Provider
// Un provider es un componente que provee informacion a todos sus hijos
// La ventaja custom es que el nombre puede ser mas comodo de utilizar
// Podemos encapsular la logica y compartir la informacion a todos los hijos
function TodoProvier({ children }) {

    const { item: todos, saveItem: saveTodos, error, loading } = useLocalStorage('TODOS_v1',[]);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const [ openDeleteModal, setOpenDeleteModal ] = React.useState(false);

    // Contador de todos completados
    const completedTodos = todos.filter( todo => !!todo.completed).length;
    const totalTodos = todos.length;
    // Filtrar los todos
    const searchedTodo = todos.filter(todo => todo.text.toLowerCase().replace(/[\u0300-\u036f]/g, "").includes(searchValue.toLowerCase()));
    

    // Añadir Todo
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    const completeTodos = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    const removeTodos = () => {
        localStorage.removeItem('TODOS_v1');
        saveTodos([]);
    }

    // Cualquier componente que este dentro de este provider va a tener acceso a la informacion
    return(
        <TodoContext.Provider value={{ 
            loading,
            error, 
            searchedTodo, 
            totalTodos, 
            completedTodos, 
            searchValue, 
            setSearchValue, 
            completeTodos, 
            deleteTodo,
            openModal,
            setOpenModal,
            openDeleteModal, 
            setOpenDeleteModal,
            addTodo,
            removeTodos
        }}>
            { children }
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvier };



// const defaultTodos = [
//   {
//     text: 'Cortar Cebolla',
//     completed: true
//   },
//   {
//     text: 'Tomar Curso React',
//     completed: false
//   },
//   {
//     text: 'Dormir',
//     completed: false
//   },
//   {
//     text: 'Comer',
//     completed: true
//   },
//   {
//     text: 'Ir al parque con batman',
//     completed: false
//   },
//   {
//     text: 'Comprar una casá con piscina',
//     completed: true
//   }
// ]

// localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_v1');