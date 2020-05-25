import './stats.css';


import Statistics from '../../js/components/Statistics';

const statistics = new Statistics(localStorage.keyWord, JSON.parse(localStorage.newsArray), localStorage.counter);

statistics.statsUploader();
