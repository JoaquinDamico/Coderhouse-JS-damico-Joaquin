alert ("Para ingresar debe registrarse");
let cliente = prompt ("Ingrese su nombre");
alert ("Bienvenido/a " + cliente + " a nuestro concesionario");

let categoriaVeh = prompt ("Ingrese la categoria de vehiculo que busca");
if (categoriaVeh == "auto"){
    alert ("La categoria seleccionada es auto")
} else{
    alert ("Categoria no disponible")
}
let opcion = prompt ("¿Que marca de auto esta buscando?: \n1- Volkswagen \n2- Chevrolet \n3- Toyota");
switch (opcion){
    case "1":
        alert ("Seleccionó la marca Volkswagen");
        break;
    case "2":
        alert ("Seleccionó la marca Chevrolet");
        break;
    case "3":
        alert ("Seleccionó la marca Toyota");
        break
        default:
        alert ("Opcion invalida")
}
const volkswagen = {
    auto1: "Golf MK7",
    auto2: "Golf MK6",
    auto3: "Golf MK5",
}
const chevrolet = {
    auto1: "Cruze",
    auto2: "Onix",
    auto3: "Camaro",
}
const toyota = {
    auto1: "Etios",
    auto2: "Supra Mk4",
    auto3: "Toyota 86",
}

function marca (auto1, auto2, auto3){
    this.auto1 = auto1;
    this.auto2 = auto2;
    this.auto3 = auto3;
}
const audi = new marca ("Audi A3", "Audi R8", "Audi RS5");
const nissan = new marca ("Skyline r35", "Skyline r34", "Silvia s15");

console.log (volkswagen);
console.log (chevrolet);
console.log (toyota);
console.log (audi);
console.log (nissan);

let despedida = "Gracias por elegirnos"
console.log (despedida.toUpperCase());