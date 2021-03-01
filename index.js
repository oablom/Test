const hamburger = document.getElementsByClassName('firstsection-hamburger')[0]
const navbar = document.getElementsByClassName('firstsection-footer-nav')[0]

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active')
}

)