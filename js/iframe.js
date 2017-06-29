var player;
var playerId;

function onYouTubeIframeAPIReady() {
  if (document.documentElement.clientWidth > 600) {
    player = new YT.Player('player', {

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
}

function onPlayerReady(event) {
  event.target.setLoop(true);
  event.target.playVideo();
  // Player playing, hide image
  setTimeout(function() {
    $(".image-background").addClass("fadeout");
  }, 1000);
}

function onPlayerStateChange(event) {
  event.target.setLoop(true);
  event.target.playVideo();
}
