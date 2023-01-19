let app     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
// innerHTML toma el contenido interno del nodo, se puede usar para acceder al contenido o modificalo
console.log(app.innerHTML);
console.log(parrafo.innerHTML);
//CODIGO JS
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);

let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);

for (const pais of paises) {
  console.log(pais.innerHTML);
}

for (const div of contenedores) {
  console.log(div.innerHTML);
}

//CODIGO JS
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = "Hola Coder!"
console.log( titulo.innerText ) // “Hola Coder!”

let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>"

//A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases:
container.className = "container row" //pisa las clases anteriores

let parrafo2 = document.createElement("p");
// Insertar HTML interno
parrafo2.innerHTML = "<h2>¡Hola Coder!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo2); //lo agrega al final

parrafo.remove();
paises[0].remove()

document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39;

//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
