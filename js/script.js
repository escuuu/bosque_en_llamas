var tablero = document.getElementById("tablero");
let cont1, cont2 = 1;

function crear_tablero() {

    tablero.innerHTML = "";
    cont1 = 0;

    let ancho = document.getElementById('n1').value;
    let alto = document.getElementById('n2').value;
    let num;

    document.getElementById('ej').innerHTML = 'Tablero creado de ' + ancho+ 'x'+ alto;

    for(let i = 0; i < ancho; i++) {
        cont1++;
        let container = document.createElement("div");
        let child_container = document.createElement("div");

        let btn_casilla = document.createElement("button");
        btn_casilla.id = "btn" + cont1 + cont2;
        btn_casilla.onclick = function(){suelo(this.id)};
        btn_casilla.param = "btn" + cont2 + cont1;

        child_container.id = "cell" + cont2 + cont1;
        container.id = "container" + cont1;

        tab.appendChild(container);
        container.appendChild(child_container);
        child_container.appendChild(btn_casilla);


        colorear_plantillas(num, btn_casilla, cont2, cont2);

        for(let j = 0; j < alto; j++){
            cont2++;
            div = document.createElement("div");
            div.id = "celda" + cont2 + cont1;
            btn = document.createElement("button");
            btn.id =  "btn" + cont2 + cont1;

            //crear_elemento(btn, "button", "btn", cont2 + cont1);
            divpadre.appendChild(div);
            btn.textContent =  cont2 +","+ cont1;
            btn.addEventListener("click", function(){cambiar_color(this.id)});

            div.appendChild(btn);
            colorear_plantillas(num, btn, cont2, cont1);
        }
        cont2 = 1;
    }

}

function suelo(ident){

    let btn = document.getElementById(ident)

    if(btn.classList.contains('4') || btn.classList.contains('5')){

        btn.style.backgroundColor = "orange";
        alert("Fuego apagado")

    }else if(btn.classList.contains('2') || btn.classList.contains('3')){

        btn.style.backgroundColor = "darkgreen";
        alert("Creando arbol");

    }else{

        btn.style.backgroundColor = "green";
        alert("Tronco");
    }
}

function colorear_plantillas(random, container, num1, num2){

    random = Math.floor(Math.random()* 5);

    container = document.getElementById("btn" + num1 + num2)

    if(random > 1 && random < 4){

        container.style.backgroundColor = "green";
        container.className = random;
    }
    else if(random > 3){
        
        container.style.backgroundColor = "red";
        container.className = random;
        
    }
    else{

        container.style.backgroundColor = "darkgreen";
        container.className = random;
    }
}