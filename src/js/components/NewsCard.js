import DateChanger from '../../js/utils/DateChanger';
export default class NewsCard {
    constructor(imageUrl, date, title, paragraph, source, sourceLink) {
        this.imageUrl = imageUrl;
        this.date = date;
        this.title = title;
        this.paragraph = paragraph;
        this.source = source;
        this.sourceLink = sourceLink
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('cards__item');

        const dateChanger = new DateChanger(this.date);
        const dateObj = dateChanger.dateFormation();
        const dateFormated = dateObj.dayFormated + ' ' + dateObj.monthFormated.firstType + ', ' + dateObj.yearFormated

        const text = this.paragraph.replace(/<\/*\w+>/gm, '');

        const template = 
            `<img class="cards__image" src="${this.imageUrl}" alt="Problem with connection or file">
            <div class="cards__content-row">
                <p class="cards__item-date">${dateFormated}</p>
                <h2 class="cards__item-title">${this.title}</h2>
                <p class="cards__item-paragraph">${text}</p>
                <a class="cards__item-source" href="${this.sourceLink}">${this.source}</a>
            </div>`;

        card.insertAdjacentHTML('afterBegin', template);
        
        //const titleItem = card.querySelector('.cards__item-title');
        //const paragraphItem = card.querySelector('.cards__item-paragraph');
        //console.log(window.getComputedStyle(titleItem,null))
        //console.log(window.getComputedStyle(titleItem,null).getPropertyValue('height'))
        //if (titleItem.style.height == '60px') {
        //    paragraphItem.setAttribute('style', 'height: 140px')
        //}

        console.log(card);

        return card
    }

    //widthHandler(titleItem ,paragraphItem) {
    //    if (titleItem.style.height == '60px') {
    //        paragraphItem.setAttribute('style', 'height: 140px')
    //    }
    //}
}