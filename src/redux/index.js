import {createStore} from 'redux'
import {reducer} from './reducers/index'


export const store = createStore(reducer)

export * from './action-types'
export * from './action-creators'