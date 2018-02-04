import {ADD_TODO} from '../constants'

export function addTodo(title){
    return {
        type: ADD_TODO,
        payload: title,
        id: Date.now(),
    }
}