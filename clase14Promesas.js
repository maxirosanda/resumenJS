/*
setTimeout(()=> {
  console.log("Proceso asincrónico")
}, 3000)

console.log("Inicia proceso")


setTimeout(()=> {
    console.log("Mitad de proceso")
}, 2000)


console.log("Fin proceso")

const btn = document.querySelector('#btn')
const popup = document.querySelector('#popup-mensaje')


btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})
*/
/*
for (let letra of "hola") {
  console.log(letra)
}


for (let letra of "mundo") {
  console.log(letra)
}

for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}


for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
}
*/
/*
//Sabiendo cómo funciona el motor de Javascript para organizar las tareas sincrónicas y asincrónicas, queda más claro cómo es posible que una instrucción como la siguiente tiene  el resultado que tiene:

console.log("Inicia proceso")


setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)


console.log("Fin proceso")

//	Por más que hagamos el timeout con 0 milisegundos, éste se envía al stack de web apis primero, luego al callback queue, y finalmente el event loop lo incorpora al callstack para su ejecución, luego de los console.log anteriores.

setInterval(() => {
  console.log("Tic")
}, 1000)

//Cuando llamamos un setInterval() éste retorna una referencia al intervalo generado, el cual podemos almacenar en una variable. Es esta referencia la que debemos pasar a la función clearInterval para que la limpieza tenga efecto:

let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)


    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)

console.log("Inicio")

//Lo mismo funciona con los timeout. Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego por algún motivo que determinemos. En el siguiente caso, el timeout generado nunca llega a ejecutarse:
const fin = setTimeout(() => {
    console.log("fin")
}, 2000)


clearTimeout(fin)
*/

//Resolve y Reject
//Una promesa nos devuelve inmediatamente un valor que puede modificarse en el tiempo, ya que representa ésto mismo: la promesa de generar un valor a futuro. Es decir, una promesa cuenta con tres estados posibles: pending, fulfilled, rejected.
//En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto. Pero las promesas contemplan la posibilidad de ser resueltas o rechazadas. Es decir, tienen la capacidad de generar distintos resultados según un caso u otro.
/*
const eventoFuturo = () => {
  return new Promise( (resolve, reject) => {
      //cuerpo de la promesa
  } )
}


console.log( eventoFuturo() ) // Promise { <pending> }

//Esta función retorna una promesa que no se resuelve. Por lo tanto, veremos que el valor que genera es un objeto Promise con estado pendiente. El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject().

const eventoFuturo2 = (res) => {
  return new Promise( (resolve, reject) => {
      if (res === true) {
          resolve('Promesa resuelta')
      } else {
          reject('Promesa rechazada')
      }
    })
  }
  
  
  console.log( eventoFuturo2(true) ) // Promise { 'Promesa resuelta' }
  console.log( eventoFuturo2(false) ) // Promise { <rejected> 'Promesa rechazada' }

  //En este caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos llamados. Su resolución se generará dentro de 2 segundos. Las promesas tienen un mecanismo para trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado, es decir cuando se resuelva o se rechace.

  const eventoFuturo3 = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}


console.log( eventoFuturo3(true) ) // Promise { <pending> }
console.log( eventoFuturo3(false) ) // Promise { <pending> }

//THEN y CATCH:	Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa.

eventoFuturo3(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })


  eventoFuturo3(false)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })
//Las promesas nos ofrecen también un método finally() que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa:
eventoFuturo3(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
// Promesa resuelta
// Fin del proceso
*/

//Aprovechando lo que vimos de asincronía y promesas, podemos simular una acción típica de una web app, como es la petición de datos a algún servidor y generar alguna interacción con el resultado.

// función que tras 3 segundo retorna un array de objetos

const BD = [
  {id: 1, nombre: 'Producto 1', precio: 1500},
  {id: 2, nombre: 'Producto 2', precio: 2500},
  {id: 3, nombre: 'Producto 3', precio: 3500},
  {id: 4, nombre: 'Producto 4', precio: 3500},
]


const pedirProductos = () => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(BD)
      }, 3000)
  })
}

// asincrónicamente pedimos los datos y generamos la vista

pedirProductos()
  .then((res) => {
      console.log(res)
  })

