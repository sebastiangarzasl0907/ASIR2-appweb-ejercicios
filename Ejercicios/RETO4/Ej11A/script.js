const formulario = document.getElementById('formulario')
let usuario = document.getElementById('usuario')
let passwd = document.getElementById('contrasena')
var parametros = ['alumno', 'sanluis']

// 1. SE DEBE DE ENFOCAR AL USUARIO Y CONTRASEÑA CUANDO ESTEMOS ESCRIBIENDO EN ELLOS
usuario.addEventListener('focus', enfocar)
passwd.addEventListener('focus', enfocar)
usuario.addEventListener('blur', desenfocar)
passwd.addEventListener('blur', desenfocar)

function enfocar() {
    this.style.backgroundColor = 'pink'
}

function desenfocar() {
    this.style.backgroundColor = 'white'
}

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