/*console.log("Hola Mundo");

let numero1 = 45;
let numero2 = 39;
let estado = true;
let numero3 = 78;
let pi = 3.141617;
pi = 8.56;
let suma, resta, multiplicacion, modulo;
let nulo = null;

console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);
console.log(typeof estado);
//ingreso de datos por el usuario
//numeros entero
//let nu1 = parseInt(prompt("ingrese el primer numero"));
//ingreso datos variables
//let nu2 = parseFloat(prompt("ingrese el segundo numero"));
/*console.log(
  `El primer valor ingresado es: ${nu1} y el segundo valor ingresado es ${nu2}`
);*/
//let s = nu1 + nu2;
//console.log(`La suma  es: ${s}`);
/*suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
modulo = numero1 % numero2;

console.log(suma);

console.log("El primer valor es :" + numero1);
console.log("El segundo valor es :" + numero1);

console.log("La suma de " + numero1 + " y " + numero2 + " es :" + suma);
console.log("La suma de ", numero1, " y ", numero2, " es :", suma);
//con comillas tocidas se llama templey o literaltempley
console.log(`la suma de ${numero1} y ${numero2} es: ${suma}`);
console.log(`la resta de ${numero1} y ${numero2} es: ${resta}`);
console.log(`la multiplicacion de ${numero1} y ${numero2} es: ${multiplicacion}`);
console.log(`la La division modulo de ${numero1} y ${numero2} es: ${modulo}`);

console.log("LA SUMA DE $(numero1) y $(numero2) ES: $(suma)");
console.log("LA SUMA DE $(numero1) y $(numero2) ES: $(suma)");*/

//generacion de numeros aleatorios

/*let alea =Math.floor(Math.random() *5) + 1; 
console.log(alea);
let alea1 =Math.floor(Math.random() * 100) ; 
console.log(alea1);*/
//Estructura If
/*edad = 20;
 if(edad >= 17){
    console.log("ES Menor DE EDAD");
 }else{
    console.log("ES MAYOR DE EDAD");
 }*/

//ejercicio 2
/*let calificacion;

calificacion = parseFloat(prompt("Ingrese Calificacion"));
if (calificacion < 3.0) {
  console.log("REPROBO");
} else if (calificacion > 3.1 && calificacion <=4.0) {
  console.log("El estudiante aprobo");
} else {
  console.log("es muy bueno");
}
let generacion;

generacion = parseInt(prompt("Ingrese4 Año de Nacimiento"));

if(generacion >1983 && generacion >1990){
    console.log("Generacion Perdida");
}else if(generacion >1901 && generacion >1924){
    console.log("Generacion Grandiosa")
}else if(generacion >1925 && generacion >1945){
    console.log("Generacion Silenciosa")
}else if(generacion >1946 && generacion >1964){
    console.log("Generacion Baby Booners")
}else if(generacion >1965 && generacion >1980){
    console.log("Generacion X")
}else if(generacion >1981 && generacion >1996){
    console.log("Generacion Y")
}else if(generacion >1997 && generacion >2012){
    console.log("Generacion Z")
}else if(generacion >2013 && generacion >2025){
    console.log("Generacion Grandiosa")
}
else{
    console.log("Ingrese Año de Nacimientop entre 1983 Y 2025")
}    
//operador ternario
let edad = 18;
//let res = (edad>=18)? "Es mayor de Edad": "Es menor de eadad";
//console.log(res);
if(edad >=0 && edad <=5){
    console.log("Eres un Infante");
}else if(edad>= 6 && edad <=11){
    console.log("Eres un niño");
}else if(edad>= 12 && edad <=17){
    console.log("Eres un ADOLECENTE");
}else if(edad>= 18 && edad <=29){
    console.log("Eres un Joven");
}else if(edad>=30 && edad <=59){
    console.log("Eres un Adulto");
}else{
    console.log("Eres adulto Mayor");
}

if(edad <=5){
    console,log("Eres un Infante");
}else if(edad <=11){
    console.log("Eresun niño");
}else if(edad <=17){
    console.log("Eresun Adolecente");
}else if(edad <=29){
    console.log("Eresun Joven");
}else if(edad <=59){
    console.log("Eresun Adulto");
}else{
    console.log("Eres Adulto Mayor");
}*/

