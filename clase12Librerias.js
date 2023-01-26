const btn2 = document.querySelector('#myBtn2')
btn2.addEventListener("click",() => {
  Swal.fire({
    title: 'Error!',
    text: 'Quieres continuar?',
    icon: 'error',
    confirmButtonText: 'Si, Quiero'
  })
})

const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Haz clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})
const btn3 = document.querySelector('#myBtn3')
btn3.addEventListener('click', () => {

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
})

})

const btn4 = document.querySelector('#myBtn4')
btn4.addEventListener('click', () => {

  Swal.fire({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})


})