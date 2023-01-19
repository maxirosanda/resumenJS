
// Clase 3
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}

for (let i = 1; i <= 2; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i == 5){
      break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es 5, no se interpreta la repetición
  if(i == 5){
      continue;
  }
  console.log(i);
}
*/
/*
let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}

let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir)


let numero = 0;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));
*/
/*
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}
*/





