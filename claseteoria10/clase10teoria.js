//                         storage & JSON
//storage-> es un tipo de cuquie donde desde el front se guarda informacion que puede ser reutilizada(guarda solo texto)(no se puede guardar nada que no sea formato JSON)
//JSON-> parsea el formato js para guardarse en el storage

//                  localStorage.setItem('kie'(clave),'value'(valor))
//para cambiar el valor de un item vuelvo a llamar al mismo item de la misma manera y  modifico el valor

//                localStorage.getItem
//con getItem llamo al valor almacenado en el item
/*
localStorage.setItem("carrito","Aguante bokita")

localStorage.getItem("carrito")
'Aguante bokita'
*/

/*
let lista = sessionStorage.getItem('seleccionados').split(",");
let bandera= (sessionStorage.getItem('esValido')=='true');
let email = sessionStorage.getItem('email');

(typeof devuelve el tipo de elemento almacenado en el storage)

console.log(typeof lista);// object["1","2","3"];
console.log(typeof bandera);// boolean;
console.log(typeof email);// string;        
*/

//.removeItem(remueve el item seleccionado)
//.clear(elimina toda la info)
/*    
localStorage.setItem('bienvenida','¡Hola Code!');
sessionStorage.setItem('esValido',true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');

localStorage.clear() elimina toda la información
sessionStorage.clear() elimina toda la información
*/