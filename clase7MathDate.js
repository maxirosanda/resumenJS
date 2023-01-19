console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793
console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25
console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity

const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3

//sqrt() raiz cuadrada
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN

console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095

// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )

//generar numeros aleatorias redondeados
const generadorNumero = () => {
  return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )

console.log( new Date() )
//La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:
console.log(new Date(2020, 1, 15))
const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad)
const casiNavidad2 = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad2)

const hoy = new Date("December 17, 2021")

//metodos para extraer datos
console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)

//Diferentes presentaciones
console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)