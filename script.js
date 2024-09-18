let nombre = prompt("Ingrese su nombre: ");
let asistencias = parseFloat(prompt("Ingrese la cantidad de asistencias que tiene: "));
let categoryElement = document.getElementById("category");

if (asistencias >= 0 && asistencias < 21) {
    categoryElement.innerHTML = `${nombre} entra en la categoría C porque tiene menos de 21 asistencias.`;
} else if (asistencias >= 21 && asistencias < 34) {
    categoryElement.innerHTML = `${nombre} entra en la categoría B porque tiene de 21 a 34 asistencias.`;
} else if (asistencias >= 35) {
    categoryElement.innerHTML = `${nombre} entra en la categoría A porque tiene 35 o más asistencias.`;
} else {
    categoryElement.innerHTML = "No entra a clases.";
}