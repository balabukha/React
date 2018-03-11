import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import Layout from 'Layout';
import Phones from 'Phones';

// == CSS == //

import './main.css'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Phones}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);