import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import store from './store/index';
import {Provider} from 'react-redux'

function Root() {
    console.log('--', store);

    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )

};


ReactDOM.render(
    <div>
        <Root />
    </div>,
    document.getElementById('root'));
