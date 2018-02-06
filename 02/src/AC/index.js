import {ADD_TODO, TOGGLE_TODO} from '../constants'

export function addTodo(title){
    return {
        type: ADD_TODO,
        payload: title,
        id: Date.now(),
    }
}

export function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        payload: id,
    }
}