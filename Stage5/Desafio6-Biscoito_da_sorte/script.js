screen1 = document.querySelector(".screen1");
screen2 = document.querySelector(".screen2");
btnOpen = document.querySelector(".img-cookie");
btnNewCookie = document.querySelector(".btn-back-cookie");

btnOpen.addEventListener('click', changeScreen);
btnNewCookie.addEventListener('click', changeScreen);

function changeScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

