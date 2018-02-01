import {articles as defaultArticles} from '../localDb';
import {DELETE_ARTICLE} from '../constants';
// import { deleteArticle } from '../AC/index';


export default (articlesState = defaultArticles, action) =>  {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE: return articlesState.filter((article) => article.id !== payload.id)
    }

    return articlesState
};
