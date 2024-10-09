//let apell = null;
//apell = "Edgar Gomez";
//console.log(apell);

//escribe un script que dado un mumero nos devuelva true si es par o false si e simpar
/*let num = parseInt(prompt("Ingresar Numero Entero"));
let res = num%2;
let par = res==0;
console.log("¿Es Par? " + par);*/

//ejercicio aplicados switc case

/*let menu = prompt("Seleccione la opcion del menu: Carne, Pescado o Ensalada");
switch(menu){
    case "carne": console.log(`Ha pedido ${menu}, desea tomar vino tinto?`);
    break;
    case "pescado": console.log(`Ha pedido ${menu}, desea tomar vino blanco?`);
    break;
    case "ensalada": console.log(`Ha pedido ${menu}, desea tomar agua?`);
    break;

    default: console.log("seleccione entre carne, pescado o ensalada");

    
};

//otra forma LA PALABRA toLowerCase()me permite escribir en mayusculas o minusculas

let menu = prompt("Elija el menu: \n Carne - Pescado - Ensalada").toLowerCase();
switch(menu){
    case "carne": console.log("Su bebida sera vino tinto");
    break;
    case "pescado": console.log("Su bebida sera vino blanco");
    break;
    case "ensalada": console.log("Su bebida sera agua");
    break;

    default: console.log("seleccione entre carne, pescado o ensalada");

    
};

//otra forma

let menu, bebida;
switch(menu = prompt("Tipo de menu: \n carne, \n pescado, \n ensalada").toLowerCase()){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
            bebida = "¿Desea beber vino blanco?";
        break;
    case 'ensalada':
                bebida = "¿Desea agua?";
        break;
    }
alert(bebida);//alert me permite imprimir sin consola con otro dialogo

let nMes, estacion;
nMes = parseInt(prompt("Indica el numero del mes 1 al 12"));
switch (nMes) {
  case 12:
  case 1:
  case 2:
    estacion = "Invierno";
    break;

  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;

  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;

  case 9:
  case 10:
  case 2:
    estacion = "Otoño";
    break;

  case 11:
  case 1:
  case 2:
    estacion = "Desconocida";
    break;
}
alert("La estacion del año es "+estacion);*/

//CLASE DEL 17-09-2004

/*for (let i =1; i<=10; i++){
  console.log(i);
}
//while
console.log ("-------------------------");
let numero = 1;
while(numero <= 10){
  console.log(numero)
  numero++;
}
let n= parseInt(prompt("Introduce un numero positivo"));
let sum = 0;

for (let i = 1; i<= n; i++){
    sum +=i;


}
console.log(`la suma de los numeros del 1 al ${n} es: ${sum}`);

let m= parseInt(prompt("Introduce un numero positivo"));
let suma = 0;

for (let i = 1; i<= m; i++){
    suma +=i;


}
console.log(`la suma de los numeros del 1 al ${m} es: ${suma}`);*/

// CLASE 18-09-2024

/*let opcion;

let estado = true;

let coseno, seno, raiz, numero;

// opciones realizar un calculo matematic

// 1. Raiz
// 2. Seno
// 3. Coseno

while(estado){

opcion = (parseInt(prompt(`SELECCIONE UN OPCION \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno N1 \n 4. Salir`)));

switch(opcion){

  case 1: alert("Selecciono Raiz");

  numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR LA RAIZ`)));
   
  raiz = Math.sqrt(numero);

  alert(`LA RAIZ DE ${numero} ES: ${raiz}`);

  break;
case 2 : alert("Selecciono Seno N1");

  numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL SENO`)));
   
  seno = Math.sin(numero);

  alert(`EL SENO DE ${numero} ES: ${seno}`);

  break;

  case 3 : alert("Selecciono Coseno N1");

  numero = (parseFloat(prompt(`INGRESE EL NUMERO PARA CALCULAR EL COSENO`)));
   
  coseno = Math.cos(numero);

  alert(`EL COSENO DE ${numero} ES: ${coseno}`);

  break;

  case 4: alert("SALIENDO....")
  estado = falso;
  break;
default:
    alert("LA OPCION NO EXISTE");

 
}
}

//adivinar el numero
//let alea =Math.floor(Math.random() *5) + 1; 
 const aleatorio = Math.floor(Math.random()*50)+1;
 let estado = false;

 while(estado){

 }*/

//REPASO CLASE HASTA HOY

/*5 opcion = parseInt(prompt("1. consignar \n 2. retirar \n 3. consultar saldo"));
 if(opcion ---1){
  alert("VAS A REALIZAR UNA CONSIGNACION");

  
 }else if(Opcion ---2){
  alert("VAS A REALIZAR UN RETIRO");

 }

//OPCION 2 ADIVINAR UN NUMERO

const Aletorio = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let estado = false;

while (!estado) {
  let userGuess = parseInt(prompt("Adivina unnumero entero entre 1 y 50"));
  intentos++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
    alert("Por favor, introduce un numero entre 1 y 50.");
    continue;
  }

  switch (true) {
    case userGuess < Aletorio:
      alert("Demasiado bajo, intente de nuevo");

      break;

    case userGuess > Aletorio:
      alert("Demasiado alto, intente de nuevo");

      break;

    case userGuess-- - Aletorio:
      alert(
        `¡Felicitaciones Adivinaste el numero ${Aletorio} en ${intentos} intentos.`
      );

      estado = true;

    default:
      break;
  }
} */
//OTRA FORMA DE ADIVINAR UN NUMERO
let aleatorio = Math.floor(Math.random() * 50) + 1;
let numeroUsuario = 0;

