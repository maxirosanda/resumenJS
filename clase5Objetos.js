
// Clase 5
/*
let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])
persona1["nombre"] = "Marge"
persona1.edad = 36
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
*/
/*
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad 	 = edad;
  this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
*/
/*
function Persona(literal) {
  this.nombre = literal.nombre;
  this.edad   = literal.edad;
  this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });
*/
/*
// Métodos en objetos JS
let cadena = "HOLA CODER";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());
// Metodos
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/
//clases en js
/*
class Persona{
  constructor(nombre, edad, calle) {
      this.nombre = nombre;
      this.edad   = edad;
      this.calle  = calle;
  }
  hablar(){
      console.log("HOLA SOY "+ this.nombre);
  }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();

class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
  vender() {
      this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
console.log(producto1.vendido)
console.log(producto1.precio)
console.log(producto2.precio)
*/
