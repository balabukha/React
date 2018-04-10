import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const login = (credentials) => dispatch => {
    console.log('api.user.login(credentials)', api.user.login(credentials));
    api.user.login(credentials) // return promise
        // .catch(err => console.log('err', err))
        // .then(user => console.log('user in action', user, this))
        .then(user => dispatch(userLoggedIn(user)))
};

// export const login = (credentials) => async dispatch => {
//     const dataUser = await api.user.login(credentials);
//     dispatch({
//         type: USER_LOGGED_IN,
//         user: dataUser
//     })
// };