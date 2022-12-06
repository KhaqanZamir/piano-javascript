const pianoKeys = document.querySelectorAll(".keys-wrapper .key");
const volumeControl = document.querySelector(".volume-container input");
const showKeysToggle = document.querySelector(".show-keys-container input");

let allKeys = [],
audio = new Audio("./tunes/a.wav")
audio.volume = 0.5;

//Play Tune Function
const playKeyTune = (key) => {
    audio.src = `./tunes/${key}.wav`
    audio.play();
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playKeyTune(key.dataset.key));
})

const keyboardKeyPressed = (e) => {
    if(allKeys.includes(e.key)){
        playKeyTune(e.key)
    }
}

const controlVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

document.addEventListener("keydown", keyboardKeyPressed);
volumeControl.addEventListener("input", controlVolume);
showKeysToggle.addEventListener("click", showHideKeys)
