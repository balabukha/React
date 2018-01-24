import React from 'react';
import Article from './Article';


export default function ArticleList(props) {
    const articleElements = props.articles.map((article) => {
        return (
            <li key={article.id}>
                {/*{console.log('article',article)}*/}
                <Article article={article}/>
            </li>
        )
    });

    return (
        <ul>
            {articleElements}
        </ul>
    )

}


