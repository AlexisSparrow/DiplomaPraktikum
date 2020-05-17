import './index.css';

import SearchForm from '../../js/components/SearchForm';
import NewsApi from '../../js/modules/NewsApi';

const newsApi = new NewsApi({
    baseUrl: 
        'http://newsapi.org/v2/everything?',
    expandedUrl:
        'from=2020-05-17&' +
        'sortBy=popularity&' +
        'apiKey=0d53a45fdb354aacb0b658c5523deca1',
})

const searchForm = new SearchForm(document.querySelector('.search__form'))

export {newsApi};
