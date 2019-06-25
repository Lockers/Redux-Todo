import { ADD_TODO, DELETE_TODO, TOGGLE_DONE } from '../actions/Actions';

const initialState = [
{
    id: 0,
    todo: 'Walk the dog',
    complete: false
    },
    {
        id: 1,
        todo: 'Kill Bill',
        complete: false
    },
]


export function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
        case DELETE_TODO:
            console.log('DELETE_TODO WORKING')
            return state.filter(todo => todo.id === action.payload)
        case TOGGLE_DONE:
            console.log('MARK WORKING')
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }
                return todo;
            
            })
        default:
            return state;
    }
}
   