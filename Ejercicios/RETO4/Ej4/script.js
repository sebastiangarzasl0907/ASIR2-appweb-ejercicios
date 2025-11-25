// EVENTO 1, HACER UN ALERT CUANDO SE CARGA LA PÁGINA USANDO EVENTO LOAD O ONLOAD
document.body.addEventListener('load', saludar()) 
function saludar() {
    alert('hola, evento1')
}


// EVENTO 2, USANDO MOUSEOVER O MOUSEOUT CUANDO SE PASA POR ENCIMA DE H1 SE CAMBIA EL COLOR, CUANDO SE ALEJA DEL H1 VUELVE AL COLOR ORIGINAL
// SE HA USADO UNA FUNCIÓN QUE GENERA UN COLOR ALEATORIO, MAS ABAJO
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

// EVENTO 3, USANDO LOS EVENTOS MOUSEDOWN Y MOUSEUP DETECTA CUANDO PICO LA IMAGEN Y CUANDO LA SUELTO. ASÍ PUEDO CAMBIAR LA IMAGEN

imagen = document.getElementById('gato')
imagen.addEventListener('mousedown', cambiar)
imagen.addEventListener('mouseup', restablecer)

function cambiar() {
    imagen.src = 'img/gatoalegre.jpg'
}

function restablecer() {
    imagen.src = 'img/gatoenfadado.jpg'
}

// EVENTO4 , CUANDO HAGO CLICK EN EL BOTÓN CAMBIO EL COLOR DEL FONDO DE LA PAGINA (BODY) USANDO UN RGB CON NUMEROS ALEATORIOS

boton = document.getElementById('cambiar')
boton.addEventListener('click', cambiofondo)

function cambiofondo() {
    const rgb = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    document.body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}


// GENERADOR ALEATORIO DE 10 COLORES (PARA EJ2)
// USANDO LA LIBRERIA MATH GENERA UN NUMERO ALEATORIO DE 0 AL MAXIMO DE LA LONGITUD DEL ARRAY Y SELECCIONA CON ESE NUMERO UN COLOR, DESPUES DEVUELVE EL COLOR
function colores() {
    listacolores = ['red', 'blue', 'yellow', 'pink', 'gray', 'cyan', 'brown', 'lightgray', 'orange', 'purple']
    const numeroAleatorio = Math.floor(Math.random() * listacolores.length);
    return listacolores[numeroAleatorio]
}

