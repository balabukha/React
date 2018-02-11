import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from '../constants'

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

export function filter(filter){
    return {
        type: SET_FILTER,
        payload: filter,
    }
}