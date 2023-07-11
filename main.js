// simulador interactivo de promedio de notas
// el usuario debera ingresar sus notas para calcular el promedio

// VARIABLES
let nota;
let asignatura;
let sumaNotas;
let promedio = 0;
let cantidad
let decision;

// mensaje de bienvenida
alert("¡Bienvenido, calculemos tu promedio!")

do {
    cantidad = 0;
    asignatura = prompt("Ingrese la asignatura");


    nota = Number(prompt("Ingrese su nota"))

    while (nota <= 0 || nota > 10 || isNaN(nota)) {
        alert("NOTA INVALIDA ")
        nota = Number(prompt("Por favor, ingrese una nota valida!"))
    }

    cantidad++;
    sumaNotas = nota

    decision = prompt("Desea ingresar otra nota? Si / No")

    while (decision == "Si" || decision == "si" || decision == "SI") {
        nota = Number(prompt("Ingrese otra nota"))

        while (nota <= 0 || nota > 10 || isNaN(nota)) {
            alert("NOTA INVALIDA")
            nota = Number(prompt("Por favor, ingrese una nota valida!"))
        }

        sumaNotas = sumaNotas + nota
        cantidad++;

        decision = prompt("Quiere seguir ingresando notas? Si / No")
    }

    promedio = sumaNotas / cantidad

    alert(`Su promedio en ${asignatura} es ${promedio}`)

    decision = prompt("Quiere ingresar notas de otra asignatura? Si / No"); 

} while (decision == "Si" || decision == "si" || decision == "SI");

alert("Gracias por usar el simulador :)")
