import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

//CSS
import 'react-select/dist/react-select.css';
import './style.css';


import ArticleList from './components/ArticleList';
import DayPickerWrap from './components/DayPickerWrap';
import Form from './components/Form';

import {articles} from './localDb';


class Hello extends Component {
constructor(props){
    super(props);

    this.state = {
        selectedOption: '',
    }
}

    render(){

    const options = articles.map(article => {
         return {
             label: article.title,
             value: article.id
         }
    });
        console.log('--',this.state.selectedOption);

        return (
            <div>
                <Select
                    name="Select"
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    multi
                />
                {/*{console.log('',articles)}*/}
                <DayPickerWrap />;
                <Form />
                <ArticleList articles={articles}/>

            </div>
        );
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

}



ReactDOM.render(
    <div>
        <Hello />
    </div>,
    document.getElementById('root'));
