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

    let button = document.getElementById(ident);

    // if(button.classList.contains('4') || button.classList.contains('5')){

    //     button.style.backgroundImage = "url(./img/cesped.jpg)";
    //     button.style.backgroundSize = "contain";
    //     alert("Fuego apagado")

    // }else if(button.classList.contains('2') || button.classList.contains('3')){

    //     // button.style.backgroundColor = "darkgreen";
    //     button.style.backgroundImage = "url(https://www.gifcen.com/wp-content/uploads/2022/01/wallpaper-gif-4.gif)";
    //     button.style.backgroundSize = "contain";
    //     alert("Creando arbol");

    // }else{
    //     button.style.backgroundImage = "url(https://www.gifcen.com/wp-content/uploads/2022/01/wallpaper-gif-4.gif)";
    //     button.style.backgroundSize = "contain";
    //     alert("Tronco");
    // }

    if(button.classList.contains('3')){
        button.style.backgroundImage = "url(./img/cesped.jpg)";
        button.style.backgroundSize = "contain";
        alert("Fuego apagado");
    }

    
}

function colorear_plantillas(random, button, num1, num2){

    random = Math.floor(Math.random()* 5);

    button = document.getElementById("btn" + num1 + num2);

    console.log(button);

    if(random != 3){

        button.style.backgroundImage = "url(./img/cesped.jpg)";
        button.style.backgroundSize = "contain";
        button.className = random;
    }
    else {
        button.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/2/22/Animated_fire_by_nevit.gif)";
        button.style.backgroundSize = "contain";
        button.className = random;   
    }
}