'use strict'

// Creo un'Array con le mail che possono accedere
const emailIscritti = ['esempio.uno@gmail.it', 'esempio.due@gmail.it', 'esempio.tre@gmail.it'];
console.log(emailIscritti)
// Chiedo all'utente di inserire la sua mail con un prompt
const emailUtente = (prompt('Inserici la tua email'));

// Verifico con un ciclo che la mail inserita sia presente all'interno dell'Array
for (let i = 0; i < emailIscritti.length; i++) {
    // In caso positivo stampo in console "Email trovata" 
    if (emailUtente === emailIscritti[i]) {
        console.log('Email Trovata: ', emailUtente);
        break;
    }
    // in caso negativo stampo in console "Email non trovata"
    else {
        console.log('Email non Trovata: ', emailUtente);
        break;
    }

}

