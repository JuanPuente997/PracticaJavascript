/*
const productos=[
    {id:1, name:'fideos', price:150},
    {id:2, name:'queso', price:250},
    {id:3, name:'galletitas', price:100},

]

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
function respuestaClickFideos(){
    console.log('Fideos')
}
const agregarAlCarritoFideos = document.getElementById("botonUno")
agregarAlCarritoFideos.addEventListener("click",respuestaClickFideos);

function respuestaClickQueso(){
    console.log('Queso')
}
const agregarAlCarritoQueso = document.getElementById("botonDos")
agregarAlCarritoQueso.addEventListener("click",respuestaClickQueso);

function respuestaClickgalletitas(){
    console.log('galletitas')
}
const agregarAlCarritoGalletitas = document.getElementById("botonTres")
agregarAlCarritoGalletitas.addEventListener("click",respuestaClickgalletitas);