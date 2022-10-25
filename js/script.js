let ingreso = prompt ("Ingrese su nombre");
let bienvenida = "Bienvenido/a al concesionario " + ingreso;
alert (bienvenida);

let edadPersona = prompt ("Ingrese su edad")
let edadComprar = 18;
if (edadPersona < edadComprar){
    alert ("No podes comprar un vehiculo");
}
else{ (edadPersona >= edadComprar)
    alert ("Podes comprar un vehiculo");
}

let categoriaVeh = prompt ("Ingrese la categoria de vehiculo que busca");
if (categoriaVeh == "auto" , "Auto" , "AUTO"){
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

document.getElementsById("Nombre").value = "";
document.getElementsById("Apellido").value = "";
document.getElementsById("Email").value = "";
document.getElementsById("Contraseña").value = "";

let boton =
document.getElementById("btnPrincipal")
    boton.addEventListener("click", despedida)
function despedida (){
    alert ("Gracias por su visita")
}

let nombreUsuario = document.getElementById ("name");
let btnPrincipal = document.getElementById ("btnPrincipal");
btnPrincipal.addEventListener("click", ()=>{
    localStorage.setItem("nombre", nombreUsuario.value);
})

let apellidoUsuario = document.getElementById ("apell");
btnPrincipal.addEventListener("click", ()=>{
    localStorage.setItem("apellido", apellidoUsuario.value);
})

let emailUsuario = document.getElementById ("email");
btnPrincipal.addEventListener("click", ()=>{
    localStorage.setItem("email", emailUsuario.value);
})

let contaseñaUsuario = document.getElementById ("password");
btnPrincipal.addEventListener("click", ()=>{
    localStorage.setItem("contraseña", contraseñaUsuario.value);
})