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

////////////////////////////////////////////////////////////
// No usadas (Pendiente)
////////////////////////////////////////////////////////////
//Evaluamos el tipo de evento:
//touchstart para dispositivos táctiles
//mouseup para el resto
/*var tipoEvento = ((document.ontouchstart !== null) ? 'mouseup' : 'touchstart');

$j(document).on(tipoEvento, function(e) {
 if (is_open === 1) { // si está abierto
   if (!$j(e.target).closest("#main-navigation").length > 0) {
        //y no pincho en navegación
        close_nav(); //ciérrate
   }
  } else { // si está cerrado
     if ($j(e.target).closest("#nav-open").length > 0) {
        //y pincho en nav open
        open_nav(); //abro
     }
  }
});*/