const prompt = require('prompt-sync')();
let opcion;

do {
    console.log("\n--- MENÚ NEQUI ---");
    console.log("1. Ver saldo");
    console.log("2. Enviar dinero"); // Corregido según PDF
    console.log("3. Recargar");      // Corregido según PDF
    console.log("4. Salir");
    
    opcion = prompt("Selecciona una opcion (1-4): ");

    if (opcion === "1") {
        console.log("\n>>> Tu saldo actual es de: $0");
    } else if (opcion === "2") {
        console.log("\n>>> ¿A qué número vas a enviar dinero?");
    } else if (opcion === "3") {
        console.log("\n>>> ¿Cuánto dinero vas a recargar?");
    } else if (opcion === "4") {
        console.log("\n>>> Gracias por usar Nequi. ¡Hasta luego!");
    } else {
        console.log("\n>>> Opción no válida. Intenta de nuevo.");
    }

} while (opcion !== "4");
