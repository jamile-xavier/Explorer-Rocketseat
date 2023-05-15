const buttonLightMode = document.querySelector(".btn-lightMode")
const buttonDarkMode = document.querySelector(".btn-darkMode")
const body = document.querySelector(".body")

const buttonPlay = document.querySelector(".button-play");
const buttonStop = document.querySelector(".button-stop");
const buttonPlus = document.querySelector(".button-plus");
const buttonLess = document.querySelector(".button-less");

const buttonSoundFlorest = document.querySelector(".button-florest");
const buttonSoundRain = document.querySelector(".button-rain");
const buttonSoundCoffeeShop = document.querySelector(".button-coffeeShop");
const buttonSoundFireplace = document.querySelector(".button-fireplace");

const timeDisplay = document.querySelector(".time");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let timeOutId = null;

buttonLightMode.addEventListener('click', function () {
  darkMode()
})

buttonDarkMode.addEventListener('click', function () {
  body.style.background = "#f1eef0";
  buttonLightMode.classList.remove("hide")
  buttonDarkMode.classList.add("hide")
})


function darkMode() {


  body.style.background = "#121214";
  buttonLightMode.classList.add("hide")
  buttonDarkMode.classList.remove("hide")
}


const musics = [
  { id: 'soundFlorest', music: new Audio("../assets/Floresta.wav") },
  {
    id: 'soundRain', music: new Audio("../assets/Chuva.wav")
  },
  { id: 'soundCoffeeShop', music: new Audio("../assets/Cafeteria.wav") },
  { id: 'soundFireplace', music: new Audio("../assets/Lareira.wav") }
]


function updateDisplay(minutes, seconds) {

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function countDown() {
  timeOutId = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay("25", "00")
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

function addRemoveTime(operacao) {
  let time = Number(minutesDisplay.textContent)

  updateDisplay(!operacao ? time += 5 : time -= 5, "00")
}

function playMusic(musicName) {
  let song = musics.filter(x => x.id == musicName)[0]
  musics.forEach(music => {
    if (music.id != musicName) {
      music.music.pause()
    }
  })
  song.music.play();
  song.music.loop = true;
}

buttonPlay.addEventListener('click', function () {
  countDown();
});
buttonStop.addEventListener('click', function () {
  clearTimeout(timeOutId)
  updateDisplay("25", "00")
});
buttonPlus.addEventListener('click', function () {
  addRemoveTime();
});
buttonLess.addEventListener('click', function () {
  addRemoveTime(true);
});


buttonSoundFlorest.addEventListener('click', function () {
  playMusic('soundFlorest')
});
buttonSoundRain.addEventListener('click', function () {
  playMusic("soundRain")
});
buttonSoundCoffeeShop.addEventListener('click', function () {
  playMusic("soundCoffeeShop")
});
buttonSoundFireplace.addEventListener('click', function () {
  playMusic("soundFireplace")
});


