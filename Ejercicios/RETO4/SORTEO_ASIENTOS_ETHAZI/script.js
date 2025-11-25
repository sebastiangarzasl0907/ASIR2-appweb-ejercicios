function sortear() {

    // GRUPOS
    var grupo1 = ["Asiento1", "Asiento2", "Asiento3", "Asiento4", "Asiento5"];
    var grupo2 = ["Asiento6", "Asiento7", "Asiento8", "Asiento15", "Asiento16"];
    var grupo3 = ["Asiento9", "Asiento10", "Asiento11", "Asiento12", "Asiento13"];
    var grupo5 = ["Asiento14", "Asiento22", "Asiento23", "Asiento24", "Asiento25"];
    var grupo4 = ["Asiento17", "Asiento18", "Asiento19", "Asiento20", "Asiento21"];

    // ALGORITMO FISHER-YATES PARA CREAR EL ORDEN ALEATORIO DE EQUIPOS
    let equipos = [1, 2, 3, 4, 5];
    for (let i = equipos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [equipos[i], equipos[j]] = [equipos[j], equipos[i]];
    }

    // SE ASIGNAN LOS EQUIPOS YA CREADOS EN LOS EQUIPOS MEDIANTE UNA ASIGNACION DE CLASE
    const celdas = document.querySelectorAll('.tablaasientos td')

    for(i = 0; i < celdas.length; i++) {
        if(grupo1.includes(celdas[i].textContent.trim())) { 
            celdas[i].className = 'equipo' + equipos[0]
        }
        if(grupo2.includes(celdas[i].textContent.trim())) { 
            celdas[i].className = 'equipo' + equipos[1]
        }
        if(grupo3.includes(celdas[i].textContent.trim())) { 
            celdas[i].className = 'equipo' + equipos[2]
        }
        if(grupo4.includes(celdas[i].textContent.trim())) { 
            celdas[i].className = 'equipo' + equipos[3]
        }
        if(grupo5.includes(celdas[i].textContent.trim())) { 
            celdas[i].className = 'equipo' + equipos[4]
        }
    }

    // SE ASIGNAN LOS EQUIPOS A LAS LISTAS (SABIENDO QUE ESTAS SON LAS UNICAS LISTAS DENTRO DE UN OL)
    var lista = document.querySelectorAll('ol li')

    lista[0].className = 'equipo' + equipos[0]
    lista[1].className = 'equipo' + equipos[1]
    lista[2].className = 'equipo' + equipos[2]
    lista[3].className = 'equipo' + equipos[3]
    lista[4].className = 'equipo' + equipos[4]



    // SE LES AÑADE ESTILOS A LOS EQUIPOS
    var e1 = document.getElementsByClassName('equipo1')
    for(i = 0; i < e1.length; i++) {
        e1[i].innerHTML = 'Equipo1'
        e1[i].style.backgroundColor = 'red'
    }

    var e1 = document.getElementsByClassName('equipo2')
    for(i = 0; i < e1.length; i++) {
        e1[i].innerHTML = 'Equipo2'
        e1[i].style.backgroundColor = 'blue'
    }

    var e1 = document.getElementsByClassName('equipo3')
    for(i = 0; i < e1.length; i++) {
        e1[i].innerHTML = 'Equipo3'
        e1[i].style.backgroundColor = 'green'
    }

    var e1 = document.getElementsByClassName('equipo4')
    for(i = 0; i < e1.length; i++) {
        e1[i].innerHTML = 'Equipo4'
        e1[i].style.backgroundColor = 'yellow'
    }

    var e1 = document.getElementsByClassName('equipo5')
    for(i = 0; i < e1.length; i++) {
        e1[i].innerHTML = 'Equipo5'
        e1[i].style.backgroundColor = 'cyan'
    }
}