export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const AMEND_TODO = 'AMEND_TODO';

export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

// export function deleteTodo() {
//     return { type: DELETE_TODO }
// }

// export function amendTodo(amendedTodo) {
//     return {
//         type: AMEND_TODO,
//         payload: amendedTodo
//     }
// }
