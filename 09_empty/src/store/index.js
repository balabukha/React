import { createStore } from 'redux';

import reducer from '../reducers/index';


const store = createStore(reducer);
console.log('store',store.getState() ); // counter: 0

// DEV only
window.store = store;

export default store;
