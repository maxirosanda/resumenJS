
//Clase 6
/*
// Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];
console.log(arrayE)
*/
/*
//acceso a arrays
const  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;

//reccorrido de arrays
for (let index = 0; index < 5; index++) {
    console.log(numeros[index]);
}
*/
/*
//metodos de Arrays
const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

miArray.push('otro elemento') //agregar un elemento al final
miArray.unshift('otro elemento') //agrega un elemento al principio
//miArray.pop()  // elimina ultimo elemento
//miArray.shift() //elimina primer elemento
//miArray.splice(1, 2)
console.log( miArray.join(",") ) // genera string con los elementos separado por lo que se pasa por parametros en el metodo
const gatos = ["Mishi", "Garfield", "Zuri"]
const miArray2 = miArray.concat(gatos) // une dos arrays en otro array nuevo (el nuevo aray es totalmente independiente al los anteriores)
const miArray3 = miArray.slice(1, 3); //El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.
console.log(miArray3)
console.log( miArray2.indexOf('marca') ) // ⇒ 0
console.log( miArray2.indexOf('Zuri') ) // ⇒ 3
console.log( miArray2.indexOf('Julieta') ) // ⇒ -1
//El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1
console.log( miArray2.includes('marca') ) // ⇒ true
console.log( miArray2.includes('otro elemento') ) // ⇒ true
console.log( miArray2.includes('Julieta') ) // ⇒ false
miArray2.reverse()
console.log( miArray2 ) 
//Cuidado porque el método reverse es destructivo, o sea que modifica el array original, al igual que los métodos para agregar o quitar elementos.
*/
/*
//Ejemplo aplicado: Cargar Array con entradas
//Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
*/
/*
//Ejemplo aplicado: Eliminar cualquier elemento
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Pedro')
console.log(nombres)
*/
//Array de objetos
//Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.
/*
const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });
console.log(array)
*/
/*
//For.. Of
const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
*/


//Ejemplo
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos) {
  producto.sumaIva();
}
  
  console.log(productos)
