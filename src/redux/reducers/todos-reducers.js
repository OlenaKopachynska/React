
import {SET_TODOS, TOGGLE_TODO_STATUS, REMOVE_TODO,} from '../action-types'

const initialState = {
    todos: [],
}
const reducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_TODOS: {
            return {...state, todos: action.payload }
        }
        case TOGGLE_TODO_STATUS: {
            return {...state, todos: action.payload }
        }
        case REMOVE_TODO: {
            return {...state, todos: action.payload }
        }

        default: {
            return state
        }
    }

}

export default reducer;