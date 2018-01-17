import React from 'react';
import ReactDOM from 'react-dom';

import ArticleList from './ArticleList';
import {articles} from './localDb';


function Hello() {
    return (
        <div>
            <ArticleList articles={articles}/>
            {console.log('',articles)}
        </div>
    );
}



ReactDOM.render(
    <div>
        <Hello />
    </div>,
    document.getElementById('root'));
// registerServiceWorker();
