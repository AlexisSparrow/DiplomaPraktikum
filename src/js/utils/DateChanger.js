export default class DateChanger {
    constructor(date) {
        this.date = date
    }

    monthChecker(month) {
        switch(month) {
            case '01':
                return('января');
                break;
            case '02':
                return('февраля');
                break;
            case '03':
                return('марта');
                break;
            case '04':
                return('апреля');
                break;
            case '05':
                return('мая');
                break;
            case '06':
                return('июня');
                break;
            case '07':
                return('июля');
                break;
            case '08':
                return('августа');
                break;
            case '09':
                return('сентября');
                break;
            case '10':
                return('октября');
                break;
            case '11':
                return('ноября');
                break;
            case '12':
                return('декабря');
                break;
            default:
                console.log('переменная месяца невалидна')
        }

    }

    dayChecker(dayArr) {
        if (dayArr[0] == '0') {
            return dayArr[1].toString();
        } else {
            return dayArr.join('').toString();
        };
    }

    dateFormation() {
        const splittedDate = this.date.split('')
        const month = splittedDate.slice(5,7).join('').toString();
        const monthFormated = this.monthChecker(month);
        const yearFormated = splittedDate.slice(0,4).join('').toString();
        const dayArr = splittedDate.slice(8,10);
        const dayFormated = this.dayChecker(dayArr);
        return {
            dayFormated:dayFormated,
            monthFormated:monthFormated,
            yearFormated:yearFormated
        }
    }
}