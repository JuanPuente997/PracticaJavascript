const productos=[
    {id:1, name:'fideos', price:150},
    {id:2, name:'queso', price:250},
    {id:3, name:'galletitas', price:100},
    {id:4, name:'gaasdasd', price:100},

];

// POR MAS QUE EL TIEMPO ASIGNADO SEA 0 EL PROCESO ASINCRONICO VA A SER EL ULTIMO EN EJECUTARSE

console.log("Inicia proceso")
setTimeout(()=>{
    console.log("Mitad de proceso")
},0)
console.log("Fin proceso")


setTimeout(()=>{
    console.log("Proceso asincrónico")
},3000)

const traerProductos = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const productos=[
                {id:1, name:'fideos', price:150},
                {id:2, name:'queso', price:250},
                {id:3, name:'galletitas', price:100},
                {id:4, name:'gaasdasd', price:100},
            
            ]
        if(productos.length>0){
        resolve(productos)
        }else{
            reject('algo falló.')
        }
        },4000)
    })
}
traerProductos().then((respuesta)=>{
    console.log(respuesta)
})



function respuestaClickFideos(trago){
    console.log('Fideos')
    swal ( " Agregaste Fideos!! " ) ;
}
const agregarAlCarritoFideos = document.getElementById("botonUno")
agregarAlCarritoFideos.addEventListener("click",respuestaClickFideos);


function respuestaClickQueso(){
    console.log('Queso')
    swal ( " Agregaste Queso!! " ) ;
}
const agregarAlCarritoQueso = document.getElementById("botonDos")
agregarAlCarritoQueso.addEventListener("click",respuestaClickQueso);


function respuestaClickgalletitas(){
    console.log('galletitas')
    swal ( " Agregaste Galletitas!! " ) ;
}
const agregarAlCarritoGalletitas = document.getElementById("botonTres")
agregarAlCarritoGalletitas.addEventListener("click",respuestaClickgalletitas);

let contador =1;
let agregar = document.getElementById("botonUno").addEventListener('click',()=>{
    localStorage.setItem('fideos',contador++)
})



let agregarDos = document.getElementById("botonDos").addEventListener('click',()=>{
    localStorage.setItem('queso',contadorDos++)
})

let contadorDos =1;

let agregarTres = document.getElementById("botonTres").addEventListener('click',()=>{
    localStorage.setItem('galletitas',contadorTres++)
})

let contadorTres =1;
