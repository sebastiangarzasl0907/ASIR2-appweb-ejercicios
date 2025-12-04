
let comprobar = document.getElementById('comprobar')
comprobar.addEventListener('click', comprobarRespuesta)



let parrafo = document.createElement('h1')
let imagen = document.createElement('img')
imagen.src = 'imagenes/bandera.jpg'

function comprobarRespuesta() {
let jugador = document.getElementById('jugador')
let posicion = document.getElementById('posicion')
let añadido = document.getElementById('ponercosas')

let v_jugador = ['us', 'os', 'dv', 'nw']
let v_posicion = ['por', 'def', 'medio', 'del']
let contador = 0

for(i = 0; i < v_jugador.length; i++) {
    contador += 1
    if(jugador.value == v_jugador[i] && posicion.value == v_posicion[i]) {
        añadido.appendChild(parrafo)
        parrafo.innerHTML = 'HAS ACERTADO'
        añadido.appendChild(imagen)
        break
    }

    if(contador == 4) {
        añadido.removeChild(imagen)
        añadido.appendChild(parrafo)
        parrafo.innerHTML = 'HAS FALLADO'
    }


}
}