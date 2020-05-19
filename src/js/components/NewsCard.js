export default class NewsCard {
    constructor(imageUrl, date, title, paragraph, source) {
        this.imageUrl = imageUrl;
        this.date = date;
        this.title = title;
        this.paragraph = paragraph;
        this.source = source;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('cards__item');

        const template = 
            `<img class="cards__image" src="${this.imageUrl}" alt="Problem with connection or file">
            <div class="cards__content-row">
                <p class="cards__item-date">${this.date}</p>
                <h2 class="cards__item-title">${this.title}</h2>
                <div class="cards__item-paragraph">${this.paragraph}</div>
                <p class="cards__item-source">${this.source}</p>
            </div>`;

        card.innerHTML = template;

        console.log(card);

        return card
    }
}