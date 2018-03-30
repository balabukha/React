import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from 'reducers';
import Layout from 'containers/Layout';
import Phones from 'containers/Phones';
import Phone from 'containers/Phone';

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
                <Route path="/categories/:id" component={Phones}/>
            </Route>
            <Route path="/phones/:id" component={Phone}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);