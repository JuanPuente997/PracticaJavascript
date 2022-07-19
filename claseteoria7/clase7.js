const productos=[{
nombre:'fideos', precio:180,
nombre:'queso', precio:300, 
nombre:'galletitas', precio:150
}]


function carrito(elemento1, elemento2, elemento3){
    let resultado = elemento1 + elemento2 + elemento3
    console.log(resultado)
}

alert('bienvenido a la tienda. en stock tenemos fideos galletitas y queso');
let ingreseUnElemento = prompt('ingrese un producto luego escriba FIN');

if(ingreseUnElemento != 'FIN'){
        cantidad = parseInt(prompt('ingrese la cantidad deseada'))
        if(cantidad > 0){
            alert('anotado '+ ingreseUnElemento+' '+cantidad);
            carrito(ingreseUnElemento+' '+cantidad*(productos.precio));
        } 
        while(true){
        agregarOtro = prompt('ingrese otro producto')
        if(agregarOtro =='FIN'){
            alert('fin de la compra')
            console.log('total final ='+cantidad+otraCantidad);
            break;
        }
        otraCantidad = parseInt(prompt('ingrese la cantidad deseada'))
            if(otraCantidad > 0){
                alert('anotado '+agregarOtro+' '+otraCantidad);
                carrito(agregarOtro + otraCantidad);
            }
        }
        
    }







    // else if(carrito >= 1){
    //     agregarOtro=prompt('ingrese otro producto')
    //     if(agregarOtro != 'FIN'){
    //         cantidadDos=parseInt(prompt('ingrese la cantidad deseada'));
    //         if (cantidadDos > 0){
    //             alert('anotado '+agregarOtro+''+cantidadDos);
    //             carrito(agregarOtro + cantidadDos);
    //         }
    //     }
    // }
