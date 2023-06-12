var columna;
let matrix = [];
 
var body = document.getElementsByTagName("body")[0];


// Actividad 1
function inicialitzaJoc() {

   //ALmacenamos los valores dle ancho y de la altura
    let x = document.getElementById("X").valueAsNumber;
    let y = document.getElementById("Y").valueAsNumber;

    //Generamos los elementos para crear la tabla
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //Generamos la tabla
    for (var i = 0; i < y; i++) {
        var file = document.createElement("tr");

        for (var j = 0; j < x; j++) {

            //Valores de la tabla
            columna = document.createElement("td");
             //Añadimos una id a cada cuadrado
             columna.setAttribute("id",  j + " " + i);

             //Estilos
            columna.textContent = ' ';
            columna.style.border = "2x solid"; 
            columna.style.width = "50px";
            columna.style.height = "50px";
 
            file.appendChild(columna);
        }
        tblBody.appendChild(file);
    }

    tabla.appendChild(tblBody);

    body.appendChild(tabla);

    //Colores de los cuadrados
    tblBody.style.backgroundColor = "black";

    let rows = document.querySelector("tbody").children

    //Bucle generador
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
}

// Actividad 2
function matriuBinaria() {
    var matrix2 = [];
    for (var i = 0; i < matrix.length; i++) {
        var fila = [];
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].style.backgroundColor == "red") { //Pintem els 0 de vermell
                fila.push(1);
            } else {
                fila.push(0);
            }
        }
        matrix2.push(fila);
    }
    console.log(matrix2); // Imprime la matriz binaria en la consola (para verla)
    return matrix2;
}


