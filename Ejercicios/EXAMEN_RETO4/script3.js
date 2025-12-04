// APARTADO 3

// CODIGO PARA CONSULTAR PRECIO DE SOCIO / ABONO
let botonconsulta = document.getElementById('botonprecio')
botonconsulta.addEventListener('click', consultarprecio)

function consultarprecio() {
    var alta = 1200
    var baja = 800
    var abonado = 395


    let tiposocio = document.getElementById('tiposocio')
    let localidad = document.getElementById('localidad')
    let cuotaanual = document.getElementById('cuota')

    if(localidad.value == 'tribunaalta' && tiposocio.value == 'socio') {
        cuotaanual.value = alta
    }
    else if(localidad.value == 'tribunabaja' && tiposocio.value == 'socio') {
        cuotaanual.value = baja
    }
    else if(tiposocio.value == 'abono' && localidad.value !== '---') {
        cuotaanual.value = abonado
    }
    else {
        cuotaanual.value = ''
    }
    
}
// DNI ROSA AL ESCRIBIR EN EL
let dni = document.getElementById('dni')
dni.addEventListener('focus', enfocar)
dni.addEventListener('blur', desenf)

function enfocar() {
    this.style.backgroundColor = 'pink'
}
function desenf() {
    this.style.backgroundColor = 'white'
}


const formulario = document.querySelector('#tablasocio form')
formulario.addEventListener('submit', function (event) {

    // LOGICA DE LA EDAD
    let edad = formulario.edad
    
    if(!isNaN(parseInt(edad.value))) {
        if(parseInt(edad.value) < 18 || parseInt(edad.value) > 65) {
            alert('rango de edad requerido: mas de 18 y menos de 65')
            event.preventDefault()
            return false
        }
    }
    else {
        alert('inserta un numero')
        event.preventDefault()
        return false
    }
})