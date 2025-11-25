
var botonpregunta = document.getElementById('botonPregunta')
var imagen = document.getElementById('imagen')
var verpregunta = document.getElementById('pregunta')
var textorespuesta = document.getElementById('textoRespuesta')
var inputrespuesta = document.getElementById('inputRespuesta')
var botonenviar = document.getElementById('botonEnviar')

botonpregunta.addEventListener('click', generarpreguntas)


// ANTES DE REALIZAR ESTE APARTADO QUIERO ACLARAR QUE GENERAR ELEMENTOS PARA ESTOS FINES ES UNA CHAPUZA EN EL MUNDO LABORAL, NORMALMENTE SE JUEGA CON CSS / DISPLAY PARA ELLO
function generarpreguntas() {
    // GENERO UN TEMPORIZADOR PARA CUANDO PASEN LOS 10 SEGUNDOS SE GENERE LA RESPUESTA
    setTimeout(enviarrespuestas, 10000);

    // CREO EL GIF AÑADIENDOLE UN HIJO IMG AL TD QUE CONTIENE LA POSICION DE LA IMAGEN
    var imagenhijo = document.createElement('img')
    imagenhijo.src = 'cuentaAtras.gif'
    imagen.appendChild(imagenhijo)

    // CREO LA ESTRUCTURA DE LAS PREGUNTAS H5, OL > LI
    var pregunta = document.createElement('h5')
    pregunta.innerHTML = 'Escribe en que ciudad estás: '
    verpregunta.appendChild(pregunta)
    
    var listarespuestas = document.createElement('ol')
    verpregunta.appendChild(listarespuestas)

    var lista1 = document.createElement('li')
    lista1.innerHTML = 'Bilbao'
    listarespuestas.appendChild(lista1)

    var lista2 = document.createElement('li')
    lista2.innerHTML = 'Madrid'
    listarespuestas.appendChild(lista2)

    var lista3 = document.createElement('li')
    lista3.innerHTML = 'Barcelona'
    listarespuestas.appendChild(lista3)

}

function enviarrespuestas() {
    // AL PASAR DIEZ SEGUNDOS GENERO EL APARTADO DE LA RESPUESTA
    var textoai = document.createElement('h5')
    textoai.innerHTML = 'tu respuesta es: '
    textorespuesta.appendChild(textoai)

    var inputreal = document.createElement('input')
    inputreal.type = 'text'
    inputreal.size = '40'
    inputreal.placeholder = 'Escribe tu respuesta'
    inputrespuesta.appendChild(inputreal)

    var botonenvio = document.createElement('input')
    botonenvio.type = 'button'
    botonenvio.value = 'ENVIAR RESPUESTA'
    botonenviar.appendChild(botonenvio)
}