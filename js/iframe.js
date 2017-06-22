var player;
var playerId;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //height: '390',
    //width: '640',

    playerVars: {
      'controls': 0,
      'showinfo': 0,
      'rel': 0,
      'loop': 1,
    },
    videoId: 'Wq1y0FhpgGI',
    playlist: 'Wq1y0FhpgGI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.setLoop(true);
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  event.target.setLoop(true);
  event.target.playVideo();
}
