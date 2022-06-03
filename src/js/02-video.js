import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function (e) {
  console.log(e);
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function onTimeUpdate(e) {
  console.log(e);
  localStorage.setItem('videoplayer-current-time', String(e.seconds));
}
