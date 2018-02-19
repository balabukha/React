import api from '../API';

export const fetchUsers = language => dispatch => {
    return api.getAPI(language)
    .then(data => console.log(data));
}