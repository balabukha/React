import React from 'react';
import {Component} from 'react';

import ArticleList from './ArticleList';
import Filtering from './Filtering';
import DayPickerWrap from './DayPickerWrap';
import Form from './Form';

// import {articles} from '../localDb';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Filtering articles={[]}/>
                <DayPickerWrap />;
                <Form />
                <ArticleList/>
            </div>
        );
    }
}
