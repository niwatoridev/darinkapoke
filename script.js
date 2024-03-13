const audio = new Audio('./sources/sounds/music.mp3')
const nothing = new Audio('')

let audioPlaying = false;

function playSound() {

    if (audioPlaying === true) {
    audio.pause()
    document.getElementById("play-btn").src = './sources/images/play-btn.png'
    audioPlaying = !audioPlaying
    } else {
    document.getElementById("play-btn").src = './sources/images/play-btn2.png'
    audio.play()
    audioPlaying = !audioPlaying
    }
}
