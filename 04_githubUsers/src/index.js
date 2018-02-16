import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import store from './store/index';
import {Provider} from 'react-redux'

function Index() {

    return (
        <Provider store= {store} >
            <App />
        </Provider>
        )

};


ReactDOM.render(
    <div>
        <Index />
    </div>,
    document.getElementById('root'));
