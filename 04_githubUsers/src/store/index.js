import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducer from '../reducers/index';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

export default createStore(
  reducer, 
  compose(
    applyMiddleware(thunk),
  ));
  
// console.log('store',store.getState() );

// DEV only
// window.store = store;



