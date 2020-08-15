import './stats.css';


import Statistics from '../../js/components/Statistics';

const statistics = new Statistics(localStorage.keyWord, JSON.parse(localStorage.newsArray), document.querySelector('.analytics__item-container'));

statistics.statsUploader();
