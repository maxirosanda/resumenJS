let num = 10
console.log(num)
// aumentar en 1 el valor
num = num + 1
console.log(num)
// primera simplificacion
num += 1
console.log(num)
// o bien
num++
console.log(num)

let temperatura = 31
temperatura > 30 ? console.log("Día caluroso!") : console.log("Día agradable")

//El operador ternario ofrece un return implícito para cada caso.Esto es muy útil cuando queremos retornar valores de forma condicional, lo cual con una estructura tradicional sería más extenso. Por ejemplo.

// declaramos y asignamos condicionalmente
const usuario = {nombre:"Alan",edad:18}
const permiso = (usuario.edad >= 18) ? true : false

// mostramos el mensaje
permiso ? console.log("Puede comprar cerveza") : console.log("No puede comprar")

const carrito = []
// con operador AND
carrito.length === 0 && console.log("El carrito está vacío!")
//En el caso de que la condición resulte falsa, el operador AND retornará false en cambio:
const registroIngreso = usuario.edad >= 19 && new Date()

console.log(registroIngreso)

//Operador lógico or (si no es falsy osea no es 0, null, undefine, string vacio, Nan, false retorna el primer operador de lo contrario regresa el segundo)

console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy


//ejemplo
const usuario1 = {
  nombre: "John Doe",
  edad: 14
}
const usuario2 = null

console.log( usuario1 || "El usuario no existe" )
// { nombre: 'John Doe', edad: 14 }

console.log( usuario2 || "El usuario no existe" )
// El usuario no existe

const carrito2 = JSON.parse(localStorage.getItem('carrito')) || []
console.log(carrito2)

//Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’. En este caso, sólo obtenemos nullish en dos casos:
console.log( 0 ?? "Nullish")  // 0
console.log( 40 ?? "Nullish")  // 40
console.log( null ?? "Nullish")  // Nullish
console.log( undefined ?? "Nullish")  // Nullish
console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
console.log( "" ?? "Nullish")  // ""
console.log( NaN ?? "Nullish")  // NaN
console.log( true ?? "Nullish")  // true
console.log( false ?? "Nullish")  // false

const usuario3 = {
  nombre: "John Doe",
  edad: 22,
  cursos: {
    javascript: "aprobado"
  }
}

console.log( usuario3?.cursos?.javascript || "La propiedad no existe")
// "aprobado"
console.log( usuario3?.trabajos?.coderhouse || "La propiedad no existe")
// "La propiedad no existe"


//Desestructuración

//Es decir, los nombres de las variables deben coincidir exactamente con los nombres de las propiedades que queremos obtener del objeto. Si intentamos desestructurar una propiedad inexistente en el objeto, obtendremos undefined.

const usuario4 = {
  nombre: "John Doe",
  edad: 32
}

const { nombre, edad,telefono } = usuario4

console.log(nombre) // "John Doe"
console.log(edad) // 32
console.log(telefono)

//Si queremos acceder a propiedades más internas dentro de un objeto, es decir desestructurar alguna propiedad que sea a la vez un objeto, es posible hacerlo siguiendo el mismo patrón.

const usuario5 = {
  nombre: "John Doe",
  edad: 32,
  telefono: {
      cel: 113334444,
      casa: null,
      trabajo: 113325555
  }
}


const { nombre:nombre2, telefono: {trabajo} } = usuario5

console.log(nombre2) // "John Doe"
console.log(trabajo) // 113325555

//Desestructuración en parámetros
const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500
}

// desestructurando lo que reciba por parámetro
const desestructurar = ( {id, nombre} ) => {
  console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript

window.addEventListener('click', ( {x, y} ) => {
  console.log(x, y)
})

//Desestructuración de arrays
//Es posible desestructurar arrays de forma similar, usando corchetes [] en vez de llaves. La diferencia con la desestructuración de objetos es que la de arrays es posicional.
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

const [a, b] = nombres

console.log(a) // "Juan"
console.log(b) // "Julieta"

//No funciona aquí la coincidencia por nombres, sino que se toman los valores según la posición. Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array. 

// omito las dos primeras posiciones
const [,, c, d] = nombres

console.log(c) // "Carlos"
console.log(d) // "Mariela"

//Spread de arrays

// spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela

// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela")

//También podemos hacer spread de un array dentro de otras estructuras que lo admitan. Esto nos permite, por ejemplo, replicar el contenido de un array dentro de otra estructura al desparramar su contenido dentro. 

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombresUnidos = [...nombres1, ...nombres2]

console.log(nombresUnidos) // ["Juan", "Julieta", "Carlos", "Mariela"]

//si lo hacemos dentro de un objeto veremos algo interesante, que cada propiedad toma como nombre el indice de los elementos

const nombresObj = {
  ...nombres
}

console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }

//Spread de objetos
//Se puede hacer spread de objetos también, pero debe hacerse dentro de una estructura que lo permita, como otro objeto.

const usuarioCoder = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuarioCoder2 = {
  ...usuarioCoder
}

console.log(usuarioCoder2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

//En el último ejemplo vemos que agregamos una propiedad y que modificamos la propiedad curso. Recordemos que no podemos tener dos propiedades con el mismo nombre, y en tal caso prevalece la última declarada, que es lo que ocurre aquí. 

const usuarioCoder3 = {
  ...usuarioCoder,
  curso: "ReactJS",
  email: "juan@doe.com"
}

console.log(usuarioCoder3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }





