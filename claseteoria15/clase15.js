/*
const buscarUnProducto = () => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=sillas')
    .then((response) => response.json())
    .then(informacion => {
        let acumulador = ``;
        informacion.results.forEach((producto) => {
            console.log(producto)
            acumulador +=`<div class = "card">
            <img src="${producto.thumbnail}">
            <h2>${producto.title}</h2>
            <h2>$${producto.price}</h2>
            </div>`
        });
       document.getElementById('seccionCard').innerHTML=acumulador;
    })
}
buscarUnProducto();
*/
const buscarUnProducto = () => {
    fetch('productos.json')
    .then((response) => response.json())
    .then(informacion => {
        let acumulador = ``;
        informacion.forEach((producto) => {
            console.log(producto)
            acumulador +=`<div class = "card">
            <h2>${producto.title}</h2>
            <h2>$${producto.price}</h2>
            </div>`
        });
       document.getElementById('seccionCard').innerHTML=acumulador;
    })
}
buscarUnProducto();