const posicionInicial = Math.floor(Math.random() * 360);
const vueltasAdicionales = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
const anguloFinal = (posicionInicial + (vueltasAdicionales * 360)) % 360;
console.log("Posición o ángulo Inicial G.A.:", posicionInicial);
console.log("Valor Aleatorio Generado en Grados:", vueltasAdicionales * 360);
console.log("Ángulo Final:", anguloFinal);