import './about.css';
import CommitCardList from '../../js/components/CommitCardList';
import GitHubApi from '../../js/modules/GitHubApi';
import {opt} from '../../js/utils/swiperActivate';

const gitHubApi = new GitHubApi({
    baseUrl: 
        'https://api.github.com/repos/AlexisSparrow/DiplomaPraktikum/commits'
    }
);

const commitCardList = new CommitCardList(document.querySelector('.swiper-wrapper'))

gitHubApi.getCommits()
    .then(res=> {
        commitCardList.addListCard(res);
        var mySwiper = new Swiper ('.swiper-container' , opt)
    });



