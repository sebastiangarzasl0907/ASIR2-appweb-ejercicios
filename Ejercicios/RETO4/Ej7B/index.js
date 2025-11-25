// ESTE ES EL CASO DEL EJERCICIO 7B, QUE PIDE QUE FUNCIONEN TODOS LOS BOTONES
// ATENCIÓN, EL PROFESOR HIZO MAL EL EJERCICIO EN EL ENUNCIADO


// SE CREA LA VARIABLE DONDE SE SELECCIONA LA ARRAY CON TODOS LOS BOTONES QUE TENGAN LA CLASE MIBOTON
const botones = document.getElementsByClassName('miboton')

// SE CREA UN BUCLE PARA CREAR LA FUNCION PARA CADA BOTON   
for(i = 0; i < botones.length; i++) {
// SE CREA UN EVENTO PARA QUE SE SEPA CUANDO SE HA HECHO CLICK EN EL BOTON
    botones[i].addEventListener('click', cambiarboton)

    function cambiarboton() {

    // IMPORTANTE: EN ESTAS CIRCUSTANCIAS (FUNCION PARA DECLARAR MULTIPLES BOTONES) SIEMPRE USAR THIS Y NUNCA NUMERO ARRAY, LA FUNCION NO ES CAPAZ DE VERLO
        if(this.innerHTML == 'Me gusta') {
            this.innerHTML = 'No me gusta'
        }
        else {
            this.innerHTML = 'Me gusta'
        }
    }
}