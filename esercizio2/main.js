'use strict'

// Chiedo al giocatore di lancire i dadi con un allert
const start = (alert('Clicca "OK" per lanciare i Dadi'));

// Definisco due variabili punteggio per il giocatore e per il computer
const giocatore = (Math.floor(Math.random() * 6));
const computer = (Math.floor(Math.random() * 6));
console.log('Giocatore: ', giocatore);
console.log('Computer: ', computer);

// Confronto con una condizione il punteggio più alto
if (giocatore > computer) {
    console.log('Hai Vinto');
}
else if (giocatore === computer) {
    console.log('Pareggio');
}
else {
    console.log('Hai Perso')
}
