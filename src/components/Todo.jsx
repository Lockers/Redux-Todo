import React from 'react';

export const Todo = (props) => {
    console.log(props.todo.id)
    return (
        
        <div>
            <div onClick={() => props.markComplete(props.todo.id)}>
                {props.todo.todo}
            </div>
                <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
        </div>
    )
}

