import DateChanger from '../../js/utils/DateChanger';
export default class StatisticsItem {
    constructor(date, numberOfNews) {
        this.date = date;
        this.numberOfNews = numberOfNews
    }

    createCard() {
        const analytItem = document.createElement('div');
        analytItem.classList.add('analytics__item');

        const dateChanger = new DateChanger();

        const weekDayFormated = dateChanger.weekDayChecker(this.date.getDay().toString());

        const dateFormated = this.date.getDate() + ', ' + weekDayFormated;

        const template = `<p class="analytics__item-date">${dateFormated}</p>
        <div class="analytics__graph">
            <p class="analytics__graph-number">${this.numberOfNews}</p>
        </div>`

        analytItem.insertAdjacentHTML('afterBegin', template);

        const analytGraph = analytItem.querySelector('.analytics__graph')

        if (this.numberOfNews > 0) {
        analytGraph.setAttribute('style', `width: calc(${this.numberOfNews}*12*100%/1440 + 15px)`);
        } else {
            analytGraph.setAttribute('style', `display: none `);
        }

        return analytItem;
    }
}