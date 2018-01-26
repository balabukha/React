import React from 'react';
import { Componnent } from 'react';

import Article from './Article';


export default class ArticleList extends Componnent {
    constructor(props){
        super(props);
        this.state = {
            openArticleId: null
        };
    }


render(){
    const articleElements = this.props.articles.map((article) => {
        return (
            <li key={article.id}>
                {/*{console.log('article',article)}*/}
                <Article
                    article={article}
                    isOpen={article.id === this.state.articleId}
                    toggleOpen={this.toggleOpenArticle.bind(this)}
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
    toggleOpenArticle(){
        this.setState({
            openArticleId : article.id
        })
    }
}


