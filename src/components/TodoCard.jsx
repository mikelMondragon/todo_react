import React from 'react'

export const TodoCard = ({ todo = {}, toggleTodo, deleteTodo }) => {
    return (
        <section>
            <b>{todo.title}</b> - {todo.description}
            <button onClick={() => toggleTodo(todo.id)}>
                {
                    todo.done ? "Terminado" : "Pendiente"
                }
            </button>
            <button onClick={() => deleteTodo(todo.id)}>
                Eliminar
            </button>

        </section>
    )
}
