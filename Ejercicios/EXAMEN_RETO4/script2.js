// APARTADO 1, CAMBIO DE PORTERO
let cambioportero = document.getElementById('cambioportero')
cambioportero.addEventListener('click', cambiarportero)

// ESTOY HACIENDO ESTO PURAMENTE CON JS HACIENDO CHAPUZAS PORQUE SEGUN EL PROFESOR SE DEBE INTENTAR HACER BUCLES Y ARRAYS
function cambiarportero() {
    let jugadores = document.getElementsByClassName('jugadores')

    // EN CASO DE QUE TENGA LA DIRECCIÓN DE UNAI COMO PORTERO CAMBIA A AGUIRRE
    for(i = 0; i < jugadores.length; i++) {
        if(jugadores[i].getAttribute('src') == 'imagenes/jugadores/unai.png') {
            jugadores[i].src = 'imagenes/jugadores/agirrezabala.png'
            document.getElementById('nombre').innerHTML = 'Aguirre'
        }
        else if(jugadores[i].getAttribute('src') == 'imagenes/jugadores/agirrezabala.png') {
            jugadores[i].src = 'imagenes/jugadores/unai.png'
            document.getElementById('nombre').innerHTML = 'Unai'
        }
    }
}



// APARTADO 2, CAMBIAR MEDIA
let cambiomedia = document.getElementById('cambiarmedia')
cambiomedia.addEventListener('click', cambiarmedia)

var ultimafila = ['imagenes/jugadores/nico.png', 'imagenes/jugadores/guruzeta.png', 'imagenes/jugadores/iñaki.png']
var suplentes = ['imagenes/jugadores/ander.png', 'imagenes/jugadores/unaigomez.png', 'imagenes/jugadores/galarreta.png']

function cambiarmedia() {
    let cuerpo = document.querySelectorAll('.tablajugadores img')
    
    for(i = 0; i < cuerpo.length; i++) {
        if(cuerpo[i].getAttribute('src') == ultimafila[0]) {
            cuerpo[i].src = suplentes[0]
        }
        else if(cuerpo[i].getAttribute('src') == ultimafila[1]) {
            cuerpo[i].src = suplentes[1]
        }
        else if(cuerpo[i].getAttribute('src') == ultimafila[2]) {
            cuerpo[i].src = suplentes[2]
        }
    }
    
}

// APARTADO 3, SUPLENTES
let carrusel = setInterval("actualizar()", 2000)
var n_act = 0
function actualizar() {
    let imgcarrusel = document.getElementsByClassName('suplentes')
    for(i = 0; i < imgcarrusel.length; i++) {
        imgcarrusel[i].src = suplentes[n_act]
    }
    n_act += 1

    if(n_act >= 3) {
        n_act = 0
    }
}

