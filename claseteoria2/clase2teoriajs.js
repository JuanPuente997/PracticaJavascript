//condicionales/control de flujo//

//valores booleanos. posibles valores= true(1) - false(0) //


if(true) {
    console.log("vas a ver este msj");
}

if(false) {
    console.log("vas a ver este msj");
}


//si la condicion se cumple se ejecuta todas las intrucciones que se encuentren dentro de {..}.
//si la condicion no se cumple no se ejecuta ninguna instruccion contenida en {..} y el programa continua ejecutando el resto de las intrucciones//



//comparacion//
//== , < menor que , > mayor que//
// = asigna un valor //
// == comparacion (comparamos valores no tipos) //
// === comparacion (compara valor y tipo) //
//!= diferencia 10!=11//
//!== completamente diferente//

const numeroA = 10;
const numeroB = 20;
if(numeroA < numeroB){
    console.log("blablabla")
}

const stock = 10;
const cantidadDelUsuario = 20;
if(stock < cantidadDelUsuario){
    console.log("no hay stock");
}

//if(si se cumplen los valores esto) else(sino esto)//
let unColor = "rojo";
if(unColor == "rojo"){
    console.log("el color es rojo");
}
else{
    console.log("el color no es rojo");
}

//condiciones anidadas//
let precio = 100.5;
if(precio < 20){
    alert("el precio es menor que 20")
}
else if(precio < 20){
    alert("el precio es menor que 50");
}
else if(precio < 100){
    alert("el precio es menor que 100");
}
else{
    alert("el precio es mayor que 100");
}

//true o false las variables booleanas son las que solo tienen dos valores true o false, pueden recibir el valor a partir de una evaluacion booleana sobre otras variables//
let numero = 16;
let esMayor5 = (numero >= 15);
if(esMayor5 == numero >= 17){
    alert("es boolean true");
}
else{
    alert("no es mayor");
}

//condicionales compuestos//
//&& "y"//
//|| "o - or"//

const edadPersona = 19;
const dineroEnElBolsillo = 20000;
const dineroDeLaEntrada = 1000;
const nombrePersona = "carlos";
//if(edadPersona >= 18 && dineroEnElBolsillo >= dineroDeLaEntrada)//
//con || puede no cumplirse esta funcion y otras si //
if(((edadPersona >= 18 || dineroEnElBolsillo >= dineroDeLaEntrada))|| nombrePersona == "jose"){
    console.log("bienvenido a nuestro bar");
    if (edadPersona !=18){
        console.log("tenes otra edad que no es 18");
    }
}
else {
    console.log("no podes entrar");
}

