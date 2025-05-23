// Clase 2: Funciones y listas con temática de taquería

/* =====================
   1. Declaración de Listas (Arrays)
   ===================== */

// Lista de objetos: cada taco tiene propiedades como nombre, precio, disponibilidad y cantidad
let tacos = [
    { name: "Suadero", price: 20, available: true, quantity: 10 },
    { name: "Pastor", price: 25, available: true, quantity: 5 },
    { name: "Barbacoa", price: 30, available: true, quantity: 3 }
];

// Lista vacía que se llenará con los tacos que el usuario "se comió"
let eatedTacos = [];


/* =====================
   2. Funciones sin parámetros
   ===================== */

// Muestra un mensaje de bienvenida. No recibe datos, solo ejecuta una acción.
function welcome() {
    alert("🌮 Bienvenido a la Taquería JS!");
}

/* =====================
   3. Funciones con parámetros y lógica con listas
   ===================== */

// Esta función se ejecuta cuando se pide un taco. Toma los valores del formulario.
function orderTacos(event) {
    event.preventDefault();

    const tipo = event.target.querySelector(".tipoTaco").value.trim();
    const cantidad = parseInt(event.target.querySelector(".cantidadTaco").value);
    const taco = tacos.find(t => t.name === tipo);

    if (taco.quantity - cantidad < 0) {
        alert(`❌ No hay suficientes tacos de ${tipo}. Solo quedan ${taco.quantity}`);
        return;
    }

    taco.quantity -= cantidad;
    eatTacos(tipo, cantidad);
    showTacos();
    showEatedTacos();
}

// Registra qué tacos se comió el usuario y cuántos
function eatTacos(tacoType, quantity) {
    eatedTacos.push({ name: tacoType, quantity });
}

// Esta función muestra un resumen de los tacos comidos y el total
function printReceipt() {
    if (eatedTacos.length === 0) {
        alert("No te has comido ningún taco aún 😭");
        return;
    }

    let total = 0;
    let resumen = "🧾 Recibo de tacos:\n";
    eatedTacos.forEach(t => {
        const taco = tacos.find(x => x.name === t.name);
        const price = taco ? taco.price : 0;
        resumen += `- ${t.quantity} taco(s) de ${t.name} ($${price} c/u)\n`;
        total += price * t.quantity;
    });
    resumen += `\nTotal a pagar: $${total}`;
    alert(resumen);
}

/* =====================
   4. Funciones auxiliares que usan listas
   ===================== */

// Muestra el menú con los nombres y precios
function showMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    tacos.forEach((taco) => {
        const li = document.createElement("li");
        li.textContent = `${taco.name} - $${taco.price}`;
        menu.appendChild(li);
    });
}

// Muestra la cantidad restante de cada taco
function showTacos() {
    const lista = document.getElementById("listaTacos");
    lista.innerHTML = "";
    tacos.forEach((taco) => {
        const li = document.createElement("li");
        li.textContent = `${taco.name} - Restantes: ${taco.quantity}`;

        taco.available = taco.quantity > 0;
        li.className = taco.available ? "" : "line-through";
        li.style.color = taco.available ? "black" : "red";
        li.style.fontStyle = taco.available ? "normal" : "italic";
        li.style.fontWeight = taco.available ? "normal" : "bold";

        lista.appendChild(li);
    });
}

// Muestra la lista de tacos que el usuario pidió
function showEatedTacos() {
    const lista = document.getElementById("eatedTacosList");
    lista.innerHTML = "";
    eatedTacos.forEach((taco) => {
        const li = document.createElement("li");
        li.textContent = `${taco.quantity} taco(s) de ${taco.name}`;
        lista.appendChild(li);
    });
}

// Llena los selects de tipo de taco con los nombres disponibles
function mapTacos() {
    const selects = document.querySelectorAll(".tipoTaco");
    selects.forEach((select) => {
        select.innerHTML = "";
        tacos.forEach((taco) => {
            const option = document.createElement("option");
            option.value = taco.name;
            option.textContent = taco.name;
            select.appendChild(option);
        });
        select.value = tacos[0].name;
    });
}

/* =====================
   5. Ejercicios para los estudiantes
   ===================== */

// Ejercicio 1 (función sin parámetros):
// Crear una función llamada 'saludar' que muestre un alert con tu nombre favorito de taco.
function saludar() {
}

// Ejercicio 2 (función con parámetro):
// Crear una función llamada 'mostrarPrecio' que reciba el nombre de un taco y muestre su precio
function mostrarPrecio() {

}

// Ejercicio 3 (lista):
// Mostrar cuántos tipos de tacos hay
function cuantosTacosHay() {
}

// Ejercicio 4 (lista):
// Mostrar el nombre del primer taco del menú
function primerTaco() {
}

/* =====================
   6. Código de inicialización
   ===================== */

window.onload = function () {
    showMenu();
    showTacos();
    showEatedTacos();
    mapTacos();
};  