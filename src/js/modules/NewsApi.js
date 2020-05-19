export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNews(keyWord) {
        console.log(keyWord);
        return fetch(`${this.options.baseUrl}q=${keyWord}&${this.options.expandedUrl}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status)
            }

            return res.json()
        })
    }
}