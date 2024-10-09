/*let elemento = document;

elemento =document.title;

console.log(elemento);

let elementoW =window;
console.log(`ELEMENTOS DE WINDOS ${elementoW}`);*/

/*let elementoE = document.styleSheets;

console.log(elementoE);*/

//let elementoId = document.getElementById(`contenido`);
//console.log(elementoId);

/*let opId1 = document.getElementById("p1");
opId1.innerHTML = "JavaScript";

let opId2 = document.getElementById("p2");
opId2.innerHTML = "Kotli";

let opId3 = document.getElementById("p3");
opId3.innerHTML = "Java";
*/
//let elementoClase = document.getElementsByClassName('Lista');
//console.log(elementoClase);

//let elementoTag = document.getElementsByTagName('h2');
//console.log(elementoTag);

//let elementoQ = document.querySelector('ul');
//console.log(elementoQ.childElementCount);
//console.log(elementoQ.children);
//console.log(elementoQ.children[0]);
//console.log(elementoQ.firstElementChild);
//console.log(elementoQ.lastElementChild);
//console.log(elementoQ);

//let elementoClase = document.querySelector('.editores');
//console.log(elementoClase);

//let elementoClase = document.querySelector('#p1');
//console.log(elementoClase);

//let elementoP = document.getElementsByTagName("p");
//let elementoClase = document.querySelector('.editores');
//console.log(elementoP.length);

/*for (let i = 0; i < elementoP.length; i++) {
  console.log(elementoP[i].textContent);
}

elementoP[3].innerHTML = 'pruebaClase'

let opId = document.getElementById('p1');

opId.style.background = 'blue';
opId.style.color = 'red';
opId.style.borderRadius = '8px';
opId.style.width= '250px';
opId.style.height = '20px';
opId.style.textAlign = 'center';
*/
//ver fecha
function verFecha() {
  let fec = document.getElementById("resultado");
  fec.innerHTML = Date();
}

//quitar fecha

function quitarFecha() {
  let Qfech = document.getElementById("resultado");
  Qfech.innerHTML = "ya no se ve la fecha";
}

function temperatura(){

    let numero = parseInt(document.getElementById('dato1').value);

    let calculo = numero-273.5;

    let res1 = document.getElementById('res');
    res1.innerHTML = (`Resultado: ${calculo}`);
    alert(`La conversion es: ${calculo}`);
}