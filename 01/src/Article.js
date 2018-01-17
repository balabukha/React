import React from 'react';
import {Component} from 'react';

export default class Article extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: true,
        }
    };

    render(){
        const {article} = this.props;
        console.log(article);
        return (
            <div>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
            </div>
        )

    }
}

