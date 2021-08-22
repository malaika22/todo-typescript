import React from 'react'
import TodoItem from './TodoItem'
import {TodoListInterface} from '../interface'

const TodoList = (props : TodoListInterface) => {
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(todo => 
                    (
                        <li key={todo.id}>
                            <TodoItem todo={todo}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoUpdate={props.handleTodoUpdate}
                            />
                        </li>
                    )
                    )}
            </ul>
        </div>
    )
}

export default TodoList