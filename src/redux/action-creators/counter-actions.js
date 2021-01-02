import {INC, DEC, RESET} from '../action-types'

export const incCounter = () => ({type: "INC"});
export const decCounter = () => ({type: "DEC"});
export const resetCounter = () => ({type: "RESET"});