// let ingresoUsuario = prompt("Ingrese su nombre de Usuario");
// let ingresoContrasenia = prompt("Ingrese su Contraseña");
// let zona = "2000";
// let verificarZona = prompt("Ingrese su Código Postal para verificar disponibilidad de envíos");
// let ingresoValido = ingresoUsuario == pepitoJuarez && ingresoContrasenia == rock2024; 

// if (ingresoValido && verificarZona == zona) {
//     alert("Bienvenido " + pepitoJuarez);
// } else {
//     alert("No disponemos de envío para su zona");
// }




let cliente= prompt("Ingresa tu nombre");
alert ("Bienvenido/a " + cliente);
let cantCamisetas = prompt("Escribe la cantidad de camisetas que deseas");
let cantShorts = prompt("Escribe la cantidad de shorts que deseas");
cantCamisetas = parseInt(cantCamisetas);
cantShorts = parseInt(cantShorts);

let result = cantCamisetas + cantShorts;
alert("El total de productos de tu carrito de compras es " + result);

let talleCamisetas = "L";
let talleDisponible = false;

for (let i = 0; i >= 0 ; i--) {
    let seleccionTalle = prompt("Selecciona el talle de las camisetas");
    if (talleCamisetas === seleccionTalle) {
        alert ("Talle disponible");
        talleDisponible = true;
        break;
    } else {
        alert ("Talle no disponible. Vuelva a empezar");
    }
}





let ingreso = prompt("Seleccione medio de pago: 1) Transferencia - 2) Tarjeta de débito - 3) Tarjeta de crédito");
if (ingreso === "1") {
    alert ("Vas a abonar con transferencia");
} else if (ingreso === "2") {
    alert ("Vas a abonar con tarjeta de débito");
} else if (ingreso === "3") {
    alert ("Vas a abonar con tarjeta de crédito");
} else {
    alert ("Medio de pago no disponible");
} 

function opinion (puntuacion) {
    alert ("Gracias por opinar! Tu puntuación sobre nuestra tienda ha sido " + puntuacion);
}
let puntuacionCliente = prompt("Gracias por confiar en nosotros! Te pedimos que nos dediques dos minutos más y nos puntúes del 1 al 10!")
opinion (puntuacionCliente)
