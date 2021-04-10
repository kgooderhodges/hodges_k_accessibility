const playPause = document.querySelector('.playpause');
const stopBtn = document.querySelector('.stop');
const rwd = document.querySelector('.rwd');
const fwd = document.querySelector('.fwd');
const mute = document.getElementById('mute');
const volUp = document.getElementById('volUp');
const volDown = document.getElementById('volDown');
const timeDisplay = document.querySelector('.time');
const player = document.querySelector('video');
const track = document.getElementById('subtitles');
const audio = document.querySelector('audio');
const audioBtn = document.querySelector('audioBtn');

    playPause.onclick = function() {
        if(player.paused) {
        player.play();
        playPause.textContent = 'Pause';
        } else {
        player.pause();
        playPause.textContent = 'Play';
        }
    };

    stopBtn.onclick = function() {
        player.pause();
        player.currentTime = 0;
        playPause.textContent = 'Play';
    };

    rwd.onclick = function() {
        player.currentTime -= 3;
    };
    
    fwd.onclick = function() {
        player.currentTime += 3;
        if(player.currentTime >= player.duration || player.paused) {
        player.pause();
        player.currentTime = 0;
        playPause.textContent = 'Play';
        }
    };

    player.ontimeupdate = function() {
        let minutes = Math.floor(player.currentTime / 60);
        let seconds = Math.floor(player.currentTime - minutes * 60);
        let minuteValue;
        let secondValue;
        
            if (minutes<10) {
            minuteValue = "0" + minutes;
            } else {
            minuteValue = minutes;
            }
        
            if (seconds<10) {
            secondValue = "0" + seconds;
            } else {
            secondValue = seconds;
            }
        
            mediaTime = minuteValue + ":" + secondValue;
            timeDisplay.textContent = mediaTime;
    };

    mute.addEventListener('click', function(e) {
        video.muted = !video.muted;
    });

    volUp.addEventListener('click', function(e) {
        alterVolume('+');
    });
    volDown.addEventListener('click', function(e) {
        alterVolume('-');
    });

    var alterVolume = function(dir) {
        var currentVolume = Math.floor(video.volume * 10) / 10;
        if (dir === '+') {
            if (currentVolume < 1) video.volume += 0.1;
        }
        else if (dir === '-') {
            if (currentVolume > 0) video.volume -= 0.1;
        }
    }



    function playVid(file, captions) {
        video.src = file;
        track.src = captions;
    }

    function playAudio(song) {
        audio.src = song;
        var x = document.getElementById("lyrics");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

