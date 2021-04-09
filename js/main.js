// const player = document.querySelector('.playerCon'),
//       video = player.querySelector('.playerVideo'),
//       progress = player.querySelector('.progressBar'),
//       progressBar = player.querySelector('.progressBar'),
//       toggle = player.querySelector('.toggle'),
//       skipButtons = player.querySelector('[data-skip]'),
//       ranges = player.querySelector('.playerSlider');

//     function togglePlay() {
//         const method = video.paused ? 'play' : 'pause';
//         video[method]();
//     }



// video.addEventListener('click', togglePlay);


const videoPlayer = document.getElementById('videoPlayer');
const bigVideo = document.getElementById('bigVideo');

    function playVid(file) {
        bigVideo.src = file;
        videoPlayer.style.display = "block";
    }

    function stopVideo() {
        bigVideo.pause();
        bigVideo.currentTime = 0;
        videoPlayer.style.display = 'none';
    };

    // stopVideo.addEventListener('click', );