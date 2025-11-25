
// FUNCION PARA SUMAR DOS INPUTS
function sumar() {
    
    // AÑADIMOS A LAS DOS VARIABLES LOS VALORES DE LOS INPUTS
    let valor1 = parseFloat(document.getElementById('valor1').value)
    let valor2 = parseFloat(document.getElementById('valor2').value)

    // EN CASO DE QUE SEAN NUMEROS SE REALIZA LA SUMA Y SE COLOCA COMO VALOR DE RESULTADO, EN CASO CONTRARIO SE PIDE QUE SE INGRESEN NUMEROS
    if (!isNaN(valor1) && !isNaN(valor2)) {
        let suma = valor1+valor2
        document.getElementById("resultado").value = suma
    }
    else {
        alert('por favor ingrese numeros')
    }
}


// SE ESPECIFICA EL INPUT1 (COMO HTML) Y SE AÑADEN LOS EVENTOS FOCUS Y BLUR (PARA SABER SI ESTAS CENTRANDOTE EN EL INPUT O NO)
var input1 = document.getElementById('valor1')
var input2 = document.getElementById('valor2')
input1.addEventListener('focus', enfocusar)
input1.addEventListener('blur', desvanecer)


// EN CASO DE QUE HAYAS ENTRADO EN INPUT1 CAMBIA EL FONDO A ROSA
function enfocusar() {
    input1.style.backgroundColor = 'pink'
}

// CUANDO DEJAS EL INPUT SE CAMBIA A BLANCO DE NUEVO
function desvanecer() {
    input1.style.backgroundColor = 'white'
}
