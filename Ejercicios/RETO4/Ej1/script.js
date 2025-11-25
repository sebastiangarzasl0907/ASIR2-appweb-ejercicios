function cambiar(){

    // primero modifico el titulo <h1></h1>
    let titulo = document.getElementsByTagName('h1')
    titulo[0].textContent = "EJERCICIO1 JAVASCRIPT"

    // ahora modificaré los parrafos <p></p>
    let parrafos = document.getElementsByTagName('p')
    
    for(i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "gray"
        parrafos[i].style.backgroundColor = "yellow"
    }
}