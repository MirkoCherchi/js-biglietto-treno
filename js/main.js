'use strict';

// # Calcolo del prezzo del biglietto del treno

// 1. Chiedo al passeggero tramite prompt quanti km dovrà percorrere.
// 2. Chiedo al passeggero tramite prompt l'età.
// 3. Calcolo il prezzo del biglietto sulla base di 0.21 € al km.

// ## Definizione

// 1. SE il passeggero ha un età inferiore a 18 anni avrà uno sconto del 20% sul prezzo del biglietto
// 2. ALTRIMENTI SE il passeggero ha un età superiore a 65 anni avrà uno sconto del 40% sul prezzo del biglietto
// 3. ALTRIMENTI pagherà l'importo del biglietto per intero senza sconti


const percorsoKm = prompt ('Quanti km devi percorrere?');
console.log('Km da percorrere: ', parseInt(percorsoKm), 'Km');
const etaPasseggero = prompt ('Quanti anni hai?');
console.log('Età passeggero: ', parseInt(etaPasseggero));

const prezzo = (parseInt(percorsoKm) * 0.21);
console.log('Prezzo intero: ', prezzo.toFixed(2), '€');

if (parseInt(etaPasseggero) < 18) {
    console.log('Sconto minorenne: ', (prezzo - prezzo / 100 * 20).toFixed(2), '€');}
else if (parseInt(etaPasseggero) > 65){
    console.log('Sconto Over 65: ', (prezzo - prezzo / 100 * 40).toFixed(2), '€');}



  



