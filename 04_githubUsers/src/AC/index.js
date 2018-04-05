import api from '../API';

import {RECEIVE_USERS, REQUEST_USERS, LANGUAGE_SELECT} from '../constants.js'
// const RECEIVE_USERS = 'RECEIVE_USERS';
// const REQUEST_USERS = 'REQUEST_USERS';


// console.log('api',api.getAPI())
export const fetchUsers = language => dispatch => {
    dispatch({
        type: REQUEST_USERS,
    })
    return api.getAPI(language)
    .then(data => dispatch({
        type: RECEIVE_USERS,
        users: data.items
    }));
};

export const selectLanguage = language => (
    {
        type: LANGUAGE_SELECT,
        language
    });
