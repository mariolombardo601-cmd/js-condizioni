// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 -diamo un contenitore al numero pescato dal math
  2 -se il numero e minore di 0.5 testa senno croce
  3 -andiamo a mettere degli alter per il risultato
  4 -e infine con un consol log mostriamo il numero del math
*/

// # Fase di preparazione
const n = Math.random();

// # Fase di raccolta dati
if (n < 0.5) {
  alert(`testa`);
} else {
  alert(`croce`);
}

// # Fase di elaborazione


// # Fase di output
console.log(n);
