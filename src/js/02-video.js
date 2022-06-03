import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//Лисенер события изменения времени видео

player.on('timeupdate', throttle(onTimeUpdate, 1000));

//Ставим видео на тайминг локальной переменной

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// Функция события тика времени видео, которая создаёт/переписывает
// переменную локального хранилища

function onTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', String(e.seconds));
}
