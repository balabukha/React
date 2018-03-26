import R from 'ramda';
import {
    ADMIN_LOGIN,
    ADMIN_PASSWORD
} from './constants';
// поиск по id
export const getClientById = (state, id) => R.find(R.propEq('id', id))(state);

export const addNewClient = (state, client) => R.append(client, state);

export const isAdmin = (jsonItem, component) => {
    let returnObj = JSON.parse(localStorage.getItem(jsonItem));
    let login;
    let password;
    if (!returnObj) {
        login = 'no';
        password = 'no'
    }
    if (returnObj) {
        login = returnObj.login;
        password = returnObj.password
    }
    return login !== ADMIN_LOGIN || password !== ADMIN_PASSWORD ?  component : null;
};