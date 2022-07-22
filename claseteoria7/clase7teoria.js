//                          funciones de orden superior
//es aquella que recibe como parametro o retorna una funcion

/*
function mayorQue(n){
    return(m)=>m>n
}

const mayorQueDiez = mayorQue(10)

console.log(mayorQueDiez(12));  // true
console.log(mayorQueDiez(8));  // false
*/ 


//                  metodos de busqueda y transformacion
//forEach()   recorrer un array y hacer algo con cada elemento (por cada uno)
//find()      buscar un elemento dentro de un array
//filter()    para filtrar un array
//some()      
//map()       recorrer y crear uno nuevo
//reduce()    para poder sumar en un acumulador
//sort()      ordenar los elementos de mayo a menor o lo contrario
//        forEach()
/*
const productos =['zapas','remeras', 'ojotas']

let cards='';

productos.forEach((producto){
    cards += producto
}
)
document.write(cards);
*/

//      find()
/*
const cursos = [
    {nombre: 'javascript', precio:15000}
]
const resultado = cursos.find((el) => el.nombre ==='javascript')

console.log(resultado) -> nombre: 'javascript', precio:15000

DEVUELVE EL OBJETO ENTERO
*/

//         filter()
/*
const resultado = cursos.filter((el)=> el.nombre.includes('js'))
console.log(resultado)

DEVUELVE UN ARRAY QUE CUMPLA CON LOS REQUISITOS DE LOS ELEMENTOS INGRESADOS
*/

//                  some()
// segun el resultado de la iteracion de busqueda devuelve un valor booleano

//                  map()
/*
const nombres = cursos.map((el) => el.nombre)
console.log(nombres)

DEVUELVE TODOS LOS NOMBRES QUE ESTEN DENTRO DE UN ARRAY

const actualizado = cursos.map((el)=>{
    return{
        nombre: el.nombre,
        precio: el.precio * 1,25
    }
})
TAMBIEN SE PUEDE UTILIZAR PARA ACTUALIZAR LOS ELEMENTOS DEL ARRAY
*/

//                   reduce()
/*
const numeros = [1,2,3,4,5,6]

const total = numeros.reduce((acumulador, elemnto)=>+elemento,0)

console.log(total) 

DEVUELVE LA SUMA DE CADA UNO DE LOS ELEMENTOS DEL ARRAY
*/

//                      sort()
/*
const numeros = [40,1,5,200];

numeros.sort ((a,b) => a-b);

[1,5,40,200]

numeros.sort((a,b) => b-a);

[200,40,5,1]

ORDENA LOS ELEMENTOS DE UN ARRAY DE FORMA ASCENDENTE O DESCENDENTE 
*/

//               Math.
//los metodos Math.min() y Math.max() recibe una serie de argumentos numericos y devuelve aquel de valor maximo o minimo segund corresponda
/*
console.log(Math.max(55,13,0,-25,93,4)) -> 93
*/ 

//             ceil, floor, round
/*
const pi = math.PI -> 3.141592653589793

CEIL -> devuelve un entero mayor o igual al mas proximo
console.log(Math.ceil(pi)) -> 4

FLOOR -> devuelve el entero mas cercano redondeando hacia abajo
console,log(Math.floor(pi)) -> 3

ROUND -> retorna el valor de un numero redondeando al entero mas cercano 
console.log(Math.round(pi)) -> 3
*/

//               square root
//el metodo Math.sqrt() retorna la raiz cuadrada de un numero
/*
Math.sqrt(9) -> 3
*/

//                      Date()
/*
console.log(new Date()) -> retorna la hora y fecha actual
*/