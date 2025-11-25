// EVENTO 1
function saludar() {
    alert('hola, evento1')
}


// EVENTO 2, ID CREADA EN HTML Y EVENTO DECLARADO EN JS
var evento2 = document.getElementById('evento2')
evento2.addEventListener('mouseover', over)
evento2.addEventListener('mouseout', out)

function over() {
    colorAleatorio = colores()
    evento2.style.color = colorAleatorio
}

function out() {
    evento2.style.color = 'black'   
}

// EVENTO 3

imagen = document.getElementById('gato')
imagen.addEventListener('mousedown', cambiar)
imagen.addEventListener('mouseup', restablecer)

function cambiar() {
    imagen.src = 'img/gatoalegre.jpg'
}

function restablecer() {
    imagen.src = 'img/gatoenfadado.jpg'
}

// EVENTO4 

boton = document.getElementById('cambiar')
boton.addEventListener('click', cambiofondo)

function cambiofondo() {
    var colorAleatorio2 = colores()
    document.body.style.backgroundColor = colorAleatorio2
}


// GENERADOR ALEATORIO DE 10 COLORES (PARA EJ2 Y EJ4)
// USANDO LA LIBRERIA MATH GENERA UN NUMERO ALEATORIO DE 0 AL MAXIMO DE LA LONGITUD DEL ARRAY Y SELECCIONA CON ESE NUMERO UN COLOR, DESPUES DEVUELVE EL COLOR
function colores() {
    listacolores = ['red', 'blue', 'yellow', 'pink', 'gray', 'cyan', 'brown', 'lightgray', 'orange', 'purple']
    const numeroAleatorio = Math.floor(Math.random() * listacolores.length);
    return listacolores[numeroAleatorio]
}

