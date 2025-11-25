var botonpag1 = document.getElementById('elboton')
var botonpag2 = document.getElementById('botonPasaPagina2')
var casillacheck1 = document.getElementById('casillaCheck1')
var casillacheck2 = document.getElementById('casillaCheck2')

botonpag1.addEventListener('click', siguientepagina1)
casillacheck2.addEventListener('click', habilitarboton)
botonpag2.addEventListener('click', siguientepagina2)

function siguientepagina1() {
    if(casillacheck1.checked) {
        window.location.href = "ejer12pagina2.html"
    } else {
        alert('primero acepta los terminos')
    }
}

function habilitarboton() {
    // ESTA LINEA HABILITA EL BOTON
    botonpag2.disabled = false
}

function siguientepagina2() {
    window.location.href = "ejer12pagina3.html"
}