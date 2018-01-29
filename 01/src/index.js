import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';

import ArticleList from './components/ArticleList';
import Filtering from './components/Filtering';
import DayPickerWrap from './components/DayPickerWrap';
import Form from './components/Form';

import {articles} from './localDb';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Filtering articles={articles}/>
                <DayPickerWrap />;
                <Form />
                <ArticleList articles={articles}/>
            </div>
        );
    }
}


ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root'));
