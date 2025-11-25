// ESTE ES EL CASO DEL EJERCICIO 7, QUE PIDE SOLO UN BOTON

var botones = document.getElementsByClassName('miboton')
botones[0].addEventListener('click', cambiarboton)
function cambiarboton() {
    if(botones[0].innerHTML == 'Me gusta') {
        botones[0].innerHTML = 'No me gusta'
    }
    else {
        botones[0].innerHTML = 'Me gusta'
    }
}