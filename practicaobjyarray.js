const productos =[
{id:1,
nombre: 'galletita,',
precio:120,
stock:0
},
{id:2,
nombre:'queso',
precio:300,
stock:2
},
{
id:3,
nombre:'fideos',
precio:150,
stock:7
},
{
id:4,
nombre:'arroz',
precio:130,
stock:3
},
    {
id:5,
nombre:'pure de tomate',
precio:230,
stock:1
}
]
const respuesta=productos.filter(indice=>indice.id>2);
console.log(respuesta)

const respuestaDos=productos.filter(name=>name.nombre =='arroz');
console.log(respuestaDos)

const respuestaTres=productos.filter(cantidad=>cantidad.stock==0);
console.log(respuestaTres)