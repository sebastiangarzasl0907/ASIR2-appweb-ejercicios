var botonpag1 = document.getElementById('elboton')
var casillacheck1 = document.getElementById('casillaCheck1')

botonpag1.addEventListener('click', siguientepagina)

function siguientepagina() {
    if(!casillacheck1.ariaDisabled) {
        window.location.href = "ejer12pagina2.html"
    } else {
        alert('primero acepta los terminos')
    }
}