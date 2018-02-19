import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import reducer from '../reducers/index';


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk),
  ));
  
console.log('store',store.getState() );

// DEV only
window.store = store;

export default store;



