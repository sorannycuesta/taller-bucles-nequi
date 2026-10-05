const prompt = require('prompt-sync')();

const usuarios = [
    { id: 1, tipo: "usuario1", nombre: "Soranny", saldo: 50000, movimientos: [{ monto: 15000 }, { monto: 4500 }] },
    { id: 2, tipo: "usuario2", nombre: "Brayan", saldo: 20000, movimientos: [{ monto: 0 }, { monto: 12000 }] }, 
    { id: 3, tipo: "usuario3", nombre: "Sareth", saldo: 100000, movimientos: [{ monto: 8000 }] }, 
    { id: 4, tipo: "usuario4", nombre: "Sary", saldo: 0, movimientos: [] }
];

for (let i = 0; i < usuarios.length; i++) {
    const usuarioActual = usuarios[i];

    let totalUsuario = 0; 

    // AQUÍ ESTABA EL ERROR: Cambia "movimientos.length" por "usuarioActual.movimientos.length"
    for (let j = 0; j < usuarioActual.movimientos.length; j++) {
        // Y aquí sumas directamente el monto del movimiento de ese usuario
        totalUsuario += usuarioActual.movimientos[j].monto;
    }

    console.log(`Usuario: ${usuarioActual.nombre} | Total: $${totalUsuario}`);
}
