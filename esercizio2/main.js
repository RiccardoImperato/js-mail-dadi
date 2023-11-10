'use strict'

// Variabili giocatore, computer e button
const player = document.querySelector('.player');
const com = document.querySelector('.com');
const risultato = document.querySelector('.risultato');
const startButton = document.querySelector('#start');
// Evento lancio dadi
startButton.addEventListener("click", function () {
    // Punteggio giocatore
    const giocatore = Math.floor(Math.random() * 6) + 1;
    // Punteggio computer
    const computer = Math.floor(Math.random() * 6) + 1;
    console.log('Giocatore: ', giocatore);
    console.log('Computer: ', computer);
    // Valori nel DOM
    player.innerHTML = ('Giocatore: ' + giocatore);
    com.innerHTML = ('Computer: ' + computer);
    // Condizioni
    if (giocatore > computer) {
        console.log('Hai Vinto');
        risultato.innerHTML = ('Hai Vinto!');
    }
    else if (giocatore === computer) {
        console.log('Pareggio');
        risultato.innerHTML = ('Pareggio!');
    }
    else {
        console.log('Hai Perso');
        risultato.innerHTML = ('Hai Perso!');
    }
})
