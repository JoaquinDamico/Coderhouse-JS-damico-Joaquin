let user = prompt ("Ingrese su nombre")
alert ( " Bienvenido/a " + user );
let opcion = prompt ("¿Que marca de auto busca?:\n1- Chevrolet \n 2- Toyota \n 3- Volkswagen");
switch (opcion){
    case "1":
        alert ("Selecciono la marca Chevrolet");
        break
    case "2":
        alert ("Selecciono la marca Toyota");
        break
    case "3":
        alert ("Selecciono la marca Volkswagen");
        break
    default:
        alert ("Opcion invalida");
}
let nuevo = 0;
let usado = 50000;
let viejo = 150000;
let vehiculo = parseInt (prompt ("Ingrese la cantidad de kilometros que desea"));

if (vehiculo = nuevo && vehiculo < usado && vehiculo < viejo) {
    alert ("Selecciono un auto 0km");
}else if ( vehiculo > nuevo && vehiculo < viejo && vehiculo <= usado){
    alert ("Selecciono un auto usado");
}else if (vehiculo > nuevo && vehiculo > usado && vehiculo >= viejo){
    alert ("Selecciono un auto viejo");
}else{
    alert ("Opcion invalida")
}
    
