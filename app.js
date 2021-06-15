const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar-items')
const bacon = document.querySelector('.links1')
const bacon1 = document.querySelector('.links2')
const bacon2 = document.querySelector('.links3')
const bacon3 = document.querySelector('.links4')
const navLogo = document.querySelector('.navbar-logo')

//Mobile menu
const mobilemenu = () => {
        menu.classList.toggle('is-active')
        menulinks.classList.toggle('active')
}
const removemenu = () => {
        menu.classList.remove('is-active')
        menulinks.classList.remove('active')
}

bacon.addEventListener("click", removemenu)
bacon1.addEventListener("click", removemenu)
bacon2.addEventListener("click", removemenu)
bacon3.addEventListener("click", removemenu)

menu.addEventListener("click", mobilemenu)

