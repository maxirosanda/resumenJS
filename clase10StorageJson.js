//Los datos almacenados en localStorage (variable global preexistente) se almacenan en el navegador de forma indefinida (o hasta que se borren los datos de navegación del browser)

localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 20);
let mensaje =  localStorage.getItem('bienvenida');
let bandera =  localStorage.getItem('esValido');
let numero  =  localStorage.getItem('unNumero');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’
//Sessionstorage
sessionStorage.setItem('seleccionados', [1,2,3]);
sessionStorage.setItem('esValido', false);
sessionStorage.setItem('email', 'info@email.com');
let lista   =  sessionStorage.getItem('seleccionados').split(",");
let bandera2 = (sessionStorage.getItem('esValido') == 'true');
let email   =  sessionStorage.getItem('email');

console.log(typeof lista);   //object ["1","2","3"];
console.log(typeof bandera2); //boolean;
console.log(typeof email);   //string;

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: "+ clave);
  console.log("Valor: "+ localStorage.getItem(clave));
}

//Eliminar datos del storage
localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
//localStorage.clear()    //elimina toda la información
//sessionStorage.clear() //elimina toda la información



