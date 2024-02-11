import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodosLoader }  from '../components/TodosLoader';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { DeleteAllTodo } from '../components/DeleteAllTodo';
import { DeleteAllTodosButton } from '../components/DeleteAllTodosButton';
import { TodoTutorial } from '../components/TodoTutorial';



// props anteriormente en AppUI = { loading, error, searchedTodo, totalTodos, completedTodos, searchValue, setSearchValue, completeTodos, deleteTodo }
function AppUI() {

    const { 
      loading, 
      error, 
      searchedTodo, 
      completeTodos, 
      deleteTodo,
      openModal,
      openDeleteModal, 
      showTutorial
    } = React.useContext(TodoContext);

    return (
        <>
        {
            showTutorial && (
              <Modal>
                <TodoTutorial/>
              </Modal>
            )
          }
          <TodoCounter/>
          <TodoSearch/>

                <TodoList> 
                  {
                    loading && <TodosLoader/>
                  }
                  {
                    error && <TodosError/>
                  }
                  {
                    !loading && searchedTodo.length === 0 && <EmptyTodos/>
                  }
                  { searchedTodo.map( todo => (
                    <TodoItem 
                      key={ todo.text }
                      text={ todo.text }
                      completed={ todo.completed }
                      onComplete={ () => completeTodos(todo.text) }
                      onDelete={ () => deleteTodo(todo.text) }
                    />
                  )) }
                </TodoList>
                
          <CreateTodoButton/>
          <DeleteAllTodosButton />

          { openModal && (
            <Modal>
              <TodoForm />
            </Modal>
            )
          }
          {
            openDeleteModal && (
              <Modal>
                <DeleteAllTodo />
              </Modal>
            )
          }
          
        </>
    );
}

export { AppUI };