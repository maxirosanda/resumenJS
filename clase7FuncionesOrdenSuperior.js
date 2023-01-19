/*
//ejemplo funcion que retorna otra funcion
function mayorQue(n) {
  return (m) => m > n
}

let mayorQueDiez = mayorQue(10)
console.log(mayorQueDiez)
console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false

//ejemplo 2
function asignarOperacion(op) {
  if (op == "sumar") {
      return (a, b) => a + b
  } else if (op == "restar") {
      return (a, b) => a - b
  }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
*/
/*
//Recibir funciones por parámetro
function porCadaUno(arr, fn) {
  for (const el of arr) {
      fn(el)
  }
}
//caso 1
const numeros= [1, 2, 3, 4]
porCadaUno(numeros, console.log)

let total = 0

function acumular(num) {
    total += num
}
//caso 2
porCadaUno(numeros, acumular)
console.log(total) // 10

//caso 3
//Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]
*/
//Métodos de búsqueda y transformación

/*
// 1) El método forEach() es similar al ejemplo porCadaUno anterior. Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:
const numeros = [1, 2, 3, 4, 5, 6]
numeros.forEach( (num)=> {
    console.log(num)
} )

// 2) El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición:

const cursos = [
  {nombre: 'Javascript', precio: 15000},
  {nombre: 'ReactJS', precio: 22000},
  {nombre: 'AngularJS', precio: 22000},
  {nombre: 'Desarrollo Web', precio: 16000},
]


const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined

//si modifico la variable creada a partir del find tambien modifico el array original (quedan atados por que las dos variables apuntan a la misma posicion de memoria)
resultado.nombre = "maxiJS"
console.log(cursos)

// 3) El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. Si no hay coincidencias, retornará un array vacío.
const resultado3 = cursos.filter((el) => el.nombre.includes('JS'))
const resultado4 = cursos.filter((el) => el.precio < 14000)

console.log(resultado3)
console.log(resultado4) 

//si modifico la variable creada a partir del filter tambien modifico el array original (quedan atados por que las dos variables apuntan a la misma posicion de memoria)
resultado3[0].precio = 0
console.log(cursos)

//4 El método some() funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.
console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false

//5) El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función:
const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

//si modifico la nueva variable no modifico el array original
nombres[0] = "maxiJS@"
console.log(cursos)

const actualizado = cursos.map((el) => {
  return {
      nombre: el.nombre,
      precio: el.precio * 1.25
  }
})

console.log(actualizado)
//si modifico la nueva variable no modifico el array original
console.log(cursos)

//6 El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno. 
const total = cursos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

console.log(total) // 53000

// 7) El método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.(Este método es destructivo, es decir, modifica el array sobre el cual se llama.)
const numeros2 = [5, 3, 2, 6, 1, 4]
numeros2.sort((a, b) => a - b);  
//si da positiva el numero b pasa delante del a ,si da negativo el numero b  pasa detras del a ,si da cero el numero a se pone alado del b (si ya estan alado no se mueven)


console.log(numeros2)
numeros2.sort((a, b) => b - a);  

console.log(numeros2)


const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]

items.sort((a, b) => {
  if (a.name > b.name) {
      return 1;
  }
  if (a.name < b.name) {
      return -1;
  }
  // a es igual a b
  return 0;
})
console.log(items)
*/
//ejemplo del posible funcionamiento interno del metodo sort
/*
const sort = (arr,fs) =>{

  let arr3 = []

  for(let i = 0 ; i < arr.length ; i++){

    let arr2 =[arr[i]]
    let contarIguales = 0

    for(let j = 0 ; j < arr.length ; j++){

      let condicion = fs(arr[i],arr[j])

      if(condicion > 0)       arr2.unshift(arr[j])
      else if(condicion < 0)  arr2.push(arr[j])
      else if(condicion == 0) contarIguales++ 

    }

    for(let a = 0; a < contarIguales; a++) arr3[arr2.indexOf(arr[i])+ a] = arr[i] 
        
  }
  
  return arr3
}
let numeros3 = [12,45,1,34,55,0,36,22,17,18,19,19 ,45,3,2,7,65,8899,32,12,67,54,8899]
numeros3 = sort(numeros3,(a,b)=> b - a)
console.log(numeros3)
*/


const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some(producto => producto.nombre === "Harina")
console.log(existe ) // false

const baratos = productos.filter(producto => producto.precio < 100)
console.log(baratos)
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map(producto => producto.nombre)
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]
