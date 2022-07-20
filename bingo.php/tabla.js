const colores = new Array(
"pink", "blue","green"
);

const generarTabla = () => {
    const numFilas = document.getElementById("numFilas").value;
    const numColumnas = document.getElementById("numColumnas").value;
    const contenedorTabla = document.getElementById("contenedorTabla");

    contenedorTabla.innerHTML = "";
    let colorFondo, colorLetra;
    let tabla = "<table style='border: 1px solid black;'>";
    // var tabla = "<table class='table'>";
    for (let k = 1; k <= numFilas; k++) {
        tabla += "<tr>";
        for (let o = 1; o <= numColumnas; o++) {
            colorFondo = colores[Math.round(Math.random() * ((colores.length - 1) - 0) + 0)];
            do {
                colorLetra = colores[Math.round(Math.random() * ((colores.length - 1) - 0) + 0)];
            } while (colorFondo === colorLetra);
            console.log(colorFondo + " | " + colorLetra);
        }tabla += "<td style='border: 1px solid black; background-color: " + colorFondo + "; color: " + colorLetra + "; padding: 4px; text-align: center;'>9</td>";
        tabla += "<td style='border: 1px solid black; background-color: " + colorFondo + "; color: " + colorLetra + "; padding: 4px; text-align: center;'>20</td>";

        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTabla.innerHTML = tabla;
};

window.addEventListener('load', function () {

    document.getElementById('botonGenerar').addEventListener('click', function () {
        generarTabla();
    });

});