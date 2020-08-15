import DateChanger from '../utils/DateChanger';
import StatisticsItem from '../components/StatisticsItem'
export default class Statistics {
    constructor(keyWord, list, container) {
        this.keyWord = keyWord;
        this.list = list;
        this.container = container
    }

    addCard(date, length) {
        const statisticsItem = new StatisticsItem(date, length);
        const element= statisticsItem.createCard();
        this.container.appendChild(element);
    }

    addListCard(newsArrLength) {
        for (let i = 6; i >= 0; i--) {
            const date = new Date(new Date - 86400000 * i)
            this.addCard(date, newsArrLength[6-i]);
        };
    }

    statsUploader() {
        const requestFormated = this.titleFormation(this.keyWord).forRequest;
        const requestItem = document.querySelector('.request__question');
        requestItem.textContent = requestFormated;

        const titleCounter = this.list.length;
        const titleCounterItem = document.querySelector('#secondRequestSpan')
        titleCounterItem.textContent = titleCounter;

        const dateChanger = new DateChanger(new Date(new Date - 86400000 * 6).toISOString())
        const dateFormated = dateChanger.dateFormation()


        const monthItem = document.querySelector('.analytics__date');
        monthItem.textContent = `ДАТА (${dateFormated.monthFormated.secondType.toUpperCase()})`;

        const newsArrLength = this.dayDivider(this.list)

        this.addListCard(newsArrLength)

    }

    titleFormation(request) {
        const requestArr = request.toLowerCase().slice(1);
        const requestFormated = request.charAt(0).toUpperCase() + requestArr;
        return {
            forRequest:`Вы спросили: «${requestFormated}»`,
            forTitleCount: requestFormated
        };
    }

    dayDivider(list) {
        const newsArr = []
        for (const element of list) {
            const date = element.publishedAt.slice(8,10)
            newsArr.push(date)
        }
        const newsArrChecked = []
        for (let i = 6; i >= 0; i--) {
            const check = new Date(new Date - 86400000 * i).getDate().toString()
            newsArrChecked[6 - i] = newsArr.filter(element => {
                if (element == check) {
                    return element
                }
            })
        }
        
        const newsArrLength = newsArrChecked.map(element => {
            return element.length
        })

        return newsArrLength
    }
}