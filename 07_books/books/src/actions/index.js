import { normalize } from 'normalizr';
import { bookSchema } from '../schemas';
import { USER_LOGGED_IN, USER_LOGGED_OUT, BOOKS_FETCHED, BOOKS_CREATED } from '../types';
import api from '../api';
import setAuthorizationHeader from '../utils/setAuthorizationHeader';

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
export const login = credentials => async dispatch => {
  const dataUser = await api.user.login(credentials);
  localStorage.booksJWT = dataUser.token;
  setAuthorizationHeader(dataUser.token);
  dispatch({
    type: USER_LOGGED_IN,
    user: dataUser
  });
};

export const signup = credentials => async dispatch => {
  const dataUser = await api.user.signup(credentials);
  localStorage.booksJWT = dataUser.token;
  dispatch({
    type: USER_LOGGED_IN,
    user: dataUser
  });
};

export const logOut = () => dispatch => {
  localStorage.removeItem('booksJWT');
  setAuthorizationHeader();
  dispatch({
    type: USER_LOGGED_OUT,
    user: {}
  });
};

export const resetPasswordRequest = ({ email }) => () => api.user.resetPasswordRequest(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);

const booksFetched = data => ({
  type: BOOKS_FETCHED,
  data
});

const bookCreated = data => ({
  type: BOOKS_CREATED,
  data
});

export const fetchBooks = () => dispatch => {
  api.books.fetchAll().then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));
};

export const createBook = data => dispatch =>
  api.books.create(data).then(book => dispatch(bookCreated(normalize(book, bookSchema))));
