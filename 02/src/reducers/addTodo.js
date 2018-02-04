import {ADD_TODO} from '../constants';

const initialState = [{id:1, title: 'And',completed: false},{id:2, title: 'Al',completed: false}];

export default (state = initialState, action) => {
    // const {type} = action;
    console.log('!!!');

    console.log('action', action.type);


    // switch (action.type) {
    //     case ADD_TODO: return [
    //         {title: action.title, completed: false},...state
    //     ];
    // }

    return state;

}