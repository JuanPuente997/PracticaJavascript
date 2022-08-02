
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