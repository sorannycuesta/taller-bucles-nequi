const movimientos = [
    { id: 1, tipo: "transferencia", monto: 15000 },
    { id: 2, tipo: "retiro", monto: 0 }, 
    { id: 3, tipo: "comercio", monto: 4500 }, 
    { id: 4, tipo: "deposito", monto: 0 }, 
    { id: 5, tipo: "comercio", monto: 12000 }  
];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
    // --- PARTE A: Filtrar movimientos de \$0 ---
    if (movimientos[i].monto === 0) {
        console.log(`Movimiento vacío ignorado en la posición: ${i}`);
        continue; // Salta el resto de esta vuelta y pasa a la siguiente
    }

    // --- PARTE B: Buscar el primer pago a comercio ---
    if (movimientos[i].tipo === "comercio") {
        posicionEncontrada = i;
        break; // Detiene el bucle por completo
    }
}

console.log("\n--- RESULTADO DE LA BÚSQUEDA ---");
if (posicionEncontrada !== -1) {
    console.log("Pago a comercio encontrado en la posición:", posicionEncontrada);
    console.log("Detalle del movimiento:", movimientos[posicionEncontrada]);
} else {
    console.log("No se encontró ningún pago a comercio válido.");
}
