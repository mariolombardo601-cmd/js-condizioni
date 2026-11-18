// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -creiamo una costante mancia 
  2 -prendiamo in input il conto e le persone 
  3 -sommiamo la mancia e dividiamo in base a quante persone sono 
  4 -mostriamo a schermo quanto deve agare ogni persona
*/

// # Fase di preparazione

const mancia = 10;

// # Fase di raccolta dati

const conto = Number(prompt("dimmi quanto pagate "));
const numeroPersone = Number(prompt("dimmi quanti siete"));

// # Fase di elaborazione

const totaleConto = mancia + conto;
const aTesta = totaleConto / numeroPersone;

// # Fase di output

alert(`a testa:  ${aTesta.toFixed(2)}  €`);
