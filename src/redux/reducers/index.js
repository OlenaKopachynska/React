import {combineReducers} from "redux";

import counterReducer from './counter-reducers'
import todosReducer from './todos-reducers'

export const reducer = combineReducers({
    todos: todosReducer,
    counter: counterReducer
})