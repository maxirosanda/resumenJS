//Opcion 1
let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
  function respuestaClick(){
    console.log("Respuesta evento");
  }
//Opcion 2
boton.onclick = () =>{console.log("Respuesta 2")}
//Opcion 3 esta en el html

//Eventos del mouse
/*
mousedown/mouseup: Se oprime/suelta el botón del ratón sobre un elemento.
mouseover/mouseout:  El puntero del mouse se mueve sobre/sale del elemento.
mousemove: El movimiento del mouse sobre el elemento activa el evento.
click: Se activa después de mousedown o mouseup sobre un elemento válido.
*/
let boton2 = document.getElementById("btnMain")
boton2.onclick = () => {console.log("Click")}
boton2.onmousemove = () => {console.log("Move")}

//Eventos de teclado
/*
keydown: Cuando se presiona.
keyup: Cuando se suelta una tecla.
*/
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => {console.log("keyUp")}
input2.onkeydown = () => {console.log("keyDown")}

//Evento change
//El evento change se activa cuando se detecta un cambio en el valor del elemento. 
//Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.
input1.onchange = () => {console.log("valor1")}
input2.onchange = () => {console.log("valor2")}

//Evento input
//Si queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.
input1.addEventListener("input", () => {
  console.log(input1.value)
})

//Evento submit
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value); 
}

