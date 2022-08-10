const productos=[
    {id:1, name:'fideos', price:150},
    {id:2, name:'queso', price:250},
    {id:3, name:'galletitas', price:100},
    {id:4, name:'gaasdasd', price:100},

];



function respuestaClickFideos(){
    console.log('Fideos')}
const agregarAlCarritoFideos = document.getElementById("botonUno")
agregarAlCarritoFideos.addEventListener("click",respuestaClickFideos);


function respuestaClickQueso(){
    console.log('Queso')}
const agregarAlCarritoQueso = document.getElementById("botonDos")
agregarAlCarritoQueso.addEventListener("click",respuestaClickQueso);


function respuestaClickgalletitas(){
    console.log('galletitas')}
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






//seter
/*
for(producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>${producto.name}</h3>
    <p>${producto.price}</p>
`;
document.body.appendChild(contenedor)
}
*/


/*                           ASI COMO ESTA FUNCIONA
function respuestaClick(){
    console.log('agregado')
}
const agregarAlCarrito = document.getElementById("boton")
//console.log(boton)
//boton.onclick = respuestaClick;
agregarAlCarrito.addEventListener("click",respuestaClick);
*/

//                          Solucion