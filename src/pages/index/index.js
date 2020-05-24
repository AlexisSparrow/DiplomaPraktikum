import './index.css';

import SearchForm from '../../js/components/SearchForm';
import NewsApi from '../../js/modules/NewsApi';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';

const cardsButton = document.querySelector('.cards__button')

const newsApi = new NewsApi({
    baseUrl: 
        'https://newsapi.org/v2/everything?',
    date: 
        new Date(new Date() - 604800000).toISOString(),
    proxy:
        'https://cors-anywhere.herokuapp.com/'
    }, 

);

const newsCardList = new NewsCardList(document.querySelector('.cards__container'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards__error-container'));

const searchForm = new SearchForm(document.querySelector('.search__form'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards'), document.querySelector('.cards__error-container'));

const dataStorage = new DataStorage();

export {newsApi, newsCardList, dataStorage};

cardsButton.addEventListener('click', () => newsCardList.addPreloadedListCard(JSON.parse(localStorage.newsArray)));