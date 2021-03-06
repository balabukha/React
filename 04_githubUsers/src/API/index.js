import axios from 'axios';

const NUMBER_OF_ITEMS = 10
const NUMBER_OF_PAGES = 1;

const API = 'https://api.github.com/search/repositories';

function getAPI(language){
    const params = {
        q: `language:${language}`,
        per_page: NUMBER_OF_ITEMS,
        sort:'stars',
        page:NUMBER_OF_PAGES,
    }

    return axios.get(API, {params})
    .then(res => res.data)

};

export default {
    getAPI,
}