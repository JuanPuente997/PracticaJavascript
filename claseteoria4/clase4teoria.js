//                             programacion con funciones

//                        Scope- variables globales y locales

//                                     funciones
//                        DRY
//evita que repita un codigo muchas veces (El principio No te repitas (en inglés Don't Repeat Yourself o DRY, también conocido como Una vez y sólo una) es una filosofía de definición de procesos que promueve la reducción de la duplicación)
//                        KISS
//soluciona problemas complejos usando taresas sencilla (El principio KISS establece que la mayoría de sistemas funcionan mejor si se mantienen simples que si se hacen complejos; por ello, la simplicidad debe ser mantenida como un objetivo clave del diseño, y cualquier complejidad accidental debe ser evitada.)
//                        YAGNI
//focaliza tareas prioritarias para el programa(En ingeniería de software la filosofía de desarrollo de programas: No vas a necesitarlo o YAGNI (en inglés You Aren't Gonna Need It) consiste en que no se debe agregar nunca una funcionalidad excepto cuando sea necesaria)

//          declaracion de una funciuon

/*function saludar();{
    console.log('hola');
}
*/

//                 llamado

/* 
saludar(parametro); 
*/

/*               funcion creada

function solicitarNombre(){
    let nombreIngresado = prompt('ingresar nombre');
    alert('el nommbre ingresado '+nombreIngresado);
}
*/

/*              llamado de la funcion (sin importar donde la llame va a funcionar [hosting acomoda la variable arriba de todo para poder llamarla desde cualquier punto, var tambien se ve afectada por este evento]  )

solicitarNombre();
*/

//           parametros

//son variables que se declaran dentro de una funcion

/*
//     declaracion de variable para guardar el resultado de la suma

let resultado = 0;

//     funcion que suma dos numero y asigna a resultado

function sumar (primerNumero,segundoNumero){
    resultado=primerNumero + segundoNumero
}

//     funcion que muestra resultado por consola

function mostrar (mensaje){
    console.log (mensaje)
}

// primero llamamos a la suma y luego a mostrar el resultado

sumar(6,3); 
mostrar (resultado;)
*/

/*
function agregarAlCarrito(procucto){
    console.log('agregar el producto al carrito')
}

agregarAlCarrito('zapatillas');
agregarAlCarrito('medias');
*/
/*
function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}
let resultado = sumar(5,8)
*/

//      Scope
//scope o ambito de una variable es la zona del programa en el cual se define el contexto que pertece la misma dentro de un algoritmo restringiendo su uso y alcance

//               funcion anonima (ya no se utilizan)
//const suma = (a,b) = {return a + b}
//console.log(suma(15,20));

//              funcion flecha
//const suma = (a,b) => {return a + b} (afectada por el hosting)
//console.log(suma(15,20))