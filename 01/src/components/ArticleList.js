import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import Article from './Article';


class ArticleList extends Component {

    static propTypes = {
    articles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        )
    };
    constructor(props){
        super(props);
        this.state = {
            openArticleId: null
        };
    }


render(){
    let {articles} = this.props;

    const articleElements = articles.map((article) => {
        return (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === this.state.openArticleId}
                    toggleOpen={this.toggleOpenArticle.bind(this, article.id)}
                />
            </li>
        )
    });
    return (
        <ul>
            {articleElements}
        </ul>
    )

}
    toggleOpenArticle(someId){
        console.log(someId);
        if(someId === this.state.openArticleId) {
            return this.setState({
                openArticleId: ''
            });

        }
        this.setState({
            openArticleId: someId
        })
    }
}

export default connect(state => ({
    articles: state.articles
}))(ArticleList);












