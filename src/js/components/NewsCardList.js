import NewsCard from './NewsCard';

export default class NewsCardList {
    constructor(container, root, search, error,) {
        this.container = container;
        this.root = root;
        this.search = search;
        this.error = error;
    }
    
    addCard(imageUrl, date, title, paragraph, source) {
        const newsCard = new NewsCard(imageUrl, date, title, paragraph, source);
        const element = newsCard.createCard();
        this.container.appendChild(element);
    }

    addListCard(list) {
        this.container.innerHTML = "";
        console.log(this.error);
        if (list.length > 0) {
            for (const element of list) {
                const data = element;
                this.addCard(data.urlToImage, data.publishedAt, data.title, data.description, data.source.name);
            };
            this.error.style.display = "none";
            this.search.style.display = "none";
            this.root.style.display = "block";
        } else {
            this.search.style.display = "none";
            this.error.style.display = "flex";
        };
    }
}