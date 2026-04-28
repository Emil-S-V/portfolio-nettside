const bgmusic = new Audio("../sounds/background-music.mp3");
bgmusic.loop = true;
bgmusic.volume = 0.5;

const menuToggle = document.getElementById("music-menu");
const menuControls = document.getElementById("music-controls");
const MusicToggle = document.getElementById("toggleMusic");
const SliderVolume = document.getElementById("volumeSlider");

menuToggle.addEventListener("click", () => {
    menuControls.classList.toggle("show");
});


MusicToggle.addEventListener("click", () => {
    if(bgmusic.paused) {
        bgmusic.muted = false;
        bgmusic.play();
        MusicToggle.textContent = "Lyd av"
    } else {
        bgmusic.pause();
        MusicToggle.textContent = "Lyd på"
    }
})

SliderVolume.addEventListener("input", () => {
    bgmusic.volume = SliderVolume.value;
});