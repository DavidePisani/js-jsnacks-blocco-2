// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const longArrey = [15, 34, 94, 68, 12, 75, 64, 98, 24, 36, 47, 89];
const shortArrey = [12, 39, 44, 35]
console.log(shortArrey)
// Finchè l'array piccolo non ha tanti elementi quanto l'arrey grande
while(shortArrey.length < longArrey.length) {
    // genero un numero random
    let casualNumber = Math.floor(Math.random() * 101);
    // aggiungo un numero random alla shortArrey
    shortArrey.push(casualNumber);

}
    // stampo in console
    console.log(longArrey);
    console.log( shortArrey);