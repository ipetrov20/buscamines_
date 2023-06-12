var columna;
let matrix = [];
let mina = [];

var body = document.getElementsByTagName("body")[0];

function inicialitzaJoc() {

    // Almacenamos los valores del ancho y de la altura
    let x = document.getElementById("X").valueAsNumber;
    let y = document.getElementById("Y").valueAsNumber;

    // Generamos los elementos para crear la tabla
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // Generamos la tabla
    for (var i = 0; i < y; i++) {
        var fila = document.createElement("tr");

        for (var j = 0; j < x; j++) {

            // Valores de la tabla
            columna = document.createElement("td");
            // Añadimos una id a cada cuadrado
            columna.setAttribute("id",  j + " " + i);

            // Estilos
            columna.textContent = ' ';
            columna.style.border = "2px solid"; 
            columna.style.width = "50px";
            columna.style.height = "50px";

            fila.appendChild(columna);
        }
        tblBody.appendChild(fila);
    }

    tabla.appendChild(tblBody);

    body.appendChild(tabla);
    // Color de fondo de la cuadrícula
    tblBody.style.backgroundColor = "black";

    let rows = document.querySelector("tbody").children;
    // Bucle generador
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children);
    }

    tblBody.addEventListener("click", minesSide);

    for (let i = 0; i < y; i++) {
        mina[i] = [];
        for (let j = 0; j < x; j++) {
            mina[i][j] = 0;
        }
    }
}

// Creamos las minas
function inicialitzaMines() {
    let nMines = 0;
    let numMines = document.getElementById("nMinas").valueAsNumber;
    let X = document.getElementById("X").valueAsNumber;
    let Y = document.getElementById("Y").valueAsNumber;

    // Especificamos la posición de la mina
    for (let a = 0; a < X; a++) {
        mina[a] = [];
        for (let b = 0; b < Y; b++) {
            mina[a][b] = 0;
        }
    }
    // Generar minas con posiciones aleatorias
    while (nMines < numMines){
        let fila = Math.floor(Math.random() * Y);
        let columna = Math.floor(Math.random() * X);
        if (mina[fila][columna] == 0){
            mina[fila][columna] = 1;
            nMines++;
        }
    }

    // Cambiamos el color de la casilla que contiene la mina 
    // según la posición de esta
    for (let a = 0; a < X; a++) {
        for (let b = 0; b < Y; b++) {
            if (mina[a][b] == 1) {
                matrix[a][b].style.backgroundColor = "red";
            }
        }
    }
} 


// Generamos las coordenadas
function coordenadas(event) {

    // Obtener la posición X e Y del elemento clicado
    let posX = event.target.id.split(' ')[1]; 
    let posY = event.target.id.split(' ')[0];

    // Mostramos las coordenadas
    if (event.target.tagName == "TD") {
        console.log(event.target.id);
    }

    // Si hay bomba mostrar el mensaje de explosión
    if (mina[posX][posY] == 1) {
        return alert("BOOOM");
    }

    // Si no hay bomba entonces nada
    else {
        return console.log("---");
    }
}

// Mostrar si las casillas son o no minas con 0 y 1
function minesSide(event) {
    if (event.target.tagName == "TD") {
        let inputX = parseInt(event.target.id.split(' ')[0]);
        let inputY = parseInt(event.target.id.split(' ')[1]);

        //Mostramos los número de pantalla
        for (let i = inputY - 1; i <= inputY + 1; i++) {
            for (let j = inputX - 1; j <= inputX + 1; j++) {
                try {
                    count = countNeighbours(j, i);
                    matrix[i][j].innerText = count;
                }
                catch {
                }
            }
        }
    }
}


// Contar número de minas alrededor
function countNeighbours(x, y) {
    let count = 0;
    for (let i = y - 1; i <= y + 1; i++) {
        for (let j = x - 1; j <= x + 1; j++) {
            try {
                if (i==y && j==x) {
                }
                // Si el fondo es rojo aumenta el contador
                else if (matrix[i][j].style.backgroundColor == "red") {
                    count++;
                }
            }
            catch {
            }
        }
    }
    return count;
}

