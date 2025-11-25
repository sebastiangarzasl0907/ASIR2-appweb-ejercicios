
var botoncincoa = document.getElementById('cincoa')
var botonejprac = document.getElementById('ejemplopractico')

botoncincoa.addEventListener('click', carrusel1)
botonejprac.addEventListener('click', carrusel2)

function carrusel1() {
    let carrusel = setInterval("actualizar()", 2000)
}

function carrusel2() {
    let carrusel = setInterval("ejemplopractico()", 2000)
}

var n_act = 0

// ARRAYS DONDE ESTÁN TODOS LOS VALORES A PONER
var cabeceras = ['Gaztelugatxe', 'Museo', 'Plentzia', 'Algorta', 'Bosque', 'Castillo', 'Costa', 'Fin']
var imagenes = ['gaztelugatxe.jpg', 'museo.jpg', 'plentzia.jpg', 'algorta.jpg', 'bosque.jpg', 'castillo.jpg', 'costa.jpg', 'fin.jpg']

// SE ALMACENAN EN ESTAS VARIABLES LA CABECERA Y LA IMAGEN
let parrafo = document.getElementById('enunciadocarrusel')
let imagen = document.getElementById('imagencarrusel')

function actualizar() {
    // CREO EL NUMERO ALEATORIO
    var random = Math.floor(Math.random() * cabeceras.length)
        
    // AÑADIMOS LOS CAMBIOS A LOS OBJETOS USANDO EL NUMERO ALEATORIO COMO PARAMETRO DE ARRAY
    parrafo.innerHTML = cabeceras[random]
    imagen.src = `img/${imagenes[random]}`

    // ACTUALIZAMOS EL ACTUALIZADOR
    n_act +=1

    // EN CASO DE QUE SE HAYA ACTUALIZADO 10 VECES SE DA POR FINALIZADO EL CARRUSEL
    if (n_act == 10) {
        parrafo.innerHTML = "Fin del carrusel"
        imagen.src = 'img/fin.jpg'
        clearInterval(carrusel)
    }
    
}

let countdown = 10
function ejemplopractico() {
    // CREO EL NUMERO ALEATORIO
    var random = Math.floor(Math.random() * cabeceras.length)

    // PONGO EL NUMERO EN EL PARRAFO PARA LLEVAR LA CUENTA ATRAS Y UNA IMAGEN ALEATORIA
    parrafo.innerHTML = countdown
    imagen.src = `img/${imagenes[random]}`

    // EN CASO DE QUE EL CONTADOR LLEGUE A CERO SE ANUNCIA
    if(countdown == 0) {
        parrafo.innerHTML = 'TIEMPO!!!!'
        imagen.src = 'img/fin.jpg'
        clearInterval(carrusel)
    }

    // RESTO UN NUMERO PARA LA CUENTA ATRAS
    countdown = countdown - 1
}