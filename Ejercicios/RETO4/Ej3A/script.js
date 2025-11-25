function cambiar() {
    // Inserto los datos (en este ejercicio es obligatorio usar .getElementsByClassName)
    let titulos = document.getElementsByClassName("titulo")
    let subtitulos = document.getElementsByClassName("subtitulo")
    let v_php = document.getElementsByClassName("php")
    let v_js = document.getElementsByClassName("js")

    // Usaré un bucle FOR debido a que las variables son arrays, así que yo usaré un bucle que es menos eficiente pero más rápido de escribir

    // Aplicamos los atributos correspondientes a cada una de nuestras etiquetas.
    for(i = 0; i < titulos.length; i++) {
        titulos[i].style.backgroundColor = 'black'
        titulos[i].style.color = 'white'
    }

    for(i = 0; i < subtitulos.length; i++) {
        subtitulos[i].style.backgroundColor = 'gray'
        subtitulos[i].style.color = 'white'
    }

    for(i = 0; i < v_js.length; i++) {
        v_js[i].style.backgroundColor = 'blue'
        v_js[i].style.color = 'white'
    }

    for(i = 0; i < v_php.length; i++) {
        v_php[i].style.backgroundColor = 'green'
        v_php[i].style.color = 'white'
    }
}

function agregar() {

    /**
     CREAMOS EL LABEL H2 "SEGURIDAD"
     */
    var seguridad = document.createElement('h2')
    seguridad.innerHTML = "SEGURIDAD"
    seguridad.style.textAlign = 'center'
    seguridad.style.color = 'red'

        /**
     CREAMOS EL PÁRRAFO
     */

    var parrafo = document.createElement("p")
    parrafo.innerHTML = "Nuevo parrafo"

        /**
     CREAMOS UNA IMAGEN
     */
    var img = document.createElement('img')
    img.src = "gatoalegre.jpg"

        document.body.appendChild(seguridad)
        document.body.appendChild(parrafo)
        document.body.appendChild(img)
}

function verlink() {
    var link = document.createElement('a')
    link.innerHTML = "centrosanluis"
    link.href = "https://www.centrosanluis.com"
    link.style.display = "block"
    document.body.appendChild(link)
}