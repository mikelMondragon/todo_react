import React from 'react'
import { TodoCard } from './TodoCard'

export const CardContainer = ({ todoList = [], toggleTodo, deleteTodo }) => {
    return (
        <div>
            <h1>Todo list</h1>
            {
                todoList.map(todo => (
                    <TodoCard key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                ))
            }

        </div>
    )
}
