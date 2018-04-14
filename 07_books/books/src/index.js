import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import App from './App';
import rootReducer from './Reducer';
import { userLoggedIn } from './actions'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

if(localStorage.booksJWT) {
    const user = { token: localStorage.booksJWT };
    store.dispatch(userLoggedIn(user))
}

/* eslint-disable */
ReactDOM.render(
    <BrowserRouter >
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));