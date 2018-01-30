import {articles as defaultArticles} from '../localDb';

export default (articlesState = defaultArticles, action) =>  {
    const {type} = action;

    switch (type) {
        case 'DELETE_ARTICLE': return articlesState
    }

    return articlesState
};
