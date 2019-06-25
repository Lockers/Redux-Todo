import { uuid } from "uuid";

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_DONE = 'MARK_DONE';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: {
            todo,
            id: uuid(),
            completed: false
        }
    }
}
export function deleteTodo(id) {
    console.log(id)
    return {
        type: DELETE_TODO,
        payload: id
     }
}
export function markComplete(id) {
    console.log(id)
    return {
        type: TOGGLE_DONE,
        payload: id
    }
}
