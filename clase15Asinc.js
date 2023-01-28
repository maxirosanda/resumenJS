//Cada petición tiene un Status, que es un código que significa el estado de la petición. 
//Códigos de estado que comienzan en 2 (generalmente 200), significa que la petición fue exitosa.
//Los códigos que empiezan con 4 significan que hubo algún error con la petición. El famoso 404 indica que el recurso buscado no fue encontrado.
//Códigos que empiezan con 5 significan que hubo un error con el servidor, por lo tanto no es culpa de la petición.

fetch('https://jsonplaceholder.typicode.com/posts/5')
      .then(response => response.json())
      .then(json => console.log(json))

console.log( fetch('https://jsonplaceholder.typicode.com/posts') ) // Promise {<pending>}
      
/*
const lista = document.querySelector('#listado')


fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
    })


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
*/
/*
const lista = document.querySelector('#listado')


fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {


        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })
*/
//ASYNC - AWAIT

const lista = document.querySelector('#listado')

const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
   
    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        lista.append(li)
    })
}


pedirPosts()