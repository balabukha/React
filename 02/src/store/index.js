import { createStore } from 'redux';

import reducer from '../reducers';


const store = createStore(reducer);
console.log('store',store );


export default store;
