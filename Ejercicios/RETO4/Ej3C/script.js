function cambiar() {
    var n_e1 = document.createElement('li')
    n_e1.innerHTML = "Nuevo primer elemento de la lista"
    n_e1.style.color = 'red'

    var n_e5 = document.createElement('li')
    n_e5.innerHTML = "Nuevo quinto elemento de la lista"
    n_e5.style.color = 'red'

    // CON UN BUCLE FOR INSPECCIONA TODAS LAS LISTAS, SI LAS LISTAS COINCIDEN CON EL CONTENIDO DE LA PRIMERA Y QUINTA SE MODIFICAN
    var e1 = document.getElementsByTagName('li')
    for(i = 0; i < e1.length; i++) {
        if(e1[i].innerHTML == 'Primer elemento de la lista') {
            e1[i].parentNode.replaceChild(n_e1, e1[i])
        }
        if(e1[i].innerHTML == 'Quinto elemento de la lista') {
            console.log('e5')
            e1[i].parentNode.replaceChild(n_e5, e1[i])
        }
    }
}

function eliminar() {

    // LO MISMO QUE LA MODIFICACION, SOLO SE CAMBIA EL COMANDO PARA QUE ELIMINE EL NODO
    var e1 = document.getElementsByTagName('li')
    for(i = 0; i < e1.length; i++) {
        if(e1[i].innerHTML == 'Séptimo elemento de la lista') {
            e1[i].parentNode.removeChild(e1[i])
        }
    }
}
// EJERCICIO OPCIONAL: AGREGAR DOS OBJETOS NUEVOS, SE PUEDE ABREVIAR CON CLASSNAME Y var copia = nuevalista.cloneNode(true); PERO NO ME QUIERO LIAR
function agregar() {
    var nuevalista1 = document.createElement('li')
    nuevalista1.innerHTML = 'Nueva lista'
    document.getElementById('nuevonodo1').appendChild(nuevalista1)

    var nuevalista2 = document.createElement('li')
    nuevalista2.innerHTML = 'Nueva lista'
    document.getElementById('nuevonodo2').appendChild(nuevalista2)

}