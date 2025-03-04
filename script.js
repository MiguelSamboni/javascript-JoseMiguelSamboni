
// 1. Determinar si una persona es mayor de edad
// Solicita la edad al usuario y muestra si es mayor o menor de edad
function verificarEdad() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    alert(edad >= 18 ? "Mayor de edad" : "Menor de edad");
}

// 3. Comparar dos números A y B
// Solicita dos números y los compara para determinar cuál es mayor o si son iguales
function compararNumeros() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (a > b) alert("A es mayor que B");
    else if (a < b) alert("A es menor que B");
    else alert("A es igual a B");
}

// 5. Clasificar el peso de una persona
// Solicita el peso de la persona y lo clasifica según un rango establecido
function clasificarPeso() {
    let peso = parseInt(prompt("Ingrese el peso de la persona:"));
    if (peso <= 40) alert("Persona baja de peso");
    else if (peso >= 41 && peso <= 70) alert("Persona peso promedio");
    else alert("Persona con sobrepeso");
}

// 7. Calcular descuento en una compra
// Solicita el total de la compra y aplica un descuento según el monto
function calcularPago() {
    let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
    let descuento = totalCompra > 1000 ? 0.2 : 0.05;
    alert(`Cantidad a pagar: ${totalCompra - (totalCompra * descuento)}`);
}

// 9. Determinar quién es mayor entre dos personas
// Solicita nombres y edades de dos personas y determina quién es mayor
function compararEdades() {
    let nombre1 = prompt("Ingrese el nombre de la primera persona:");
    let edad1 = parseInt(prompt("Ingrese la edad de la primera persona:"));
    let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
    let edad2 = parseInt(prompt("Ingrese la edad de la segunda persona:"));
    if (edad1 > edad2) alert(`${nombre1} es mayor.`);
    else if (edad1 < edad2) alert(`${nombre2} es mayor.`);
    else alert("Ambos tienen la misma edad.");
}

// 11. Operaciones con dos números según su relación
// Si los números son iguales, los multiplica. Si A es mayor, los resta. Si B es mayor, los suma
function operarNumeros() {
    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    if (a === b) alert(a * b);
    else if (a > b) alert(a - b);
    else alert(a + b);
}

// 13. Determinar si un número es par o impar
// Solicita un número y determina si es par o impar
function parImpar() {
    let numero = parseInt(prompt("Ingrese un número:"));
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}

// 15. Determinar si un número es positivo, negativo o cero
// Solicita un número y muestra si es positivo, negativo o cero
function evaluarNumero() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero > 0) alert("El número es positivo");
    else if (numero < 0) alert("El número es negativo");
    else alert("El número es cero");
}

// 17. Calcular el área de una figura geométrica
// Solicita el tipo de figura (triángulo o cuadrado) y sus dimensiones para calcular el área
function calcularArea() {
    let figura = prompt("Ingrese la figura geométrica (triangulo/cuadrado):").toLowerCase();
    let base = parseFloat(prompt("Ingrese la base o lado:"));
    let altura = parseFloat(prompt("Ingrese la altura (o el mismo valor si es cuadrado):"));
    if (figura === "triangulo") alert(`Área del triángulo: ${(base * altura) / 2}`);
    else if (figura === "cuadrado") alert(`Área del cuadrado: ${base * altura}`);
    else alert("Figura no válida");
}

// 19. Validar usuario y contraseña
// Solicita un usuario y contraseña y valida si coinciden con los valores predefinidos
function validarUsuario() {
    let nombre = prompt("Ingrese el nombre de usuario:");
    let contrasena = prompt("Ingrese la contraseña:");
    alert((nombre === "admin" && contrasena === "12345") ? "Acceso concedido" : "Acceso denegado");
}

// Ejecución automática de ejemplos con comentarios
verificarEdad(); // Ejecuta la verificación de edad
compararNumeros(); // Compara dos números ingresados
clasificarPeso(); // Clasifica el peso según el rango
calcularPago(); // Calcula el total a pagar con descuento incluido
compararEdades(); // Compara edades de dos personas
operarNumeros(); // Realiza operaciones matemáticas según relación de los números
parImpar(); // Determina si un número es par o impar
evaluarNumero(); // Evalúa si un número es positivo, negativo o cero
calcularArea(); // Calcula el área de un triángulo o cuadrado
validarUsuario(); // Valida usuario y contraseña