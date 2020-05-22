export default class CommitCard {
    constructor(date, imageUrl, name, email, text) {
        this.date = date;
        this.imageUrl = imageUrl;
        this.name = name;
        this.email = email;
        this.text = text;
    }

    createCard() {
        const commitCard = document.createElement('div');
        commitCard.classList.add('swiper-slide');

        const template = 
            `<p class="swiper-date">${this.date}</p>
            <div class="swiper-slide-container">
                <img class="swiper-image" src="${this.imageUrl}" alt="Problem with connection or file">
                <div class="swiper-content-row">
                    <p class="swiper-name">${this.name}</p>
                    <p class="swiper-email">${this.email}</p>  
                </div>
            </div>
            <p class="swiper-paragraph">${this.text}`;

        commitCard.innerHTML = template;

        console.log(commitCard);

        return commitCard
    }
}