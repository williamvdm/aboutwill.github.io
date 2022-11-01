const hamburger = document.getElementById('hamburger')
const nav = document.getElementById('nav-menu')

hamburger.addEventListener("click", () => {
    nav.classList.toggle('show');
    nav.classList.remove('hide');
})

nav.addEventListener("click", () => {
    nav.classList.toggle('hide');
    nav.classList.remove('show');
})