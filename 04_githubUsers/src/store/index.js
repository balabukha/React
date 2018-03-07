import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducer from '../reducers/index';

const composeEnh = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  reducer, 
  composeEnh(
    applyMiddleware(thunk),
  ));
  
// console.log('store',store.getState() );

// DEV only
// window.store = store;



