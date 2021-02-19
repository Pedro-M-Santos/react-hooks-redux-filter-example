import { ADD_TODO, DEL_TODO, UPDATE_TODO } from './actions'
// import { todos } from './states'
export let reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: (state.length + 1), name: action.payload.name }]
        case DEL_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case UPDATE_TODO:
            state[action.payload.id-1]['name'] = action.payload.name 
            return [...state]
        default:
            return state
    }
}