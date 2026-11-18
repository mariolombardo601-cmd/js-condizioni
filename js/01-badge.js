// Traccia 01 · Il badge
// La consegna è nel README, alla voce "01 · Il badge".

/*
  STEPS
  1 -definiamo le costanti
  2 -stampiamo la frase completa usando il +
  3 -stampiamo la la stessa frase ma usando il 
  4 -adesso andiamo a mostrare a schermo la nostra eta tra 10 anni
*/

// # Fase di preparazione

const etaFutura = 10;

// # Fase di raccolta dati

const nomeUtente = 'mario'
const etaUtente = 20;
const lavoroUtente = 'lo sviluppatore';

// # Fase di elaborazione

const somma = etaUtente + etaFutura;

// # Fase di output

// # console.log("Ciao mi chiamo " + nomeUtente + ", ho " + etaUtente + " anni e faccio  " + lavoroUtente + ".");
console.log(`Ciao mi chiamo ${nomeUtente}, ho ${etaUtente} anni e faccio ${lavoroUtente}.`);
console.log(`fra 10 anni ne avro: ${somma}`);