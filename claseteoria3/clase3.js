
let ingreseUnNumero = prompt("ingrese un valor manor a diez");
while(ingreseUnNumero <= 10){
    alert(ingreseUnNumero ++);
}



let nombre = prompt('ingrese tres nombres luego escriba ESC');
if (nombre !='ESC'){
    console.log('Bienvenido '+nombre);
}
else{
    alert('usted ingreso ESC')
    breack;
}
let segundoNombre = prompt('ingrese otro nombre');

    if(segundoNombre != 'ESC'){
        console.log('Bienvenido ' +segundoNombre);
    }   
    else{
        alert('ingresaste ESC')
        breack;
} 
let tercerNombre = prompt('ingrese el ultimonombre');
    if(tercerNombre != 'ESC'){
        console.log('Bienvenido '+tercerNombre)
    }
else{
    (alert('Usted ingreso ESC'))
}



let ingreseArticulos = prompt('ingrese 3 articulos luego escriba ESC')

while(ingreseArticulos != 'ESC'){
        alert('usted ingreso ' + ingreseArticulos)
        let ultimoArticulo 
        let segundoArticulo = prompt('ingrese el siguiente articulo')

        if(segundoArticulo != 'ESC'){
            alert('usted ingreso ' + segundoArticulo);
    }
    else if(segundoArticulo == 'ESC'){
        alert('finalizo el ingreso de articulos');
    break;
    }
    
    ultimoArticulo=prompt('ingrese el ultimo articulo')
    
    if(ultimoArticulo != 'ESC'){
        alert('usted ingreso '+ultimoArticulo);
        alert('los articulos ingresados son '+ ingreseArticulos+' '+ segundoArticulo+' '+ ultimoArticulo);
    }
    else if(ultimoArticulo == 'ESC'){
        alert('finalizo el ingreso de articulos');
    }

    break;
}








let valor = parseInt(prompt('ingrese un numero'));
for(let i = 1; i <= valor; i++){
    alert('hola');
}
