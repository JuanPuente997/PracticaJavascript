
let juanes = document.getElementsByClassName("juan")
// const arr = [].concat(arr.push(button), arr.push(button), arr.push(button)
const arr = [].concat(...juanes)
arr.map(juan => juan.onclick=() =>{console.log('agregaste fideos con tuco')});

let juanesUno = document.getElementsByClassName("juan1")
const arrUno = [].concat(...juanesUno)
arrUno.map(juan => juan.onclick=() =>{console.log('agregaste galletitas')});

let juanesDos = document.getElementsByClassName("juan2")
const arrDos = [].concat(...juanesDos)
arrDos.map(juan => juan.onclick=() =>{console.log('agregaste queso')});




/*onclick.addEventListener("click", respuestaCLick)
function respuestaCLick(){
    console.log('agregado')
}*/



//Otro ejemplo funcional de eventos (tiene sinergia con el archivo html de la clase 10 pero lo dejo aca para tener todo en un mismo lugar)

/*
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
*/