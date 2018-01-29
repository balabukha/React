import { createStore } from 'redux';
import reducer from '../reducer/indexReducer';

console.log('--', reducer);

const store = createStore(reducer);

export default store;
