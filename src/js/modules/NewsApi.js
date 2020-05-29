export default class NewsApi {
    constructor(options) {
        this.options = options;
    }

    getNews(keyWord) {
        console.log(keyWord);
        return fetch(`${this.options.baseUrl}q=${keyWord}&from=${this.options.date}&sortBy=popularity&apiKey=669b729be5ea4536b3fb7ba2b460e0d9&pageSize=100&language=ru`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.status)
            }

            return res.json()
        })
    }
}