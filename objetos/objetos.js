let carro1 = {
    marca: "Ford",
    modelo: "Fiesta",
    color: "Rojo",
    anio:"2018",
    placa: "ABC123"
}

let carro2 = {
    marca: "Renault",
    modelo: "Logan",
    color: "Azul",
    anio:"2019",
    placa: "XYZ123",
    acelerar(){
        return("El carro 2 esta acelerando")
    }
}

console.log("Datos Carro 1" , carro1);
console.log("Datos Carro 2" , carro2);

console.log(`LA MARCA DEL VEHICULO 1 ES: ${carro1.marca}`);
console.log(`LA MARCA DEL VEHICULO 2 ES: ${carro2.marca}`);

carro1.marca = "Toyota";
carro1.color = "Gris";

console.log("Los datos del vehiculo1 son: ", carro1);
console.log("El carro dos esta acelerando");

console.log(carro2.acelerar());*/

lass Persona{
//la estructura para  las variables es camelCase y para las clases es PascalCase Primera em mayusculas y en adelantye
    constructor(nombre, edad){

        this._nombre = nombre;
        this._edad = edad;

    }


    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = this.nombre;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = this.edad;
    }

//creo funcion
    saludar(){
        console.log(`Hola soy ${this._nombre} Y TENGO ${this._edad} años`);
    }


}
//creo objeto de clase persona
const per1  = new Persona("Juan", 25);

per1.saludar();

const per2 = new Persona("Andres", 28);


per1.nombre = "Lorena";


per2.edad = 45;

//adsecer a la funcion saludar
per1.saludar();

per2.saludar();
*/

class Libro {
  constructor(titulo, autor, paginas) {
    this._titulo = titulo;
    this._autor = autor;
    this._paginas = paginas;
  }
  get titulo() {
    return this._titulo;
  }
  get autor() {
    return this._autor;
  }
  get paginas() {
    return this._paginas;
  }
  set titulo(titulo) {
    this._titulo = titulo;
  }
  set autor(autor) {
    this._autor = autor;
  }
  set paginas(paginas) {
    this._paginas = paginas;
  }

  mostrarInfo() {
    console.log(
      `El titulo del libro es: ${this._titulo} el autor es: ${this._autor} y tiene ${this._paginas}`
    );
  }
}
const l1 = new Libro("El relato de un naufragio", "Pepito", "230");
const l2 = new Libro("El principito", "Dario", "280");
const l3 = new Libro("El programador", "Mario", "130");

console.log(l1.titulo)
console.log(l2.titulo)
console.log(l3.titulo)

l1.autor = "Carlos";
l2.autor = "Pablo";
l3.autor = "Ana";

l1.mostrarInfo()
l2.mostrarInfo()
l3.mostrarInfo()
*/

