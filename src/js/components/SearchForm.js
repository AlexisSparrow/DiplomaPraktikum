import {newsApi} from '../../pages/index/index'

export default class SearchForm {
    constructor(form) {
        this.form = form;
        console.log(this.form)
        this.form
            .querySelector('.search__submit')
            .addEventListener('click', this.callApi)
    }
    
    callApi() {
        event.preventDefault();
        const word = this.form.querySelector('.search__input').value;
        newsApi.getNews(word)
            .then(res => console.log(res))
    }
}