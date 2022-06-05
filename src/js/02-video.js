import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoplayerTime = 'videoplayer-current-time';
//Лисенер события изменения времени видео

player.on('timeupdate', throttle(onTimeUpdate, 1000));

//Ставим видео на тайминг локальной переменной

player.setCurrentTime(localStorage.getItem(videoplayerTime));

// Функция события тика времени видео, которая создаёт/переписывает
// переменную локального хранилища

function onTimeUpdate(e) {
  localStorage.setItem(videoplayerTime, String(e.seconds));
}