//EJERCICIO EN CLASE

/*let cantidad = parseInt(prompt("Ingrese el valor en pesos"));
let moneda = parseInt(
  prompt("Ingrese el valor  asi: 1 Dolar, 2 Euro, 3 Libra")
);

let Dolar = 4280;
let Euro = 4728;
let Libra = 5106;

switch (moneda) {
  case 1:
    console.log(`La cantidad en dolares es: ${cantidad / Dolar}`);
    break;
  case 2:
    console.log(`La cantidad en Euros es: ${cantidad / Euro}`);
    break;
  case 3:
    console.log(`La cantidad en Libras es: ${cantidad / Libra}`);
    break;
  default:
    console.log("Ingrese una opcion correcta");
    break;
}

let divisa;
let cantidad;
let USD = 4280;
let EUR = 4728;
let GBP = 5601;
let conver;

cantidad = prompt("Ingrese la cantida de pesos");
divisa = prompt("Seleccione n1/EUR, USD/n2, GBP/n3");
conver = divisa.toUpperCase();
switch (conver) {
  case "USD":
    console.log(cantidad / USD);
    break;
  case "EUR":
    console.log(cantidad / EUR);
    break;
  case "GBP":
    console.log(cantidad / GBP);
    break;
    default:console.log("Invalido");
}*/
//Ejercicios CON FOR
//let n = prompt("Introduce un numero positivo");
//let sum = 0;
//for (let i = 1; i<= 0; 1++){
//  sum +=i;

//console.log(`la suma de los numeros del 1 al ${n} es: ${sum}`);
//}

//estructureas repetitivas
/*for(let i = 3; i<=30; i+=3){
    console.log(i);
}

for(let j= 20; j>=1; j-=1){
    console.log(j);
}*/

//otro ejercicio
// tasa de cambio
/*const TASA_EURO = 4728;
const TASA_DOLAR = 4293;
const TASA_LIBRA = 5601;

//opciones de conversion
let cantidad = prompt("digite la cantidad a convertir");

let opcion = prompt("selecione la moneda a la que quier convertir:\n1. Euro(EUR)\n2. Dolar(USD)\n3. Libra esterlina(GBP)");

switch (opcion){
    case"1":
    let euros = cantidad/ TASA_EURO;
    console.log(cantidad + " =" + euros / "euros.");
    break;

    case"2":
    let dolaresa = cantidad/ TASA_DOLAR;
    console.log(cantidad + " =" + dolares / "dolares.");
    break;

    case"3":
    let libras = cantidad/ TASA_LIBRA;
    console.log(cantidad + " =" + libras / "libras esterlinas.");
    break;

    default:
    console.log("Opcion Invalida")
    break;
}

let tabla = 4;
for(let i =1; i<=10; i++){
    console.log(`${tabla}*${i} = ${(tabla*i)}`);
}
console.log("______________________________________");*/

//let tabla;
//tabla = parseInt(prompt("Ingrese la tabla a multiplicar"));
//for (let t = 1; t <= 10; t ++){
//console.log (`${tabla} X ${t} = ${tabla}*t`);
//}
/*
let J = 20;
for(let i =1; i<=10; i++){
    console.log(`${J}*${i} = ${(J*i)}`);
}
//sentencia for incremento
/*for (let i=3; i<=30; i+=3){
    console.log(i);
}

//decremento
for (let j= 20; j>=1; j--

){
    console.log(j);
}

for(let j= 20; j >=1; j-=2){
    console.log(j);
}*/

/*let n = parseInt(prompt("Introduce un numero positivo:"));
let sum = 0;

for(let i =1; i <= 4; i++){
    sum +=n;
}
console.log(`la suma de los numeros del 1 al ${n} es: ${sum}`);*/

