// import {combineReducers} from 'redux';


// export default combineReducers({

// })

// import {RECEIVE_USERS, REQUEST_USERS} from '../constants.js'
const RECEIVE_USERS = 'RECEIVE_USERS';
const REQUEST_USERS = 'REQUEST_USERS';

const users = (state = { isFetching: false, items: []}, action) => {
    switch (action.type) {
        case RECEIVE_USERS: {
            return {
                ...state,
                isFetching: false,
                items: action.users
            }
        }

        default: {
            return state;
        }
    }
}

export default users