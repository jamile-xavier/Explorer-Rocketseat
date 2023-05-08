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
const secondsDisplay = document.querySelector(".seconds")


const soundFlorest = new Audio("../assets/Floresta.wav");
const soundRain = new Audio("../assets/Chuva.wav");
const soundCoffeeShop = new Audio("../assets/Cafeteria.wav");
const soundFireplace = new Audio("../assets/Lareira.wav");

function updateDisplay(minutes, seconds) {

  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay("25", "00")
      return
    }

    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}


function musicFlorest() {
  soundRain.pause();
  soundCoffeeShop.pause();
  soundFireplace.pause();
  soundFlorest.play();
  soundFlorest.loop = true;
}

function musicRain() {
  soundFlorest.pause();
  soundCoffeeShop.pause();
  soundFireplace.pause();
  soundRain.play();
  soundRain.loop = true;
}

function musicCoffeeShop() {
  soundFlorest.pause();
  soundRain.pause();
  soundFireplace.pause();
  soundCoffeeShop.play();
  soundCoffeeShop.loop = true;
}

function musicFireplace() {
  soundFlorest.pause();
  soundRain.pause();
  soundCoffeeShop.pause()
  soundFireplace.play();
  soundFireplace.loop = true;
}

buttonPlay.addEventListener('click', function () {
  countDown();
});
buttonStop.addEventListener('click', function () { });
buttonPlus.addEventListener('click', function () { });
buttonLess.addEventListener('click', function () { });


buttonSoundFlorest.addEventListener('click', musicFlorest);
buttonSoundRain.addEventListener('click', musicRain);
buttonSoundCoffeeShop.addEventListener('click', musicCoffeeShop);
buttonSoundFireplace.addEventListener('click', musicFireplace);


