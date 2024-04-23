/**-------METODOS DE ARREGLOS----------- */
let num = [1, 2, 3, 4, 5, 6];

/*Como agregar elementos a un Arreglo*/

//METODO array.push(parametro ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
num.push("Metodo push");
// queda en ---> (7) [1, 2, 3, 4, 5, 6, 'Metodo push']

//METODO array.unshift(parametro ==> AGREGA UN ELEMENTO AL INICIO DEL ARRAY
num.unshift("Metodo Unshift");
// queda en ---> (8) ['Metodo Unshift', 1, 2, 3, 4, 5, 6, 'Metodo push']

//ELIMINER ELEMENTOS
//METODO array.pop()  ==> QUITA UN ELEMENTO AL FINAL DEL ARRAY
let popEliminado = num.pop();

//console.log(num, "<----ARREGLO");
//(7) ['Metodo Unshift', 1, 2, 3, 4, 5, 6]0: "Metodo Unshift"1: 12: 23: 34: 45: 56: 6length: 7[[Prototype]]: Array(0) '<----ARREGLO'
//console.log(popEliminado, "<----ELIMINADO");
//Metodo push <----ELIMINADO

//METODO array.shift()  ==> QUITA UN ELEMENTO AL INICIO DEL ARRAY
let shiftEliminado = num.shift();

//console.log(num, "<----ARREGLO");
//(6) [1, 2, 3, 4, 5, 6]0: 11: 22: 33: 44: 55: 6length: 6[[Prototype]]: Array(0)
//console.log(shiftEliminado, "<----ELIMINADO");
//Metodo Unshift <----ELIMINADO

//METODO array.splice(posicion, cantidad_de_elementos_a_Borrar)  ==> QUITAR DIFERENTES ELEMENTOS DEL  ARRAY
let spliceEliminado = num.splice(2, 1);

//console.log(num, "<----ARREGLO");
//console.log(spliceEliminado, "<----ELIMINADO");

/* BUSCAR SU POSICION */
//METODO array.findIndex(posicion, funcion)  ==> VERIFICA LA POSICION DEL ELEMENTO EN EL ARRAY Y MEDIANTE UNA FUNCION, DEVUELVE SU INDICE
let indexFind = num.findIndex((e) => e == 5);
//console.log(num, "<----ARREGLO");
//console.log(indexFind, "<----ELELEMENTO FIND");
//3 '<----ELELEMENTO FIND'

//METODO array.indexOf(funcion)  ==> VERIFICA LA POSICION DEL ELEMENTO EN EL ARRAY Y DEVUELVE SU POSICION
let ofIndex = num.indexOf(4);
//console.log(num, "<----ARREGLO FIND");
//console.log(ofIndex, "<----FIND");

/* -------------DOM + METODOS + EVENTOS--------------- */
const listaDeInvitados = document.querySelector("#invitados");
const invitadosInput = document.querySelector("#nuevoInvitado");
const btnAgregarInvitado = document.querySelector("#agregarInvitado");

const invitados = [];

btnAgregarInvitado.addEventListener("click", () => {
  const nuevoInvitado = invitadosInput.value;
  invitados.push(nuevoInvitado);
  invitadosInput.value = "";

  let html = "";

  for (const iterator of invitados) {
    html += `<li>${iterator}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});

/* OPTIMIZANDO EJEMPLO ANTERIOR */
const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevoItem");
const btnAgregarItem = document.querySelector("#agregarItem");

const items = [
  { id: 100, nombre: "Jhonny Depp" },
  { id: 200, nombre: "Brad Pitt" },
  { id: 300, nombre: "Leonardo DiCAprio" },
  { id: 400, nombre: "Morgan Freeman" },
];

btnAgregarItem.addEventListener("click", () => {
  const nuevoItem = { id: Date.now(), nombre: itemsInput.value };
  items.push(nuevoItem);
  itemsInput.value = "";

  render();
});

function render() {
  let html = "";
  for (const iterator of items) {
    html += `<li>${iterator.nombre}
    <button onclick="borrar"(${iterator.id})">x</button>
    </li>`;
  }
  listaDeItems.innerHTML = html;
}

function borrar(id) {
  const index = items.findIndex((e) => e.id == id);
  items.splice(index, 1);

  render();
}

/* EJERCICIO */

let heroes = [
  "Ironman",
  "Capitan America",
  "Viuda Negra",
  "Soldado del Invierno",
];

heroes.push("Hulk");
heroes.unshift("Thor", "Haweye");

//console.log(heroes);
