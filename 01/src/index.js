import React from 'react';
import ReactDOM from 'react-dom';

import ArticleList from './components/ArticleList';
import {articles} from './localDb';


function Hello() {
    return (
        <div>
            {/*{console.log('',articles)}*/}
            <ArticleList articles={articles}/>

        </div>
    );
}



ReactDOM.render(
    <div>
        <Hello />
    </div>,
    document.getElementById('root'));
