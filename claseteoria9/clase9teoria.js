//                  EVENETOS
// los eventos son la manera que tenemos en js de controlar las acciones del usuario y definir el comportamiento de la pagina o aplicacion cuando se produzca 
// js nos permite escuchar eventos sobre elementos seleccionados. cuando escuchamos el evento que esperamos, se ejecuta la funcion que definimos en respuesta. a esta escucha se la denomina event listener

//         COMO DEFINIR ESTOS EVENTOS

//addEventListener(nombreDelEvento,laFuncionDeRespuesta) permite definir que evento escuchar sobre cualquier elemento seleccionado
// coderback = laFuncionDeRespues -> funcion que se ejecuta despues de un evento
//                  OPCION 1 
/*
<button id = ('btnPrincipal')>CLiCK</button>
<script>
let boton = document.getElementById('btnPirncipal)
boton.addEvenetListener('click',respuestaClick)
function respuestaClick(){
    console.log('respuesta evento');
}
</script>
*/
//               OPCION2
/*
<script>
let boton = document.gerElementById('btnPrincipal')
boton.onclick = () =>{console.log('respuesta 2')}
</script>
*/
//                     OPCION3
// determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML, la denominacion del atributo es identica al de la propiedad de la opcion 2 (prefijo on)
/*
<input type='button' value= 'CLICK2' onclick= "alert('respuesta 3');"/>
*/
//la funcion puede declararse entre las comillas o bien tomar una referencia existente en el script.

//           DATO
//para enlazar el archivo js al HTML desde el head agregando ela tributo defer dentro de la estiqueta script al igual que el src 