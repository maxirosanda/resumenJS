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

