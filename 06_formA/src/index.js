import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux' // routerReducer
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';
import Authorization from './containers/Authorization';
import NotFound from './components/NotFound';
import Admin from './containers/Admin';
import Info from './containers/Info';
import Client from './containers/Client';

// == CSS == //
import './main.css'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <MuiThemeProvider>
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Authorization}/>
            <Route path="/admin/info" component={Info}/>
            <Route path="/admin/clients" component={Admin}/>
            <Route path="/admin/clients/:id" component={Client}/>
            <Route path='*' component={NotFound} />
        </Router>
    </Provider>

    </MuiThemeProvider>,
    document.getElementById('root')
);