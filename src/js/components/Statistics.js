export default class Statistics {
    constructor(keyWord, list, counter) {
        this.keyWord = keyWord;
        this.list = list;
        this.counter = counter;
        //console.log(this.list)
    }

    statsUploader() {
        const listSliced = this.listSlicer(this.list)
        const requestFormated = this.titleFormation(this.keyWord).forRequest;
        const keyWordFormated = this.titleFormation(this.keyWord).forTitleCount;
        const requestItem = document.querySelector('.request__question');
        requestItem.insertAdjacentHTML('afterbegin', requestFormated)
        const titleCounter = this.titleCount(this.list, keyWordFormated).toString();
        const titleCounterItem = document.querySelector('#secondRequestSpan')
        titleCounterItem.insertAdjacentHTML('afterbegin', titleCounter)
    }

    titleFormation(request) {
        const requestArr = request.toLowerCase().slice(1);
        const requestFormated = request.charAt(0).toUpperCase() + requestArr;
        return {
            forRequest:`Вы спросили: «${requestFormated}»`,
            forTitleCount: requestFormated
        };
    }

    listSlicer(arr) {
        return arr.slice(0,3 + 3 * this.counter)
    }

    titleCount(list, keyWord) {
        let titleCounter = 0
        console.log(list)
        for (const element of list) {
            const titleFormated = element.title.replace(/"/gm, '');
            const titleArr = titleFormated.split(' ');
            titleArr.forEach(word => {
                if (word.toString().slice(0, keyWord.length) === keyWord || word.toString().slice(0, keyWord.length) == keyWord.toLowerCase()) {
                    titleCounter++
                }
            })
        };
        return titleCounter;
    }
}