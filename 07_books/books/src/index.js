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


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));

/* eslint-disable */
ReactDOM.render(
    <BrowserRouter >
        <Provider store = {store}>
            <App />
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));