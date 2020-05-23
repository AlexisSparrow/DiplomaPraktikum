import './index.css';

import SearchForm from '../../js/components/SearchForm';
import NewsApi from '../../js/modules/NewsApi';
import NewsCardList from '../../js/components/NewsCardList';

const newsApi = new NewsApi({
    baseUrl: 
        'https://newsapi.org/v2/everything?',
    expandedUrl:
        'sortBy=popularity&' +
        'apiKey=669b729be5ea4536b3fb7ba2b460e0d9',
    date: new Date(new Date() - 604800000).toISOString()
    }, 

);

const newsCardList = new NewsCardList(document.querySelector('.cards__container'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards__error-container'),);

const searchForm = new SearchForm(document.querySelector('.search__form'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards'));

export {newsApi, newsCardList};
