
















/*                                                  PRUEBA 2
function sumaDelTotal(articulo, cantidad){
    let resultado=0;
    resultado=console.log(articulo*cantidad);
}
let pan = 150;
let leche = 180;
let azucar = 130;
let cantidad= 0;

alert('bienvenido a la tienda');
alert('en stock tenemos leche pan y azucar');
let ingresePrimerArticulo = prompt('ingrese el primer articulo al finalizar la compra ingrese FIN')

if(ingresePrimerArticulo != 'FIN'){
    if(ingresePrimerArticulo == 'pan'){
        alert('el valor del pan es de $'+pan+'xkg');
        cantidad=parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad>0){
            sumaDelTotal(pan,cantidad);
        }
    }
    if(cantidad>0){
       otroArticulo= prompt('ingrese otro articulo')
       if(otroArticulo != 'FIN'){
         
       }
    }
    if(ingresePrimerArticulo == 'leche'){
        alert('el valor de la leche es de $'+leche+' x unidad');
        cantidad=parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad>0){
            sumaDelTotal(leche,cantidad);
        }
    }
    if(ingresePrimerArticulo == 'azucar'){
        alert('el valor del pan es de $'+azucar+' x unidad');
        cantidad=parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad>0){
            sumaDelTotal(azucar,cantidad);
        }
    }
}
*/






/*                                 PRUEBA 1
function total(producto, cantidad){
    let resultado = producto * cantidad;
    console.log(resultado);
}

let pan = 150;
let leche = 120;
let azucar = 80;
let solicitarOtroProducto = 0;

producto=prompt('ingrese un producto, en stock tenemos leche pan y azucar, al finalizar la compra escriba FIN');
while(true){
   
if(producto != 'FIN'){
    
    if(producto == 'pan'){
       
        cantidad = parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad > 0){
            total = cantidad*pan;
            resultado = console.log('el total es de $'+total);
        }
    }
} 
if(cantidad>0){
    solicitarOtroProducto= prompt('desea solicitar otro producto?')
}

if(solicitarOtroProducto != 'FIN'){
    if(solicitarOtroProducto == 'leche'){
        cantidad = parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad>0){
            total = cantidad*leche
            resultado=console.log('el total es de $'+total)
        }
    }
}
if(cantidad>0){
    solicitarOtroProducto= prompt('desea solicitar otro producto?')
}
if(solicitarOtroProducto != 'FIN'){
    if(solicitarOtroProducto == 'azucar'){
        cantidad = parseInt(prompt('ingrese la cantidad deseada'));
        if(cantidad>0){
            total = cantidad*azucar
            resultado=console.log('el total es de $'+total)
        }
    }
}
}

*/



/*                                                APROBADO
let cantidad = 0;
let total = 0

let fideos = 200;
let galletitas = 100;
let queso = 300;



alert('bienvenido a la tienda en stock tenemos fideos, galletitas y queso, al finalizar la compra ingrese FIN');
while(true){
productos=prompt('seleccione un producto');
if(productos=='FIN'){alert('fin de la compra'); break;}
if(productos == 'fideos'){
    alert('el valor de los fideos es de $'+fideos+'xunidad')
    cantidad = parseInt(prompt('ingrese cantida deseada'))
    if(cantidad > 0){
    total = alert('total $'+cantidad*fideos)
    }
    }

else if(productos == 'galletitas'){
    alert('el valor de las galletitas es de $'+galletitas+'xunidad')
    cantidad = parseInt(prompt('ingrese la cantidad deseada'))
    if(cantidad > 0){
    total =alert('total $'+cantidad*galletitas)

        }
        }

else if(productos == 'queso'){
    alert('el valor del queso es de $'+queso+'xkg')
    cantidad = parseInt(prompt('ingrese la cantidad deseada'))
    if(cantidad > 0){
    total= alert('total $'+cantidad*queso)
    }   
    }

}
*/

    /*                         idea 1
    
    if(pedido = 'papa'){
        alert('el valor de la papa es de $30xkg')
        cantidad = prompt('cuantos kg llevas?')
        alert(('el total es $' + cantidad * 30))
    }
    */

    /*                         idea 2

    if(pedido = 'papa'){
        pesoDeseado = prompt('ingrese peso deseado') 
        alert('el total es $'+ papa * pesoDeseado);
    }
    else if(pedido = 'cebolla'){
        pesoDeseado = prompt('ingrese peso deseado') 
        alert('el total es $'+ cebolla * pesoDeseado);
    }
    else if(pedido = 'mandarina'){
        pesoDeseado = prompt('ingrese peso deseado') 
        alert('el total es $'+ mandarina * pesoDeseado);
    }
    */

    /*                                  idea 3

let papa = 30;
let cebolla = 25;
let mandarina = 50;

let pesoDeseado = 0;
let carritoDeCompras = 0;

if(dondeDeseaIngresar == 'verduleria'){
    alert('bienvenido a la verduleria');
    alert('en stock tenemos papa, cebolla y mandarinas');
    productoSeleccionado = prompt('seleccione un producto')
    
    if(productoSeleccionado = papa){
        productoSeleccionado = parseInt(alert('el valor del producto es de $'+papa+'xkg'));;
        pesoDeseado = prompt('ingrese el peso deseado');
        pesoDeseado =parseInt(alert('el total es de $'+papa*pesoDeseado));
    }

}
else if(dondeDeseaIngresar == 'verduleria'){
    alert('bienvenido a la verduleria');
    alert('en stock tenemos papa, cebolla y mandarinas');
    productoSeleccionado = prompt('seleccione un producto')
    
    if(productoSeleccionado = cebolla){
        productoSeleccionado = parseInt(alert('el valor del producto es de $'+cebolla+'xkg'));;
        pesoDeseado = prompt('ingrese el peso deseado');
        pesoDeseado =parseInt(alert('el total es de $'+cebolla*pesoDeseado));
    }

}

    else if(dondeDeseaIngresar == 'carniceria' ){
        alert('bienvenido a la carniceria');
        alert('en stock tenemos milanesa, roastbeaf y paleta');
        prompt('selecciones un producto')

    }
    */



    /*                            idea4

    alert('bienvenido al mercado contamos con verduleria y carniceria');

let dondeDeseaIngresar= prompt('A que sector desea ingresar?');

function sumar(primerNumero, segundoNumero, tercerNumero){
    total = primerNumero + segundoNumero + tercerNumero
}
let papa=25;
let cebolla=30;
let mandarina=50;

let ingreseProducto = 0;
*/

/*
function productoSeleccionado(productoUno, productoDos, productoTres){
    guardado = console.log(productoUno + productoDos + productoTres);
}
*/
/*
if(dondeDeseaIngresar = 'verduleria'){
    alert('bienvenido a la verduleria en stock tenemos papa, cebolla y mandarina');
    ingreseProducto = prompt('ingrese nombre de producto seleccionado');
    if(ingreseProducto = 'papa'){
        alert('el valor de la papa es de '+papa+'xkg')
        pesoDeseado=parseInt(prompt('ingrese el peso deseado'));
    }
    if(pesoDeseado > 0){
        alert('el total es de $'+pesoDeseado*papa);
        console.log('papa $'+pesoDeseado*papa);
    }
    else if(alert('el peso ingresado debe ser mayor a cero'));
    
    
}
else if(dondeDeseaIngresar='carniceria'){
    alert('bienvenido a la carniceria en stock tenemos milanesa, asado y pollo');
}
*/