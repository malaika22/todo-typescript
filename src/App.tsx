import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import {TodoInterface} from './interface'
import './App.css';
import { toEditorSettings } from 'typescript';

function App() {
  const [todos, setTodos] = useState<TodoInterface []>([])
  const handleTodoCreate = (todo : TodoInterface) =>{
    setTodos([...todos , todo ])
  }

  const handleToUpdate =  (event : React.ChangeEvent<HTMLInputElement>, id : string) =>{
      const newTodosState : TodoInterface[] = [...todos]
      newTodosState.find((todo : TodoInterface) => todo.id === id)!.name = event.target.value
      setTodos([...newTodosState])
    }

  const handleTodoRemove = ( id : string ) =>{
      const newTodosState : TodoInterface[] = 
      todos.filter((todo: TodoInterface) => todo.id!==id)
      console.log('todos', todos)
      setTodos([...newTodosState])
  }

  const handleTodoComplete = ( id : string ) => {
    const newTodosState : TodoInterface[] = [...todos] 
    newTodosState.find((todo : TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo : TodoInterface) => todo.id === id)!.isCompleted
    setTodos([...newTodosState])
  }

  return (
  <div className="App">
      <React.Fragment>
      <h2>My ToDo APP</h2>
      <TodoForm
      todos={todos}
      handleTodoCreate={handleTodoCreate}
      />
      <TodoList
      todos={todos}
      handleTodoUpdate={handleToUpdate}
      handleTodoRemove={handleTodoRemove}
      handleTodoComplete={handleTodoComplete}
      
      />
      
      </React.Fragment>
 </div>
  );
}

export default App;
