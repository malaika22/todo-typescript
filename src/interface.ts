// For Todo interface 

import React from "react";

export interface TodoInterface {
    id : string ,
    name : string ,
    isCompleted : boolean
}

// For TodoFormInterface
export interface TodoFormInterface {
    todos : TodoInterface[] , 
    handleTodoCreate : (todo : TodoInterface) => void
}

export interface TodoListInterface {
    todos : TodoInterface[] ,
    handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement> , id : string) => void , 
    handleTodoComplete : (id : string) => void , 
    handleTodoRemove : (id : string ) => void
}

// For TodoItemInterface

export interface TodoItemInterface {
    todo : TodoInterface ,
    handleTodoUpdate : (event : React.ChangeEvent<HTMLInputElement> , id : string) => void , 
    handleTodoComplete : (id : string) => void , 
    handleTodoRemove : (id : string ) => void
}