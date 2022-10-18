let fila, colum = 1;
let container;
let child_container;
let btn_casilla;

function crear_tablero() {

    let tablero = document.getElementById('tablero');

    tablero.innerHTML = "";
    fila = 0;

    let ancho = document.getElementById('n1').value;
    let alto = document.getElementById('n2').value;
    let num;

    document.getElementById('ej').innerHTML = 'Tablero creado de ' + ancho+ 'x'+ alto;

    for(let i = 1; i <= ancho; i++) {
        fila++;
        container = document.createElement("div");
        child_container = document.createElement("div");

        btn_casilla = document.createElement("button");
        btn_casilla.id = "btn" + colum + fila;
        btn_casilla.onclick = function(){suelo(this.id); };
        btn_casilla.param = "btn" + colum + fila;

        child_container.id = "cell" + colum + fila;
        container.id = "container" + fila;

        tablero.appendChild(container);
        container.appendChild(child_container);
        child_container.appendChild(btn_casilla);

        colorear_plantillas(num, btn_casilla, colum, fila);

        for(let j = 1; j < alto; j++){
            colum++;
            child_container = document.createElement("div");
            child_container.id = "celda" + colum + fila;
            btn_casilla = document.createElement("button");
            btn_casilla.id =  "btn" + colum + fila;


            container.appendChild(child_container);
            // btn_casilla.textContent =  colum +","+ fila;
            btn_casilla.addEventListener("click", function(){suelo(this.id); });

            child_container.appendChild(btn_casilla);
            colorear_plantillas(num, btn_casilla, colum, fila);
        }
        colum = 1;
    }

}

function suelo(ident){
    random = Math.floor(Math.random()* 2);
    let button = document.getElementById(ident);


    if(button.classList.contains('1')) {
        button.style.backgroundImage = "url(./img/cesped.jpg)";
        button.style.backgroundSize = "contain";
        alert("Césped plantado");
    }
}

function colorear_plantillas(random, button, num1, num2){

    random = Math.floor(Math.random()* 2);

    button = document.getElementById("btn" + num1 + num2);

    if(random == 0){
        button.style.backgroundImage = "url(./img/cesped.jpg)";
        button.title = 'Plantar arbol';
        button.style.backgroundSize = "contain";
        button.className = random;
    }

    else {
        button.style.backgroundImage = "url(./img/suelo.jpg)";
        button.title = 'Crecer cesped';
        button.style.backgroundSize = "contain";
        button.className = random;   
    }

    // else {
    //     button.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/2/22/Animated_fire_by_nevit.gif)";
    //     button.style.backgroundSize = "contain";
    //     button.className = random;
    // }
}