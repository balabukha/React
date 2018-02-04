
import { combineReducers } from 'redux';

import addTodo from './addTodo';
console.log('--', addTodo());


export default combineReducers({
    addTodo,
});