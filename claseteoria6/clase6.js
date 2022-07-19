const productos=[{
    nombre:'fideos', precio:180,
    nombre:'queso', precio:300, 
    nombre:'galletitas', precio:150
    }]
    
    
    function carrito(elemento1, elemento2){
        let resultado = elemento1 + elemento2 
        console.log(resultado)
    }
    
    alert('bienvenido a la tienda. en stock tenemos fideos galletitas y queso');
    let ingreseUnElemento = prompt('ingrese un producto luego escriba FIN');
    
    if(ingreseUnElemento != 'FIN'){
            cantidad=0;
            cantidad = parseInt(prompt('ingrese la cantidad deseada'))
            if(cantidad > 0){
                alert('anotado '+ ingreseUnElemento+' '+cantidad);
                carrito(ingreseUnElemento+' '+cantidad);
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