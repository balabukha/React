import {combineReducers} from 'redux';

import {RECEIVE_USERS, REQUEST_USERS, LANGUAGE_SELECT} from '../constants.js'

let initialState = {
    isFetching: false,
    items: []
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS: {

            return {
                ...state,
                isFetching: true,
            }
        }
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
};

const languageSelect = (state = 'javascript', action) => {
    switch (action.type) {
        case LANGUAGE_SELECT: {
            return action.language
        }

        default: {
            return state;
        }
    }
};
export default combineReducers({
    users,
    languageSelect
})
