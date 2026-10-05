//
const movimientos = [10, -5, 45, 32, 65, -25];
let total = 0;
let cantidadRetiros = 0;
for (let i= 0; i <movimientos.length; i++){
    total += movimientos[i];
    if (movimientos[i] < 0) {
        cantidadRetiros++;

    }
} 
console.log("El saldo total es de: ",total);
console.log("Su numero de retiro es: ",cantidadRetiros);