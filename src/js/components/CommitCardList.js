import CommitCard from './CommitCard';

export default class CommitCardList {
    constructor(container) {
        this.container = container;
    }
    
    addCard(date, imageUrl, name, email, text) {
        const commitCard = new CommitCard(date, imageUrl, name, email, text);
        const element = commitCard.createCard();
        this.container.appendChild(element);
    }

    addListCard(list) {
        const listSliced = list.slice(0,19);
        for (const data of listSliced) {
            this.addCard(data.commit.committer.date, data.author.avatar_url, data.commit.committer.name, data.commit.committer.email, data.commit.message);
        };
    }
}