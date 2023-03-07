const menuEl = document.getElementById('menuEl')
const burgerMenu = document.getElementById('burger-menu')


menuEl.addEventListener("click", function () {
    burgerMenu.classList.toggle('show-menu')
})