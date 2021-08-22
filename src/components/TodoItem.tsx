import React from 'react'

import {TodoItemInterface} from '../interface'

const TodoItem = (props : TodoItemInterface) =>{
    return(
        <div className="todo-item">
            <div onClick={()=>  props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span>✔</span>
                ) : (
                    <span className="todo-item-unchecked" />
                )}
            </div>
            <div className="todo-item-input-wrapper">
                    <input 
                        value={props.todo.name}
                        onChange={(e : React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(e , props.todo.id)}
                    />
            </div>
            <div className="item-remove" onClick={()=> props.handleTodoRemove(props.todo.id)}>
                ⨯
            </div>
        </div>
    )
}

export default TodoItem;