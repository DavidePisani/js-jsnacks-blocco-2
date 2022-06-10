// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// valore iniziale su cui sommare i numeri
let sommaNumber = 0;

// cicolo for

// for( let i = 0; i < 5; i++){
//     let userNumber = parseInt(prompt('Inserisci 5 cifre singloramente'));
//     sommaNumber += userNumber;
// }
//     console.log(sommaNumber);

// dichiarto la i fuori dal cicolo while,
//  nelle parentesi la condizione e all'interno la funzione con anche il ciclo (i++)
    
    let i = 0
    while(i < 5){
        let userNumber = parseInt(prompt('Inserisci 5 cifre singloramente'));
        sommaNumber += userNumber;
        i++
    }

    console.log(sommaNumber);
