import api from '../API';
console.log('api',api.getAPI())
export const fetchUsers = language => dispatch => {
    return api.getAPI(language)
    .then(data => console.log(data));
}