// import file videoPlayer
import {
   videoPlayerInit
} from './videoPlayer.js';
// import file radioPlayer
import {
   radioPlayerInit
} from './radioPlayer.js';
// import file musicPlayer
import {
   musicPlayerInit
} from './musicPlayer.js';


// переменные

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const deactivationPlayer = () => {
   temp.style.display = 'none';
   playerBtn.forEach(item => item.classList.remove('active'));
   playerBlock.forEach(item => item.classList.remove('active'));


   musicPlayerInit.stop();
   videoPlayerInit.stop();
   radioPlayerInit.stop();
};


playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
   deactivationPlayer();
   btn.classList.add('active');
   playerBlock[i].classList.add('active');
}));


// call function
videoPlayerInit();
radioPlayerInit();
musicPlayerInit();