'use strict'

// Creo un'Array con le mail che possono accedere
const emailIscritti = ['esempio.uno@gmail.it', 'esempio.due@gmail.it', 'esempio.tre@gmail.it'];
console.log(emailIscritti);
// Chiedo all'utente di inserire la sua mail 
const emailUtente = document.querySelector('#user');
// Bottone Log in
const logInButton = document.querySelector('#log-in');
// Risultato
const risultato = document.querySelector('.risultato');
// Evento bottone Log in 
logInButton.addEventListener("click", function () {
    const userValue = emailUtente.value
    // Verifico con un ciclo che la mail inserita sia presente all'interno dell'Array
    for (let i = 0; i < emailIscritti.length; i++) {
        // In caso positivo stampo in console e nel DOM "Email trovata" 
        if (emailIscritti[i] === userValue) {
            console.log('Email Trovata: ', userValue);
            risultato.innerHTML = ('Email Trovata');
            break;
        }
        // In caso negativo stampo in console e nel DOM "Email non trovata" 
        else {
            console.log('Email non Trovata');
            risultato.innerHTML = ('Email non Trovata');
        }
    }
})

