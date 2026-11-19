// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
  1 -prendiamo i dati in entrata
  2 -andiamo a mettere una serie di arametri da rispettae tra cui gli spazi a vuoto col trim il null
  3 -in seguito andiamo mostrare a schermo tutte le notifiche per le varie risposte date dall'utente 
  4 -
*/

const altezza = prompt("Quanto sei alto?");
const eta = prompt("Quanti anni hai?");

// # Fase di raccolta dati
if (
  altezza === null || eta === null ||
  altezza.trim() === "" || eta.trim() === "" ||
  isNaN(altezza) || isNaN(eta)
) {
  alert(`Dati non validi`);
} else if (Number(altezza) >= 140 && Number(eta) >= 14) {
  alert(`Puoi salire!`);
} else {
  alert(`Mi dispiace, non puoi salire`);
}

// # Fase di elaborazione


// # Fase di output