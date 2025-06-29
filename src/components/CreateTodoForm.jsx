import React from 'react'
import { useForm } from "../hooks/useForm"
export const CreateTodoForm = (newDataCallBack) => {
    const { onSubmit } = useForm(newDataCallBack);


    return (
        <div>
            <h1>CreateTodo</h1>
            <form onSubmit={onSubmit}>
                <input type='text' name='title'></input>
                <br />
                <textarea name='description'></textarea>
                <br />
                <input type='submit'></input>
            </form>
        </div>
    )
}



