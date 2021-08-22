import React, { useState, useRef } from 'react'
import shortid from 'shortid'
import { TodoInterface , TodoFormInterface } from '../interface'

const TodoForm = (props : TodoFormInterface) =>{
    const inputRef = useRef<HTMLInputElement>(null)
    const [values , setValues ] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setValues(e.target.value)
    }

    const handleInputEnter = (e:React.KeyboardEvent) =>{
        if(e.key==='Enter') {
            const newTodo : TodoInterface = {
                id : shortid.generate() , 
                name : values , 
                isCompleted : false
            }

            props.handleTodoCreate(newTodo)
            if (inputRef && inputRef.current) {
                inputRef.current.value = ''
            }
        }
    }
    return (
        <div className="todo-form">
            <input
            ref={inputRef}
            type="text"
            placeholder='Enter new todo'
            onChange={event => handleInputChange(event)}
            onKeyPress={event => handleInputEnter(event)}
            />
        </div>
    )
}

export default TodoForm;