import api from '../API';

import {RECEIVE_USERS, REQUEST_USERS} from '../constants.js'
// const RECEIVE_USERS = 'RECEIVE_USERS';
// const REQUEST_USERS = 'REQUEST_USERS';


// console.log('api',api.getAPI())
export const fetchUsers = language => dispatch => {
    return api.getAPI(language)
    // .then(data => console.log('data', data))
    .then(data => dispatch({
        type: RECEIVE_USERS,
        users: data.items
    }));
}