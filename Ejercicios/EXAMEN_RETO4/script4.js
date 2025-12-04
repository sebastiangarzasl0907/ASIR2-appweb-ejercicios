// AREA SOCIO
let credenciales = ['alumno', 'sanluis']

// SOLO ACEPTAR INICIO DE SESION SI USUARIO Y CONTRASEÑA SON CORRECTOS
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function (event) {

    let usuario = formulario.username
    let contra = formulario.contra

    if(usuario.value == credenciales[0] && contra.value == credenciales[1]) {
        alert('usuario y contraseña correctos')
    }
    else {
        alert('credenciales erroneas.')
        event.preventDefault();
        return false;
    }
})


// MOSTRAR CONTRASEÑA SI CHECKBOX ES ACTIVO

let checkbox = document.getElementById('confirmo')
let passwdInput = document.getElementById('contra')

checkbox.addEventListener('click', swpasswd)

// USO UN SWITCH SIMPLE PARA ACTUALIZAR EL ESTADO DE LA CONTRASEÑA
passwdShow = false
function swpasswd() {
    passwdShow = !passwdShow

    if(passwdShow == true){
        passwdInput.type = 'text'
    }
    else {
        passwdInput.type = 'password'
    }
}