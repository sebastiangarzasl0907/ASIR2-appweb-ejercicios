// PAGINA1: AUMENTAR WIDTH DE LOGO DEL ATHLETIC

let logo = document.getElementById('logo')
logo.addEventListener('mouseover', ampliarlogo)
logo.addEventListener('mouseout', rebootlogo)

function ampliarlogo() {
    logo.style.width = '100px'
}

function rebootlogo() {
    logo.style.width = '50px'
}