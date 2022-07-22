const productos=[{
id:1,
nombre:'fideos',
precio:150,
},{
id:2,
nombre:'galletitas',
precio:120,
},{
id:3,
nombre:'queso',
precio:280,
},{
id:4,
nombre:'yerba',
precio:190,
},{
id:5,
nombre:'sopa instantanea',
precio:120,
},{
id:6,
nombre:'mermelada',
precio:270,
},{
id:7,
nombre:'chocolate',
precio:300,
},{
id:7,
nombre:'manteca',
precio:200,
},{
id:8,
nombre:'azucar',
precio:120,
},{
id:9,
nombre:'jamon',
precio:130,
}]

function filtro(elemento){
    productos[precio]
    if(precio<=200){
        console.log(elemento);
    }

}

for(let i = 0; i < productos.length ;i++){
    console.log(productos[i].precio);
}




    function carrito(elemento1, elemento2){
        let resultado = elemento1 + elemento2 
        console.log(resultado)
    }
    
    alert('bienvenido a la tienda');
    let ingreseUnElemento = prompt('ingrese un producto luego escriba FIN');
    
    if(ingreseUnElemento != 'FIN'){
            let cantidad=0;
            cantidad = parseInt(prompt('ingrese la cantidad deseada'))
            if(cantidad > 0){
                alert('anotado '+ ingreseUnElemento+' '+cantidad);
                carrito(ingreseUnElemento,cantidad);
            } 
            while(true){
            let agregarOtro = prompt('ingrese otro producto')
            if(agregarOtro =='FIN'){
                alert('fin de la compra')
                console.log('compra finalizada')
                break;
            }
            let otraCantidad = parseInt(prompt('ingrese la cantidad deseada'))
                if(otraCantidad > 0){
                    alert('anotado '+agregarOtro+' '+otraCantidad);
                    carrito(agregarOtro,otraCantidad);
                }
            }
            
        }