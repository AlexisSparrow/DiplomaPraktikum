import {newsApi, newsCardList, dataStorage} from '../../pages/index/index'

export default class SearchForm {
    constructor(form, root, search, section, error) {
        this.form = form;
        this.root = root;
        this.search = search;
        this.section = section;
        this.error = error;
        this.form
            .addEventListener('submit', this.callApi.bind(this));       
    }
    
    callApi() {
        event.preventDefault();
        const word = this.form.querySelector('.search__input').value;
        this.form.querySelector('.search__input').value = '';
        this.error.style.display = "none";
        this.root.style.display = "none";
        this.section.style.display = "block";
        this.search.style.display = "flex";
        newsApi.getNews(word)
            .then(res => 
                {
                    dataStorage.vanishOldData();
                    dataStorage.uploadKeyWord(word)
                    dataStorage.uploadData(res.articles);
                    newsCardList.addListCard(JSON.parse(localStorage.newsArray));
                })
            .catch(err => console.log(err))
    }
}