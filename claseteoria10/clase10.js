const productos=[
    {id:1, name:'fideos', price:150},
    {id:2, name:'queso', price:250},
    {id:3, name:'galletitas', price:100},
    {id:4, name:'gaasdasd', price:100},

];


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
