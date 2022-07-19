//                       objetos

//            objeto literal

//por que usar objetos? si queremos crear una variable que tenga varios 
//valores relacionados entre si creamos un objeto

/*
let nombre ='homero';
let edad =39;
let calle = 'avenida siempre viva 742';

const persona1= { nombre:'homero', edad:39, calle:'avenida siempre viva742'}

entre llaves coloco la propiedad 'nombre' y seguido de dos puntos el valor 'homero'
                      propiedad:valor, 
*/

//                 obtener valores del objeto
//para obtener el valore de una propiedad de un objeto se utiliza(.)
/*
const persona1= {
    nombre: 'homero',
    edad:39,
    calle:'avenida siempreviva742
}

    cada uno de estos console.log mostraria el valor que tiene cada propiedad dentro del objeto

console.log(persona1.nombre) 
console.log(persona1.edad)
console.log(persona1.calle)

console.log(persona1['nombre']) es otra manera que no suele utilizarse al menos que el caso lo amerite

si quiero modificar el valor de una propiedad que se encuentra dentro de un objeto se hace de la siguiente manera
persona1.edad = 36
persona1['nombre]='marge' -> no recomendado 
*/
//                                                      funcion constructora
//                                                se utiliza para crear objetos
// el objeto debe comenzar con letra mayuscula ya que es la forma que tiene javascript de diferenciar entre una funcion constructora y una logica
//this='este'
/*
                                                 ejemplo1
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle= calle;
}

const persona1= new Persona ('homero', 39, 'avenida siempre viva 742);
const persona2 = new Persona ('marge', 36,'avenida siempre viva 742);
*/

//esta funcion tiene un parametro solo 'literal'
//parametro teine 3 propiedades
/*
                                                 ejemplo 2
function Persona(literal){
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}
const persona1 = new({nombre:'pepe', edad:39, calle:'x calle'});
*/
/*
                                                 ejemplo 3
function Auto(objetoDelAuto){                  <- funcion constructora   
    this.marca = objetoDelAuto.marca;
    this.modelo = objetoDelAuto.modelo;
}
const auto={                                    <-objeto literal
    marca: 'ferrari',
    modelo: 1947
}
const miPrimerAuto = new Auto(auto);
*/

//                 metodos y operaciones conobjetos
// metodo -> una funcion que esta dentro de nuestro objeto
//las funciones constructoras se consideran metodos

/*
let cadena 'HOLA';
console.log(cadena.length); length:propiedad de obj strin: largo de la cadena
console.log(cadena.toLowerCase()); toLowerCase:metodo de obj string: pasar a minuscula
console.log(cadena.toupperCase()); toUpperCase:metodo de obj string: pasar a mayuscula
*/

//        metodos personalizados
/*
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    his.edad = edad;
    this.calle = calle;
    this.hablar = function(){console.log('HOLA SOY'+this.nombre)}
}
para crear metodos personalizados a nuestra funcion constructora agregamos otra propiedad a la que le igualamos una funcion a ejecutar
const persona1 = new Persona('pepe', 39, 'calle x 123');
persona1.hablar();

*/

//                   clases
//provee una forma mas simple y clara para crear objetos
// equivale a una funcion constructora

/*
clasee Persona{
    constructor(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    }
    hablar(){
        console.log('HOLA SOY' + this.nombre);  -> esta es una forma de crear un metodo personalizado en una clase           
    }
}

const persona1 = new Persona('pepe', 39, 'calle x 123');


*/