//let tabla = parseInt(prompt("INGRESE EL NUMERO DE LA TABLA"));
//for(let i=1; i<=10; i++){
//console.log(`${tabla} * ${i} = ${(tabla*i)}`);
//}
/*let t;
for (let t = 1; t <= 10; t++) {
    console.log("------------------------------------");
  for (let i = 1; i <= 10; i++) {
    console.log(`${t} x ${i} = ${(t*i)}`);
  }
}

//otra forma e tablas de multiplicar
//let tabla = 1;
for (let i = 1; i <= 10; i++) {
  console.log(`LA TABLA DEL ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    //console.log(`${n} * ${j} = ${n * j}`);
  }
  console.log(" ");
}*/

//realizar la suma de 100 primeros numeros impares

/*let suma = 0;
let contador = 0;
for (let i = 1; contador < 100; i += 2) {
  suma += i;
  contador++;
}
console.log(`La suma de los 100 primero numeros impares es igual A: ${suma}`);*/

//CLASE 19-109-2024

//DO WHILE

//CALCULAR EL AREA DE UN CIRCULO , CUADRADO, TRIANGULO
//Area circulo A= pi*pi
///Area cuadrado A=l*l
//area del triuangulo A = (B*H)/2

/*let ac, acu, at;
let r, lado, b, h;
const pi = 3.1416;
let opcion;
estado = true;
do {
  opcion = parseInt(
    prompt(
      `1. Area del circulo \n 2. Area del cuadrado \n 3. Area del triangulo \n 4. Salir`
    )
  );
  switch (opcion) {
    case 1:
      alert("Area del circulo");
      //A =pi * r*r
      r = parseFloat(prompt("Ingrese el valor del radio"));
      ac = pi * (r * r);
      alert(`El area del circulo es : ${ac}`);
      break;

    case 2:
      alert("Area del cuadrado");
      //A = l*l

      lado = parseFloat(prompt("Ingrese el valor del lado"));
      acu = lado * lado;
      alert(`El area del cuadrado es : ${acu}`);

      break;

    case 3:
      alert("Area del triangulo");
      //A = B*H/2
      b = parseFloat(prompt("Ingrese el valor de la base"));
      h = parseFloat(prompt("Ingrese el valor del altura"));

      at = (b * h) / 2;
      alert(`El area del triangulo es : ${at}`);
      break;

    case 4:
      alert("Saliendo");
      //estado = false;
      break;
    default:
      alert("Opcion no valida");
  }
} while (opcion != 4);*/

//CLASE DEL 23-09-2024
//FUNCIONES
/*
saludar("Juan carlos");
function saludar(nombre){
  alert(`hola ${nombre}`);
}

function raiz(numero){
  return Math.sqrt(numero);
}
console.log(raiz(50));*/

//ejemplo 2

/*console.log (raiz(18));
function raiz(numero) {
  return Math.sqrt(numero);
  
}*/

//ejemplo3

/*const a = 2;
const b = 3;
function exponente(base, cuadrado) {
  return Math.pow(base, cuadrado);
}
console.log(`El cuadrado es: ${exponente(a, b)}`);*/

//OTRO CASO
/*let opcion;
let estado = true;
let n1, n2, sum, res, ra;

n1 = parseInt(prompt("Ingrese el primer valor"));
n2 = parseInt(prompt("Ingrese el segundo valor"));

while (estado) {
  opcion = parseInt(prompt(`1. suma \n 2. resta \n 3. Raiz \n 4. Salir`));

  switch (opcion) {
    case 1:
      console.log("suma");
      alert(`La suma es: ${suma(n1, n2)}`);

      break;
      
      case 2:
      console.log("resta");
      //resta = n1 - n2;
      alert(`La resta es: ${resta(n1, n2)}`);

      break;
      case 3:
      console.log("Raiz de N1");
      //ra = Math.sqrt(n1);
      alert(`La raiz es: ${(raiz(Math.sqrt(n1)))}`);

      break;
      case 4:
      estado = false;
      break;

      

    default:
      alert("Opcion no existe");
      
  }
}

function suma(n1, n2) {

  return n1 + n2;

}
function resta(n1, n2) {

  return n1 - n2;

}
function raiz(n1, n2) {

  return Math.sqrt(n1);

}*/

