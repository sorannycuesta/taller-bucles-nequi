const prompt = require('prompt-sync')();

let pinCorrecto = "120823";
let intento = prompt("Por favoringrese su PIN: ");
while (intento !== pinCorrecto){
    console.log("PIN incorrecto. Intentelo de nuevo");
    intento = prompt("Por favoringrese su PIN:");

}
console.log("Bienvenid@ a la app");