import React from 'react';
import {Component} from 'react';

import CommentsList from './CommentsList'

export default class Article extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }
    };
    render(){
        const {article} = this.props;
        // console.log(article);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )

    }

    handleClick(e){
        e.preventDefault();
        console.log('handleClick', this);
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    getBody(){
        const {article} = this.props;
        // let commentElements = article.comments.map((comment) => {
        //     return <li>{comment.text}</li>
        // });

        console.log('getBody', this.state.isOpen);
        if ( !this.state.isOpen ) return null;
        return (<div>
            <section>{article.text}</section>
            { Array.isArray(article.comments) ? <CommentsList  comments={article.comments}/> : null}
        </div>)
    }
}

