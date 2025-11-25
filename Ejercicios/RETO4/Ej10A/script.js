const formulario = document.getElementById('formulario')

// CREO EL EVENTO DEL FORMULARIO
formulario.addEventListener('submit', function(event) {
     
    // ESPECIFICO LOS APARTADOS DE ESTE
    const nombre = formulario.nombre.value
    const edad = formulario.edad.value

    // SI EL NOMBRE NO ESTÁ PUESTO SE IMPIDE EL ENVIO
    if(nombre.trim() == "") {
            alert('introduzca su nombre')
            event.preventDefault()
            return;
    }

    //SI LA EDAD NO ESTA PUESTA, NO ES UN NUMERO O ES MENOR A 18 SE IMPIDE ACCEDER
    if(edad == "") {
        alert('introduzca su edad')
        event.preventDefault()
        return;
    } else if(isNaN(parseInt(edad))) {
        alert('introduzca en numeros')
        event.preventDefault()
        return;
    } else if(parseInt(edad) < 18) {
        alert('debes ser mayor de edad para acceder a esta página')
        event.preventDefault()
        return;
    }
})
