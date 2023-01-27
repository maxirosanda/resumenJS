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
