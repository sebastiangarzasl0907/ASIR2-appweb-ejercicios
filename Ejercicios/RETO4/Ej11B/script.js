let usuario = document.getElementById('user')
let passwd = document.getElementById('passwd')
let imagen = document.querySelector('#inputimagen img')
const formulario = document.querySelector('form')
var parametros = ['alumno', 'sanluis'] // PARAMETROS
let estadopasswd = false

usuario.addEventListener('focus', enfocaruser)
passwd.addEventListener('focus', enfocarpasswd)
usuario.addEventListener('blur', desenfocar)
passwd.addEventListener('blur', desenfocar)
imagen.addEventListener('click', swcontraseña)


// PARTE UNO, USUARIO AL FOCUSEAR SE QUEDA COMO ROSA Y PASSWD EN ROJO
function enfocaruser() {
    this.style.backgroundColor = 'pink'
}

function enfocarpasswd() {
    this.style.backgroundColor = 'red'
    // HABILITA LA IMAGEN, SI OS FIJAIS EN EL CSS HA DESHABILITADO EL DISPLAY A TODAS LAS IMG
    imagen.style.display = 'inline-block'
}

// REGRESAR INPUTS A SU ESTADO ORIGINAL
function desenfocar() {
    this.style.backgroundColor = 'white'
}

// SWITCH, PRIMERO CAMBIA EL SWITCH O BOOL DE ESTADO, Y DESPUÉS SE ESPECIFICA LO QUE SE DEBE HACER SEGUN EL ESTADO EN EL QUE SE ENCUENTRE
function swcontraseña() {
    estadopasswd = !estadopasswd

    if(estadopasswd) {
        imagen.src = 'images/vercontra.jpg'
        passwd.type = 'text'
    }
    else {
        imagen.src = 'images/novercontra.jpg'
        passwd.type = 'password'
    }
}

// LAS MISMAS PAUTAS DE ENVIO QUE EL EJERCICIO ANTERIOR
formulario.addEventListener('submit', function(event) {

    if(usuario.value == '') {
        alert('introduzca su nombre')
        event.preventDefault()
        return false
    }
    
    if(passwd.value == '') {
        alert('introduzca su contraseña')
        event.preventDefault()
        return false
    }

    if(usuario.value != parametros[0] && passwd.value != parametros[1]) {
        alert('usuario y/o contraseña incorrectos')
        event.preventDefault()
        return false
    }
})