//let nombre = "juan"
//console.log(saludar(nombre));
//saludar("Pedro");
//function saludar(nombre){
//alert(`Hola $(saludar)`);
//return nombre;
//}

/*function raiz(numero){
  return Math.sqrt(numero);
}
console.log(raiz(18));
//temperaturas*/

/*let k, c, f;
let kc, kf, fc, fk, ck, cf;
let opcion;

do {
  opcion = parseInt(
    prompt(
      "desea realizar la conversion de \n 1. Kelvin a celcius \n 2. kelvin a fahrenheit \n 3. farehrenheit a celcius \n 4. farehrenheit a kelvin"
    )
  );

  switch (opcion) {
    case 1:
      alert("Kelvin a celcius");
      // C = K - 273.15
      k = parseFloat(prompt("Ingrese el valor de KEVIN"));
      //KC = K -273.15

      alert(`la conversion de kelvin a celcius es: ${kcf}ºC`);

      break;

    case 2:
      alert("Kelvin a Fahrengeit");
      // F = (K-273.15)*9/5+32
      k = parseFloat(prompt("Ingrese el valor de KEVIN"));
      //KC = K -273.15
      kf = ((k - 273.15) * 9) / (5 + 32);

      alert(`la conversion de kelvin a Fahrengeit es: ${kf}ºF`);

      break;
    case 3:
      alert("Fahrengeit a  celcius");
      // c = (F-32)*5/9
      f = parseFloat(prompt("Ingrese el valor de Fahrengeit"));

      kc = ((f - 32) * 5) / 9;

      alert(`la conversion de Fahrengeit a celciuses: ${fc}ºF`);

      break;
    case 4:
      alert("Fahrengeit a Kelvin");
      // (F-32) * 5/9 +273.15
      f = parseFloat(prompt("Ingrese el valor de Fahrengeit"));

      fk = ((f - 32) * 5) / 9 + 273.15;

      alert(`la conversion deFahrengeit a Kelvin es: ${fk}ºF`);

      break;
    case 5:
      alert("Celcius a Kelvin");
      // K-C +273.15
      c = parseFloat(prompt("Ingrese el valor en celcius"));

      ck = c + 273.15;

      alert(`la conversion de celcius a Kelvin es: ${ck}ºF`);

      break;
    case 6:
      alert("celcius a Fahrengeit ");
      // f=C * (9/5)+ 32
      c = parseFloat(prompt("Ingrese el valor en celcius"));

      ck = (c * 9) / 5 + 32;

      alert(`la conversion de celcius a fahrengeit es: ${cf}ºF`);

      break;

      alert("oPCION nO vALIDA");
  }
} while (opcion !== 7);
function kcf(kelvin, operacion) {
operacion = 273.15
return kelvin - operacion
}*/
/*function k() {
  let valor;
  valor = parseFloat(prompt("Ingrese el valor Kelvin"));
  return valor;
}
function f() {
  return parseFloat(prompt("Ingrese el valor fahrenheit"));
}
function c() {
  return parseFloat(prompt("Ingrese el valor Celcius"));
}*/

//OTRA FORMA DEL DO WHILE

