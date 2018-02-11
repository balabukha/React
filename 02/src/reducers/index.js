
import { combineReducers } from 'redux';

import addingTodo from './addTodo';
import visabilityFilter from './visabilityFilter';


export default combineReducers({
    addingTodo,
    visabilityFilter,
});