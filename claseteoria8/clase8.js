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


alert('Bienvenido a la tienda');
alert('en stock tenemos');
alert('fideos, galletitas, queso, yerba, sopa, mermelada, chocolate, manteca, azucar, jamon');
alert('puedes seleccionar  cualquiera de nuestros por nombre')
alert('al finalizar su compra escriba FIN')

function carrito(elemento){
    let resultado = elemento 
    console.log(resultado)
}
function imprimir(impUno){
    pantalla = impUno
    document.write(pantalla)
}

let ingreso=prompt('ingrese el primer producto');
while(true){
    
if(ingreso =='fideos'){
    ingreso = carrito(productos[0]);
    imprimir(`<div><h3>fideos</h3></div>`)
}
let otroProducto=prompt('ingrese otro producto');
if(otroProducto =='FIN'){
    break;
}
if(otroProducto == 'galletitas'){
otroProducto=carrito(productos[1])
imprimir(`<div><h3>galletitas</h3></div>`)
}
else if(otroProducto == 'queso'){
    otroProducto=carrito(productos[2])
imprimir(`<div><h3>queso</h3></div>`)
}
else if(otroProducto == 'yerba'){
    otroProducto=carrito(productos[3])
imprimir(`<div><h3>yerba</h3></div>`)
}
else if(otroProducto == 'sopa'){
    otroProducto=carrito(productos[4])
imprimir(`<div><h3>sopa</h3></div>`)
}
else if(otroProducto == 'mermelada'){
    otroProducto=carrito(productos[5])
imprimir(`<div><h3>mermelada</h3></div>`)
}
else if(otroProducto == 'chocolate'){
    otroProducto=carrito(productos[6])
imprimir(`<div><h3>chocolate</h3></div>`)
}
else if(otroProducto == 'manteca'){
    otroProducto=carrito(productos[7])
imprimir(`<div><h3>manteca</h3></div>`)
}
else if(otroProducto == 'azucar'){
    otroProducto=carrito(productos[8])
imprimir(`<div><h3>azucar</h3></div>`)
}
else if(otroProducto == 'jamon'){
    otroProducto=carrito(productos[9])
imprimir(`<div><h3>jamon</h3></div>`)
}
}





    /*
let otroIngreso
if(otroIngreso =='galletitas'){
    carrito(ingreso);
}
else if(ingreso=='queso'){
    carrito(ingreso);
}
else if(ingreso=='yerba'){
    carrito(ingreso);
}
else if(ingreso=='sopa'){
    carrito(ingreso);
}
else if(ingreso=='mermelada'){
    carrito(ingreso);
}
else if(ingreso=='chocolate'){
    carrito(ingreso);
}
else if(ingreso=='manteca'){
    carrito(ingreso);
}
else if(ingreso=='azucar'){
    carrito(ingreso);
}
else if(ingreso=='jamon'){
    carrito(ingreso);
}
*/














/*
let ingreso=prompt('ingrese el primer producto');
if(ingreso != 'FIN'){
    carrito(ingreso);
}
while(true){
    let otroProducto = prompt('ingrese otro producto')
    if(otroProducto != 'FIN'){
        carrito(otroProducto);
        imprimir(ingreso,otroProducto);
        }
    if(otroProducto == 'FIN'){
        alert('compra finalizada');
        break;
    } 
    }

*/


     
    




















/*for (producto of productos){
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3>${producto.nombre}</h3> <h5>Id:${producto.id}</h5> <p>${producto.precio}</p>`;
    document.body.appendChild(contenedor)
}*/



 /*   
const result = productos.filter(blacky => blacky.precio <= 200 );
console.log(result);  
    
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
                
            }*/