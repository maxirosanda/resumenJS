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