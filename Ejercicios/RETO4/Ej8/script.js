// METO LAS VARIABLES CON LOS VALORES
var dolar = 1.09
var libra = 0.86
var yen = 154.95

// INTRODUZCO LOS ELEMENTOS HTML QUE NECESITO
var colocar_resultado = document.getElementById('resultado')
var boton = document.getElementById('boton')
var euros = document.getElementById('euros')
var opciones = document.getElementById('opcion')

// CREO EL LISTENER PARA ESCUCHAR CUANDO HAGA CLICK EN EL BOTON
boton.addEventListener('click', procesarDinero)

function procesarDinero() {

    // SI EL VALOR DE LAS OPCIONES ES DICHA MONEDA, SE CALCULA EL VALOR DE DICHA MONEDA Y SE INTRODUCE EL RESULTADO EN EL INPUT
    if(opciones.value == 'dolar') {
        var resultado = parseFloat(dolar) * parseFloat(euros.value)
    }
    else if(opciones.value == 'libras') {
       var resultado = parseFloat(libra) * parseFloat(euros.value) 
    }
    else if(opciones.value == 'yen') {
       var resultado = parseFloat(yen) * parseFloat(euros.value) 
    }
    colocar_resultado.value = resultado
}

/* IMPORTANTE

HAY QUE INTRODUCIR LOS INPUTS SIN MAS Y LUEGO, CUANDO NECESITEMOS USAR LOS VALORES, PONER VARIABLEINPUT.VALUE, PORQUE ASÍ SE PROCESAN
LOS VALORES INTRODUCIDOS EN ESE MISMO INSTANTE
*/