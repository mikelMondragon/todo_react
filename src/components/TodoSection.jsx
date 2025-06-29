import React, { useReducer } from 'react'
import { CreateTodoForm } from './CreateTodoForm'
import { CardContainer } from './CardContainer'
import { todoRreducer } from '../reducers/todoReducer'
import { useTodoList } from "../hooks/useTodoList"

export const TodoSection = () => {
    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodoList();


    const handlerSubmit = (parsedData) => {
        const newTodo = {
            id: Date.now(),
            title: parsedData.title,
            description: parsedData.description,
            done: false,
            date: new Date()
        }
        handleNewTodo(newTodo);
    }
    const onDeleteTodo = (id) => {
        const action = {
            type: 'delete todo',
            payload: id
        }

        dispatch(action)
    }
    return (
        <>
            <CreateTodoForm onSubmit={handlerSubmit} />
            <CardContainer todoList={todos}
                toggleTodo={handleToggleTodo}
                deleteTodo={handleDeleteTodo} />
        </>
    )
}
