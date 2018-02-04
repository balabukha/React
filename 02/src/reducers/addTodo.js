import {ADD_TODO} from '../constants';

const initialState = [{id:1, title: 'And',completed: false},{id:2, title: 'Al',completed: false}];

export default (state = initialState, action) => {
    const {type} = action;
    console.log('!!!', action);

    // console.log('action', action.type);


    switch (action.type) {
        case ADD_TODO: return [
            {title: action.payload, completed: false, id: action.id},...state
        ];
    }

    return state;

}