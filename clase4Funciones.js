
//Clase 4
/*
function saludar() {
  console.log("¡Hola estudiantes!");
}
saludar();

function solicitarNombre(){
  let nombreIngresado   = prompt("Ingresar nombre")
  alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();
*/
/*
function conParametros(parametro1, parametro2) {
  console.log(parametro1 + " " + parametro2);
}
conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”
*/
/*
//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 
*/
/*
function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
console.log(resultado)  // ⇒ 13
*/
/*
function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          break;
      case "-":
          return primerNumero - segundoNumero;
          break;
      case "*":
          return primerNumero * segundoNumero;
          break;
      case "/":
          return primerNumero / segundoNumero;
          break;
      default:
          return 0;
          break;
  }
}
console.log(calculadora(10, 5, "/"));
*/
/*
let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder”
*/
/*
//FUNCIONES ANONIMAS
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )
*/

// FUNCION FLECHA 
/*
const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )
*/
/*
const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)
*/