/*let cantidad = parseInt(prompt("Que cantidad de dinero desea cambiar"));
let opcion = prompt(
  "Seleccione la moneda a convertir: \n 1. Euro (EUR) \n 2. Dolar (USD) \n3. Libra Esterlina (GBP)"
);
const TASA_DOLAR = 4280;
const TASA_EURO = 5728;
const TASA_LIBRA = 4728;
//Solicitar la cantidad a convertir

switch (opcion) {
  case 1:
    console.log(euros);
    alert(
      ` EL VALOR INICIAL ES: ${cantidad} y la conversion es: ${euros(cantidad)}`
    );
    break;

  case 2:
    console.log(dolares);
    alert(
      ` EL VALOR INICIAL ES: ${cantidad} y la conversion es: ${dolares(
        cantidad
      )}`
    );
    break;
  case 3:
    console.log(libras);
    alert(
      ` EL VALOR INICIAL ES: ${cantidad} y la conversion es: ${libras(
        cantidad
      )}`
    );
    break;

  default:
    alert("Opcion Invalida");
}

function dolares(cantidad) {
  return cantidad / TASA_DOLAR;
}
function euros(cantidad) {
  return cantidad / TASA_EURO;
}
function libras(cantidad) {
  return cantidad / TASA_LIBRA;
}

//ARREGLOS

/*
//recoger para llenarlo
//push es para agregar datos al arreglo
for (let i = 0; i < 5; i++) {
  vector.push(i + 1);
}

for (i = 0; i < 5; i++) {
  console.log(vector[i]);
}//SUMAR NUMEROS DEL ARREGLO

let numeros = [12,23,88,16,19];
let suma = 0;

for(let i = 0; i < numeros.length; i++){
   suma += numeros[i];
}
console.log(`La suma es: ${suma}`);

//foreach
numeros.forEach((num) => {
  suma += num;
});
console.log(`la suma es ${suma}`);*/

//ARREGLOS

/*let estudiantes=["Laura", "Juliana", "Andres", "Oscar", "Paola"];
console.log (estudiantes);
//añadir un elemento al final

//push recibe parametros
console.log (estudiantes.push("Ricardo"));
console.log(estudiantes);
//agregar elemntos al inicio

//unshift recibe un parametro
console.log(estudiantes.unshift("Esmeralda"));
console.log(estudiantes);
//añadir une elemento en alguna posicion
//splice funcion recibe tres parametros
console.log(estudiantes.splice(2 , 0 , "sofia"));
console.log(estudiantes);
//eliminar ultimo //funcion pop permite borrar un elemento
console.log(estudiantes.pop());
console.log(estudiantes);
//eliminar el elemento en una posicion
//2 sig. numero elementos a partir de estaposicion 1. cantidad a partir de hay
console.log(estudiantes.splice(2, 1));
console.log(estudiantes);
//eliminar el primer elemento
console.log(estudiantes.shift());
console.log(estudiantes);
//posicion de un elemento
console.log(estudiantes.indexOf("Andres"));


//recorrer el arreglo con forEach

//op 1

estudiantes.forEach((est) =>{
  if (est === estudiantes[3]) {
    console.log(est)
    
  }

 
});*/

//otro ejemplo

/*let vector = [];

vector[0] = 15;
vector[1] = 63;
vector[2] = 40;

console.log(vector);
//rrecorre para llenarlo
for(let i = 0; i< 5; i++){
  vector.push(i);
}
//recorro para mostrar
for(let i = 0; i < 5; i++){
  console.log(vector[i])
}
*/
  

//PARA COPIAR E IMPRIMIR

//FUNCION FLECHA
/*let multiplicacion = (a,b)=>{
  return a*b;
}
console.log(multiplicacion(6,3));

//forma 2
let multiplicacion1 = (a,b)=>a*b

console.log(multiplicacion(5,3));
  
//Forma Tradicional
function raiz (numero){
  return Math.sqrt(numero);
}

//forma Fleha
console.log(raiz(25));
let ra = (numero) => Math.sqrt(numero);
console.log(ra(36))

//otro elemplo

let funcion = () => console.log("Hola soy una funcion sin parametros");
funcion();*/

let numeros =[12, 23, 18, 16, 19];
let suma = 0;
//length identifica el numero de los arreglos
for(let i = 0; i < numeros.length; i++){
  suma += numeros [i];
}
console.log(`La suma es. ${suma}`);
 //con forEach
numeros.forEach(nu => {
  suma += nu;
});
console.log(`La suma es: ${suma}`);