export default class DataStorage {
    constructor() {
        
    }

    vanishOldData() {
        localStorage.clear()
    }

    uploadData(articles) {
        localStorage.newsArray = JSON.stringify(articles);
    }
    
    uploadCounter(number) {
        localStorage.counter = number;
    }

    uploadKeyWord(word) {
        localStorage.keyWord = word 
    }
}