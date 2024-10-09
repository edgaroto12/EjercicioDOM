/*Crea una clase Termostato que tenga los atributos temperatura y estado (encendido o apagado).
 Debe tener métodos para subir la temperatura, bajar la temperatura, encender y apagar el termostato, y mostrar el estado actual.*/

/*class Termostato {
  constructor(temperatura, estado) {
    this._temperatura = temperatura;
    this._estado = false;
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

  subirTemperaturaTermostato(){
    console.log(`Mostar temperatura alta, ${this._temperatura}`);
  }

  temperaturaReal(){
    return this._temperatura * this._estado;
  }

  bajarTemperaturaTermostato(){
    console.log(`Mostar temperatura baja, ${this._temperatura}`);
  }

  temperaturaReal(){
    return this._temperatura * this._estado;
  }
}*/
class Termostato {
    constructor() {
        this.temperatura = 20; // Temperatura inicial
        this.estado = 'apagado'; // Estado inicial
    }

    // Método para subir la temperatura
    subirTemperatura(grados) {
        if (this.estado === 'encendido') {
            this.temperatura += grados;
            console.log(`Temperatura aumentada a ${this.temperatura}°C`);
        } else {
            console.log("El termostato está apagado. Enciéndelo para ajustar la temperatura.");
        }
    }

    // Método para bajar la temperatura
    bajarTemperatura(grados) {
        if (this.estado === 'encendido') {
            this.temperatura -= grados;
            console.log(`Temperatura disminuida a ${this.temperatura}°C`);
        } else {
            console.log("El termostato está apagado. Enciéndelo para ajustar la temperatura.");
        }
    }

    // Método para encender el termostato
    encender() {
        this.estado = 'encendido';
        console.log("El termostato está encendido.");
    }

    // Método para apagar el termostato
    apagar() {
        this.estado = 'apagado';
        console.log("El termostato está apagado.");
    }

    // Método para mostrar el estado actual
    mostrarEstado() {
        console.log(`Estado: ${this.estado}, Temperatura: ${this.temperatura}°C`);
    }
}

// Ejemplo de uso:
const miTermostato = new Termostato();
miTermostato.mostrarEstado(); // Estado inicial
miTermostato.encender(); // Encender el termostato
miTermostato.subirTemperatura(5); // Subir temperatura
miTermostato.bajarTemperatura(3); // Bajar temperatura
miTermostato.mostrarEstado(); // Mostrar estado actual
miTermostato.apagar(); // Apagar el termostato
