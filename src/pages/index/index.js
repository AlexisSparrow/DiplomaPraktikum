import './index.css';

import SearchForm from '../../js/components/SearchForm';
import NewsApi from '../../js/modules/NewsApi';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';

const newsApi = new NewsApi({
    baseUrl: 
        'https://newsapi.org/v2/everything?',
    date: 
        new Date(new Date() - 86400000 * 6).toISOString(),
    proxy:
        'https://cors-anywhere.herokuapp.com/'
    }, 
);

const newsCardList = new NewsCardList(document.querySelector('.cards__container'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards__error-container'), document.querySelector('.cards__button'));

const searchForm = new SearchForm(document.querySelector('.search__form'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards'), document.querySelector('.cards__error-container'));

const dataStorage = new DataStorage();

export {newsApi, newsCardList, dataStorage};