/*class Producto {
  constructor(nombre, precio, cantidad) {
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  mostrarNombreProducto(){
    console.log(`El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`);
  }

  valorTotal(){
    return this._precio * this._cantidad;
  }

  modificarCantidad(nuevaCantidad){
    this._cantidad = nuevaCantidad;
    console.log(`La nueva cantidad es: ${this._cantidad}`);
  }

  //modificarStock(nuevaCantidad){
    //return this._cantidad += nuevaCantidad;
  //}
anadirStock(nuevaCantidad){
  return this._cantidad +=(nCantidad)
}


}venderStock(nuevaCantidad){
  return this._cantidad -=(nuevaCantidad);
}

crearProducto(){
  let productos;
  let precios;
  let cantidades;
  //let nCantidad;
  productos = prompt("ingrese el nombre del producto");
  precios = parseFloat(prompt("ingrese el precio del producto"));
  cantidades = parseFloat(prompt("ingrese la catidad del producto"));

  return new Producto(productos, precios, cantidades);
}




//creo objeto de clase
const prod1 = new Producto("mouse",45000, 5);
const prod2 = new Producto("Monitor", 1450000, 3);
//const prod3 = new Producto(productos, precios,cantidades);

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();

console.log(`El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(`El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(`El valor del producto 3 es: ${prod2.valorTotal()}`);

nCantidad = parseFloat(prompt("Ingrese la nueva cantidad"));

let op  = parseInt(prompt("Ingrese la operacion desea realizar 1. añadir"));
if(op===1){
  console.log(prod3.anadirStock(ncantidad));
}else{
  console.log(prod3.venderStock(nCantidad));
}


prod1.modificarCantidad(8);
prod2.modificarCantidad(6);
//prod3.modificarCantidad(ncantidade);

//console.log(prod3.modificarStock(ncantidad));
console.log(prod3.anadirStock(ncantidad));
console.log(prod3.venderStock(ncantidad));

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();

console.log(`El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(`El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(`El valor del producto 3 es: ${prod3.valorTotal()}`);
*/
  class Producto {
  constructor(nombre, precio, cantidad) {
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  get cantidad() {
    return this._cantidad;
  }

  set cantidad(cantidad) {
    this._cantidad = cantidad;
  }

  mostrarNombreProducto() {
    console.log(
      `El nombre del producto es: ${this._nombre}, el precio es: ${this._precio} y la cantidad es: ${this._cantidad}`
    );
  }
  valorTotal() {
    return this._precio * this._cantidad;
  }

  modificarCantidad(nuevoCantidad) {
    this._cantidad = nuevoCantidad;

    console.log(`La nueva cantidad es: ${this._cantidad}`);
  }

  anadirStock(nuevoCantidad) {
    return (this._cantidad += nuevoCantidad);
  }
  venderStock(nuevoCantidad) {
    this._cantidad -= nuevoCantidad;
  }

  operacion() {
    let nCantidad;
    nCantidad = parseFloat(prompt("Ingrese la nueva cantidad"));

    let op = parseInt(
      prompt("Ingrese que tipo de operacion desea realizar 1. Añadir 2. Restar")
    );

    if (op === 1) {
      console.log(prod3.anadirStock(nCantidad));
    } else {
      console.log(prod3.venderStock(nCantidad));
    }
  }
  static crearProducto() {
    let productos;
    let precios;
    let cantidades;

    do{
      productos = prompt("Ingrese el nombre del producto");
    }while(!productos);//!es una negacion

    do{
      precios = prompt("Ingrese el precio del producto");
    }while(isNaN(precios) || precios <= 0);

    do{ //do=ahage esto una vez mientras la condicion se cumpla
      cantidades = parseFloat(prompt("Ingrese la cantidad del producto"));
    }while(isNaN(cantidades || cantidades <=0));

    productos = prompt("Ingrese el nombre del producto");
    precios = parseFloat(prompt("Ingrese el precio del producto"));
    cantidades = parseFloat(prompt("Ingrese la cantidad del producto"));

    return new Producto(productos, precios, cantidades);
  }
}
const prod1 = new Producto("Mouse", 45000, 5);
const prod2 = new Producto("Monitor", 1450000, 3);

const prod3 = Producto.crearProducto();

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();
console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);

prod3.operacion();

prod1.modificarCantidad(8);
prod2.modificarCantidad(6);
//prod3.modificarCantidad(nCantidad);

prod1.mostrarNombreProducto();
prod2.mostrarNombreProducto();
prod3.mostrarNombreProducto();
console.log(` El valor del producto 1 es: ${prod1.valorTotal()}`);
console.log(` El valor del producto 2 es: ${prod2.valorTotal()}`);
console.log(` El valor del producto 3 es: ${prod3.valorTotal()}`);


class Termostato {
  constructor(temperatura, estado) {
    this._temperatura = temperatura;
    this._estado = apagado;
  }

  get temperatura() {
    return this._temperatura;
  }
  set temperatura(temperatura) {
    this._temperatura = temperatura;
  }

  get estado() {
    return this._estado;
  }
  set estado(estado) {
    this._estado = estado;
  }


  subirTemperatura(grados) {
    if (this.estado === 'encendido') {
        this.temperatura += grados;
        console.log(`Temperatura aumentada a ${this._temperatura}°C`);
    } else {
        console.log("El termostato está apagado. Encender ajustar la temperatura.");
    }
}

  bajarTemperatura(grados) {
  if (this._estado === 'encendido') {
      this._temperatura -= grados;
      console.log(`Temperatura disminuida a ${this._temperatura}°C`);
  } else {
      console.log("El termostato está apagado. Encender ajustar la temperatura.");
  }
  }

// Método para encender el termostato
encender() {
  this._estado = 'encendido';
  console.log(" termostato  encendido.");
} 

// Método para apagar el termostato
apagar() {
  this._estado = 'apagado';
  console.log(" termostato  apagado.");
}

// Método para mostrar el estado actual
mostrarEstado() {
  console.log(`Estado: ${this._estado}, Temperatura: ${this._temperatura}°C`);
}
  
}
