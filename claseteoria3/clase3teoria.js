//ciclos (bucle-repeticion) - iteraciones//
//si tengo que hacer algo que se repita mas de una vez uso las estructura de bucle de js for - while - dowhile //
//do...while no se usa en js al menos que se utilice para desarrollar un juego//
//bucles por conteo  
//for repite un bloque de codigo un numero de veces especificada//
//while do...while repeticion - mientras yo haga tal cosa va a pasar tal otra//

//for (desde; hasta; actualizacion){...}//
/*
for(let i =0; i< 10; i++){
    alert(i);
}
for(let i = 1; i<=10; i++){
    alert(i);
}
*/

//breack//
/*
for (let i = 1; i <= 10; i++)
{ if (i == 5){ 
    breack;
    {alert(i);
}
*/
/* esta es otra forma de declarar una variable en un for
let i =6;
for(i; i>=0; i--){
    if(i==3){
        continue;      con esta sentencia salteo una parte del bucle
    }
    alert(i+<br>)
}
*/
// for in - for of
/*
let animales=['gato','perro', 'loro']

for(animal in animales){
    document.write(animal + '<br>');     for in muestra solo la posicion de nuestros elementos
     
    document.write(animal[animal] + '<br>'); de esta forma for in muestra el valor
}
document.write('<br>');
for(animal of animales){
    document.write(animal + '<br>');     for of muestra solo los valores
}
*/
//array es el nombre tecnico de una variable que almacena varios valores//
/*
const listadoNotas=['valor1','valor2', 'valor3']
const posicion = valor1;
listadoNotas[2]; indice2(valor3)
listadoNotas [posicion]; indice 0 (valor1);

let contadorDeNotas = 0;
for(let posicion = 0; posicion < 3; posicion++){
    contadorDeNotas = contadorDeNotas + listadoNotas[posicion];(acumulador)
    contadorDeNotas += listadoNotas[posicion]; (acumulador)
}
*/
//array asociativos
/*
let pc1={
    nombre: 'pedro',
    procesador: 'xprocesador',
    ram: '16gb',
    espacio: '1tb'
}
*/

/*
let nombre= pc1['nombre']
 
de esta manera a el array es llamado entre corchetes a traves del nombre de la variable en vez de ser llamado por su posicion en el array(0,1,2)*/


//while en vez de ser desde y hasta es un mientras mientras tal condicion sea verdadera vamos a repetir un ciclo//

/*

/*
let pc2 =['pedro', 'procesadorx', '16gb', '1tb']
*/
/*
let nombre= pc2[0]
de esta manera estariamos citando al array a travez de su posicion y no del nombre de su variable 
*/

/*
let repetir = true; 
while(repetir){
console.log(aaa)
}
*/

//mientras la entrada que reciba sea diferente a esc el programa se sigue repitiendo//
/*
let entrada = prompt ("ingrese un dato");
while (entrada != "esc"){
    alert("el usuario ingreso " + entrada);
entrada = prompt("ingrese otro dato");
}
*/

//do...while//

/*
let repetir = false
do{
    console.log("xxxx")
}while(repetir)
*/

//switch una forma de estructurar muchos valores que puede trener una variable siempre termina con un breack
/* 
siwtch(numero){
case5:
...
breack;
default:
...
breack;
}
*/