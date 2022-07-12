

let cantidad = 0;
let total = 0
let anotador=0;


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