while (aleatorio !== numeroUsuario) {
  numeroUsuario = parseInt(prompt("Adivina un numero entre 1 y 50"));

  if (numeroUsuario < aleatorio) {
    alert("No, el numero generado es mayor.");
  } else if (numeroUsuario > aleatorio) {
    alert("No, el numero generado es menor");
  } else {
    alert("Felicitaciones, adivinaste el numero");
  }
}

/*let opcion = parseInt(prompt("1. consignar \n 2. retirar \n 3. consultar saldo"));
switch(opcion){
  case 1:

  alert("vas a consignar");

  break;

  case 2: 

  alert("VAS RETIRAR");

  break;

  case 3: 

  alert("VAS A CONSULTAR EL SALDO");
  break;



  default: 
  alert("tRASFERENCIA NO ENCONTRADA");
}

//CICLO FOR

let opcion, suma =0;
for(let i = 1; i<=50; i++){
  suma= suma +1;
  suma += i;
}

alert(suma);


//WHILE MIENTRAS QUE cuantas veces se repite algo
//resumen general clase 
// Comentarios

/*

Comentarios multilinea

*/

// Variables

/*

var 

let

const

*/
/*
let numero = 5;

numero = 15;

numero = 45;

console.log(numero);


let decimal = 12.5;

decimal = 25.6;

decimal = 15.7;

console.log(decimal);

let estado = true; 

estado = false;

console.log(estado);

const direccion = "cra 15-2-63";

console.log(direccion);

const pi = 3.141516;

console.log(pi);
let opcion1, opcion2, suma;


opcion1 = parseInt(prompt("Ingrese numero1 positivo")); 
opcion2 = parseInt(prompt("Ingrese numero2 positivo")); 

suma = opcion1 + opcion2;

alert(suma);
*/

// Estructuras condicionales if - else
/*
let opcion = parseInt(prompt("1. Consignar \n 2. Retirar \n 3. Consultar Saldo"));


switch (opcion) {

    case 1:

        alert("Vas a cosignar");

        break;

    case 2:

        alert("Vas a retirar");

        break;
case 3:

        alert("Vas a consultar el saldo");

        break;

    default:

        alert("Transaccion no encontrada");


}
if(opcion === 1){

    alert("VAS A REALIZAR UNA CONSIGNACION");

}else if(opcion === 2 ){

    alert("VAS A REALIZAR UN RETIRO");

}else if(opcion === 3 ){

    alert("VAS A CONSULTAR EL SALDO");

}else{

    alert("OPERACION NO ENCONTRADA");

}
// Ciclo FOR

// let opcion,suma=0;

// for(let i = 1; i <= 7; i++){

//    suma = suma + i;

   
// }

// alert(suma);
Producciones Culturales
8:49 p.m.
y no pueden subir la calidad del video, y profe este repaso queda grabado donde
William Alexander Matallana
8:49 p.m.
let user="wamp";
let password = "1234";


let op1,op2

op1 = prompt("Ingrese su usuario"); 
op2 = prompt("Ingrese su contraseña");

if(user === op1 && password === op2){
    alert("Inicio de sesion")
    
}else{
    alert("No coinciden los datos");
}

//CLASE DEL 17/09/2024
// While - Mientras que 

//SOLUCION 1
let n = 1;
let sum=0;

while(n > 0){
n = parent(prompt("Ingrese un munero positivo para sumarlos e ingrese un numero negativo para salir"));
sum += n;
console.log(sum);
}

console.log(`La suma de los numeros ingresados es: ${(sum+(n * -1))}`);

//SOLUCION 2

let n1 = 1;
let sum=0;

while(n1 > 0){
n1 = parent(prompt("Ingrese un munero positivo para sumarlos e ingrese un numero negativo para salir"));
if(n1>0){
  sum += n1;
}

console.log(sum);
}

console.log(`La suma de los numeros ingresados es: ${(sum)}`);

//SOLUCION 3

let num2;
ley sum2=0;

while((num2 = parseInt(prompt("Ingrese un numero positivo: ")))>0){
sum2 +=num2;
console.log(sum2);

}
console.log("La suma total es:", sum2);



let numpos = 0;
let numneg = 0;
let numero;

let estado = true;

while(estado){

    numero = parseInt(prompt("Ingrese numero"));

    if(numero > 0 ){
        numpos += numero;

        alert(`LA SUMA DE LOS POSITIVOS ES: ${numpos}`);

    }else if(numero < 0){
        numneg+= numero;
        alert(`LA SUMA DE LOS NEGATIVOS ES: ${numneg}`);
       

    }else{
        estado = false;
    }

   
    }*/


    