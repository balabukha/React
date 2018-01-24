import React from 'react';
import {Component} from 'react';

import CommentsList from './CommentsList'
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }
    };
    render(){
        const {article, toggleOpen, isOpen} = this.props;
        // console.log(article);
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )

    }

    // handleClick(e){
    //     e.preventDefault();
    //     console.log('handleClick', this);
    //     this.setState({
    //         isOpen: !this.state.isOpen,
    //     })
    // }

    getBody(){
        const {article, toggleOpen, isOpen} = this.props;
        // let commentElements = article.comments.map((comment) => {
        //     return <li>{comment.text}</li>
        // });

        // console.log('getBody', this.state.isOpen);
        if ( !isOpen ) return null;
        return (<div>
            <section>{article.text}</section>
            { Array.isArray(article.comments) ? <CommentsList ref={this.articleRef} comments={article.comments}/> : null}
        </div>)
    }

    articleRef = (ref) => {
        this.container = ref;

        console.log('ref',ref);
        console.log('this.container',this.container);

    }
}

export default toggleOpen(Article);

