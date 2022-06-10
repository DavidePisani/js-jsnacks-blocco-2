// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

let arreyNumbers = []

let sommaNumber = 0;

while(sommaNumber < 50) {

    let userNumber = parseInt(prompt('dammi un unemro'));
    arreyNumbers.push(userNumber)

    let singleNumber = userNumber;

   sommaNumber += singleNumber;

   console.log(sommaNumber)
}

