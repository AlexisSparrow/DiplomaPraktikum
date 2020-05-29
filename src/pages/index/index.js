import './index.css';

import SearchForm from '../../js/components/SearchForm';
import NewsApi from '../../js/modules/NewsApi';
import NewsCardList from '../../js/components/NewsCardList';
import DataStorage from '../../js/modules/DataStorage';

const newsApi = new NewsApi({
    baseUrl: 
        'https://praktikum.tk/news/v2/everything?',
    date: 
        new Date(new Date() - 86400000 * 6).toISOString(),
    }, 
);

const newsCardList = new NewsCardList(document.querySelector('.cards__container'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards__error-container'), document.querySelector('.cards__button'), document.querySelector('.cards'));

const searchForm = new SearchForm(document.querySelector('.search__form'), document.querySelector('.cards__root'), document.querySelector('.cards__search-container'), document.querySelector('.cards'), document.querySelector('.cards__error-container'));

const dataStorage = new DataStorage();

if (localStorage.length >= 3) {
    newsCardList.addListCardFromLocalStorage(JSON.parse(localStorage.newsArray), localStorage.counter)
    searchForm.preloadKeyWord(localStorage.keyWord)
}

export {newsApi, newsCardList, dataStorage};

        