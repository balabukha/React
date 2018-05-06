import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import decode from 'jwt-decode';

import App from './App';
import rootReducer from './Reducer';
import { userLoggedIn } from './actions';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.booksJWT) {
  const payload = decode(localStorage.booksJWT);
  const user = {
    token: localStorage.booksJWT,
    email: payload.email
  };
  setAuthorizationHeader(localStorage.booksJWT);
  store.dispatch(userLoggedIn(user));
}

/* eslint-disable */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
