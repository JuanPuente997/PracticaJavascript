//                  DOM
/*
const navbar = document.getElementByClassName('navbar');
console.log('navbar);

getElementByClassName -> me permite acceder a un elemento a travez de una clase

getElementById -> me permite acceder a un elemenbto a travez de un id

querySelector -> en caso de querer llamar a una clase luego del selector va () y dentro un punto si lo que quiero llamar es una clase o un # en caso de querrer llamar un Id

querySelectorAll -> en caso de que quiera llamar a todos los elementos que tengan una misma clase 

const encabezado = (document.querySelectot('h1)
textContent ='nuevo heading');
de esta forma mofico un texto desde js accediendo al elemento h1 y mediante textContent agrego el texto

const elemento = document.querySelector('#elemento');
elemento.remove();
de esta forma elimino un elemento

let agregado = document.createElement('p');
agregado.innerHTML = '<h5> parrafo x </h5>';

                   Ejemplo

let listaVacia = document.querySelector('#listaVacia');

let otrosCursos = [
    'diseño',
    'marketing',
    'producto',
    'inversiones'
];

for (let curso of otrosCursos){
    let listado = document.createElement('li');
    listado.innerHTML = curso;
    listaVacia.oppenChild(listado);
}

                   EjemploDos

let cursos = [
    {id: 1, titulo: 'diseño', precio: 1300},
    {id: 2, titulo: 'marketing', precio: 1800},
    {id: 3, titulo: 'producto', precio: 2200},
];

for (curso of cursos){
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `<h3>${curso.titulo}</h3>
    <p>${curso.precio}</p>`;
    document.body.appendChild(contenedor);
}

*/
