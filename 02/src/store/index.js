import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';

import {createLogger} from 'redux-logger';

const logger = createLogger({
    // ...options
});

// const store = createStore(reducer, applyMiddleware(createLoger));

// console.log('store',store );
//
// window.store = store;

// export default createStore(reducer, applyMiddleware(logger));

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
