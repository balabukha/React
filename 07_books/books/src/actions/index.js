import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT
} from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

//
// export const login = (credentials) => dispatch => {
//     return api.user.login(credentials) // return promise
//         .then(user => dispatch(userLoggedIn(user)))
// };

// the same in async await style
export const login = (credentials) => async dispatch => {
    const dataUser = await api.user.login(credentials);
    localStorage.booksJWT = dataUser.token;
    dispatch({
        type: USER_LOGGED_IN,
        user: dataUser
    })
};

export const signup = (credentials) => async dispatch => {
    const dataUser = await api.user.signup(credentials);
    localStorage.booksJWT = dataUser.token;
    dispatch({
        type: USER_LOGGED_IN,
        user: dataUser
    }) 
};

export const logOut = () => dispatch => {
    localStorage.removeItem('booksJWT');
    dispatch({
        type: USER_LOGGED_OUT,
        user: {}
    })
};

export const resetPasswordRequest = ({email}) => () => 
    api.user.resetPasswordRequest(email);

// enother example:
// export const fetchUsers = language => dispatch => {
//     dispatch({
//         type: REQUEST_USERS,
//     })
//     return api.getAPI(language)
//         .then(data => dispatch({
//             type: RECEIVE_USERS,
//             users: data.items
//         }));
// };