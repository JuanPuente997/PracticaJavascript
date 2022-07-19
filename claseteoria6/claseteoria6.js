//                             arrays
// es un tipo de dato que sirve para almacenar valores en forma de lista
//los elementos tienen un indice que va desde cero hasta el ultimo numero

//              declaracion de array
/*

declaracion de array con numeros
const arrayA = [1,2];
posicion:       0,1 

*/

//                          acceso al array
/*    de esta manero accedo a los elementos dentro de un array atravez de su posicion
 const numero = [1,2,3,4,5,6];
 
 console.log(numero[0]); -> 1
 console.log(numero[3]); -> 4

let resultado = numero[1] + numero[2];
console.log(resultad); -> 5
 */

//                     recorrido del array
/*    utilizando un bucle para acceder a cada elemento por separado
const numeros = [1,2,3,4,5];

for(let index = 0; index<5;index++){
    alert(numeros[index]);
}
*/

//                         length
// la propiedad length me permite identificar cuantos elementos hay en un array ya que recorre el largo del array
/*
const miArray =['marca', 3, 'palabra];
console.log(miArray.lenght); -> imprime 3 elementos
*/

//                     agregar elementos

//                          push
//para sumar un elemento utilizamos el metodo push
/*const miArray = ['marca', 3,'palabra'];
miArray.push('otro elemento');

console.log(miArray.lenght) -> imprime 4 elementos
console.log(miarray) -> imprime solo los primeros 3
*/

//  .unshift con este metodo ingreso un elemento al principio del array

//                     quitar elementos
// .shift() -> elimina el primer elemento de un array
// .pop()-> elimina el ultimo elemento de un array 

//                         .splice

//perimite borrar uno o varios elementos 
//funciona con dos parametros el primero es el indice donde se ubica el metodo
//y el segundo la cantidad de elementos a eliminar desde esa posicion
/*
const nombres = ['rita, 'pedro', 'miguel', 'ana', 'vanesa'];
nombres.splice(1,2); -> desde pedro hasta miguel
nombre.splice(3,1); -> borra unicamente a ana
*/

//                            .join
//   junta a todos los elementos de un array en un string y los separa por el valor que le pasemos como parametro
/*
const nombres = ['luis', 'ana', 'julia'];
console.log(nombres.join('♦')); -> luis♦ana♦julia
*/

//                           concat
/*                      unifica los array
const perros = ['jose'];
const gatos = ['michi'];
const mascotas = perros.concat(gatos);
console.log(mascotas) ->['jose','michi']
*/

//                           slice
/*     devuelve una copia de una parte de un array, el array original no se mofica       

const nombres = ['rita',pedro','miguel','ana']
const masculinos = nombres.slice(1,3); -> masculinos=('pedro','miguel')

        se borra hasta la anteultima posicion 
*/

//                          indexOf 
/*    permite obtener el indice de un elemento en un array 

 const nombres = ['rita', 'jose', 'pepe'];
 console.log(nombres.indexOf('rita')); -> 0
 */ 

 //                          includes

 //el metodo includes permite saber si un elemento que recibo por parametro existe o no dentro de un array
 //retorna un valor booleano en caso de afirmativo o negativo
 /*
 const nombres = ['jose', 'pepe', 'carlos'];
 console.log(nombres.include('jose')); -> true
 */

 //                  reverse
 //invierte el orden de los elementos dentro de un array
 /*
 const nombres = ['jose', 'pepe']
 nombres.reverse();
 console.log(nombres); -> ['pepe', jose]
 */

 //                          for of
 // la sentencia for of permite recorrer un array ejecutando un bloque de codigo por cada elemento del objeto
 /*
 const productos =[
    {ad: 1, producto: 'arroz'},
    {id: 2, producto: 'fideo'},
    {id:3, producto: 'pan'};
    ]
     
     creamos la variable producto que va a salir desdela variable  productos
     esto se va a ejecutar la misma cantidad de veces que elementos tenga el array

     for(const producto of productos){
        console.log(producto.id);          -> 1° vuelta = 1
        console.log(productos.producto);   -> 1° vuelta = arroz m
    }
 */