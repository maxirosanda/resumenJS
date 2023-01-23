//Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser)
/*
localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);
let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
//Sessionstorage
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');
let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera2 = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera2); //boolean;
console.log(typeof email);   //string;

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ localStorage.getItem(clave));
}

//Eliminar datos del storage
localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
//localStorage.clear()    //elimina toda la información
//sessionStorage.clear() //elimina toda la información


//Dado que localStorage y sessionStorage son objetos globales, es posible crear y acceder a las claves como si fueran propiedades. Pero esto no es recomendable, porque hay eventos asociados a la modificación del storage cuando se emplea getItem o setItem.

//Guarda una clave
localStorage.numeroPrueba = 5;

//Leer una clave
alert( localStorage.numeroPrueba ); // 5

let clave = 'toString';	 //toString método reservado	
localStorage[clave] = "6"; //No se guarda este dato
*/

//Json
const producto1 = { id: 2, producto: "Arroz" };
//localStorage.setItem("producto1", producto1); // Se guarda [object Object]

const enJSON    = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}
const producto1Recuperado = JSON.parse(enJSON);
console.log(typeof enJSON);     // string
console.log(typeof producto1Recuperado);  // object


//Ejemplos 
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

class Producto {
  constructor(obj) {
      this.nombre  = obj.producto.toUpperCase();
      this.precio  = parseFloat(obj.precio);
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados) productos2.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos2) producto.sumaIva();
console.log(productos2)


let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS != "null") {
    usuario = usuarioEnLS
    console.log(typeof usuarioEnLS)
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}

