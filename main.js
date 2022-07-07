//let console.log + - * / prompt parseInt//



let libro;
libro = "mi librito";
let otraVariable = "mi otro valor";

/*console.log(hola);*/
// no esta definido arroja error en cualquier posicion de la cascada antes o despues de cualquier otro termino// 

console.log(libro)
// console.log() muestra el mensaje que pasemos como parametro a la llamada en la consola del navegador web (envia un mensaje a la consola del navegador)//

const dia= "jueves";
console.log(dia);

let mensaje1 = "este es mi mensaje";
let mensaje2="este es mi otro mensaje";
console.log(mensaje1 + mensaje2);

//de la siguiente manera genero un espacio entre los dos valores +""+ //
let mensaje3 = "este es mi mensaje";
let mensaje4="este es mi otro mensaje";
console.log(mensaje3 +" "+ mensaje4);
/*de la siguiente manera reasigno un valor a la misma variable (queda una bajo la otra no se sustituyen)*/
mensaje4="otra cosa";
console.log(mensaje4);

//sentencia prompt() en la pantalla del navegador el usuario vera una ventana sobre la web que le solicitara un dato. al valor que el usuario ingrese se le conose por el termino de entrada //
/*prompt("ingrese su nombre");*/

//sentencia alert() abre una ventana en el navegador con un mensaje //
alert("Hola");

//en el siguiente ejemplo declaro una variable let como "nombre" el valor de esta variable es el prompt que al mismo tiempo solicita un dato al usuario //
let nombre = prompt("decime tu nombre");

//console.log almacena el contenido ingresado por el usuario en la variable "nombre"//
console.log(nombre);

let apellido = prompt("decime tu apellido");

//alert(apellido); de esta manera muestro una alerta de el contenido ingresado por el usuario en el primpt "decime tu nombre"//

console.log(apellido);

//lo que hago en el siguiente ejemplo es multiplicar los valores asignados por el usuario en la variable prompt, javascrip multiplica los valores y no los concatena ya que comprende que no puedo multiplicar texto //

/* 
const numero1 = prompt("ingrese el primer valor");
const numero2 = prompt("ingrese el segundo valor");
console.log(numero1 * numero2);
*/

//javascrip unicamente reconoce como valores numericos a la informacion ingresada en el prompt unicamente en la multiplicacion y en la division ya que en la suma concatena los resultados como texto ej 10+5=105 //

//en el siguiente ejemplo lo que hago es con parseInt  que javascrip comprenda que el valor asignado a la variable prompt es numerico. luego en la variable let reasigne el valor a la variable "numero2" para que lo reconozca como un valor entero con parseInt //
const numero5 = parseInt(prompt("ingrese el primer numero"));
let numero6 = prompt ("ingrese el segundo numero");
numero6 = parseInt(numero6);
console.log(numero5 + numero6);
