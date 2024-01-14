////////////////////////////////////////////////////////////
// Funciones para menú hamburguesa
////////////////////////////////////////////////////////////

// Selecciona el elemento con ID menu-ham-js y lo esconde o muestra dependiendo del estado anterior
function menu() {
   var x = document.getElementById("menu-ham-js");
   if (x.style.visibility === "visible") {
     x.style.visibility = "hidden";
   } else {
     x.style.visibility = "visible";
   }
 } 

 function submenu() {
  var x = document.getElementsByClassName("contenido-submenu");
  if (x.style.visibility === "collapse") {
    x.style.visibility = "visible";
    x.style.display = "block";
  } else {
    x.style.visibility = "collapse";
    x.style.display = "none";
  } 
 }


// Si detectamos que se redimensiona, el menú superior se muestra aunque hayamos hecho click previamente 
// para ocultarlo. Esto evita que desaparezca al girar teléfonos o tablets.
// Lo mismo para el menú de opciones de compra del catálogo

function detectaResize(){
  var x = document.getElementById("menu-ham-js");
  var y = document.getElementById("menu-catalogo");
  if ( window.innerWidth < 768 ) {
    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
    }
  } else {
    if(x.style.visibility === "hidden"){
      x.style.visibility = "visible";
      y.style.height = "250px";
    }
  }
}

function expande(){
  var x = document.getElementById("menu-catalogo");
  if (x.style.height === "fit-content") {
    x.style.height = "60px";
  } else {
    x.style.height = "fit-content";
  }
}

window.onresize = detectaResize;
var x = document.getElementById("main-content");
x.onresize = detectaResize;