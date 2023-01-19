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


