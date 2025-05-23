// 01-variables.js
// Clase 1: Fundamentos de JavaScript

function mostrarVariables() {
  const nombre = "Rodrigo";
  const edad = 20;
  const leGustaProgramar = true;
  const texto = "Hola mundo";       // string
  const numero = 42;                // number
  const booleano = false;           // boolean
  let indefinido;                  // undefined
  const nulo = null;                // null

  const resultado = `
  Nombre: ${nombre}
  Edad: ${edad}
  ¿Le gusta programar?: ${leGustaProgramar}
  
  Tipos:
  texto (${texto}) → ${typeof texto}
  numero (${numero}) → ${typeof numero}
  booleano (${booleano}) → ${typeof booleano}
  indefinido → ${typeof indefinido}
  nulo → ${typeof nulo}
    `;

  document.getElementById("resultado1").textContent = resultado;
  console.log("Variables y tipos mostrados");
}

function mostrarOperaciones() {
  const x = 10;
  const y = 5;

  const resultado = `
  x = ${x}, y = ${y}
  
  Suma: x + y = ${x + y}
  Resta: x - y = ${x - y}
  Multiplicación: x * y = ${x * y}
  División: x / y = ${x / y}
  
  Comparaciones:
  x === y → ${x === y}
  x !== y → ${x !== y}
  x > y → ${x > y}
  x <= y → ${x <= y}
    `;

  document.getElementById("resultado2").textContent = resultado;
  console.log("Operaciones mostradas");
}

function ejercicioFinal() {
}
