import {newsApi, newsCardList} from '../../pages/index/index'

export default class SearchForm {
    constructor(form, root, search, section) {
        this.form = form;
        this.root = root;
        this.search = search;
        this.section = section;
        console.log(this.form)
        this.form
            .querySelector('.search__submit')
            .addEventListener('click', this.callApi.bind(this))
    }
    
    callApi() {
        event.preventDefault();
        const word = this.form.querySelector('.search__input').value;
        this.root.style.display = "none";
        this.section.style.display = "block";
        this.search.style.display = "flex";
        newsApi.getNews(word)
            .then(res => 
                {
                    console.log(res.articles);
                    newsCardList.addListCard(res.articles)
                })
    }
}