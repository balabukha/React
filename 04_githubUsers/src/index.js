import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
// import Picker from './components/Picker';

import store from './store/index';
import {Provider} from 'react-redux'

import './main.css';

function Index() {

    // return (
    //     <Provider store= {store} >
    //         <App />
    //     </Provider>
    //     )
    return(
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
