// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 -chiediamo la temperatura 
  2 -se sotto una soglia entriamo in un if senno in un altro
  3 -andiamo a mettre delle barrire per avere solo le risposte che cerchiamo
  4 -mostriamo con gli alert cio che volgiamo dire
*/

// # Fase di preparazione
const temperatura = prompt(`Quanti gradi fanno fuori?`);

// # Fase di raccolta dati
if (temperatura === null || temperatura.trim() === "" || isNaN(temperatura)) {
  alert(`scrivi la temperatura`)
} else if (Number(temperatura) >= 15) {
  alert(`Vai leggero`);
} else {
  const risposta = prompt(`Piove? (si/no)`);

  if (risposta === "si") {
    alert(`Metti l'impermeabile`);
  } else if (risposta === "no") {
    alert(`Metti la giacca`);
  } else {
    alert(`Rispondi con si o no`);
  }
}
// # Fase di elaborazione


// # Fase di output

