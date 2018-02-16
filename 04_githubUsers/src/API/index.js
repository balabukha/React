import axios from 'axios';

const NUMBER_OF_ITEMS = 10
const NUMBER_OF_PAGES = 1;

const API = 'https://api.github.com/';

export default function getAPI(language){
    const params = {
        q: `language:${language}`,
        per_page: NUMBER_OF_ITEMS,
        sort:'stars',
        page:NUMBER_OF_PAGES,
    }

    return axios.get(API, params)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};