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

