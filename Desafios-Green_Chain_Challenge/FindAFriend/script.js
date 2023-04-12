let modal = document.querySelector('.modal-menu')
let openMenu = document.querySelector('.open-menu')
let closeMenu = document.querySelector('.close-menu')


openMenu.addEventListener('click', openModal)
closeMenu.addEventListener('click', closeModal)


function openModal() {
  modal.classList.remove('hide')
  page.style.opacity = 0.1;
}


function closeModal() {
  modal.classList.add('hide')
  page.style.opacity = 1;
}