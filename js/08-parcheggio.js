// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
  1 -chiediamo il numero di ore 
  2 -andiamo a scrivere le condizione per il quale il valore sta dentro le condizioni
  3 -andiamo a mettee tutte le codizione e i vari prezzi da poagare per ogni ora selezionata 
  4 -mostriamo all'utente quanto paga
*/

// # Fase di preparazione
const ore = prompt(`quante ore resta l'auto ?`)

// # Fase di raccolta dati
if (ore === null || ore <= 0 || isNaN(ore) || ore.trim() === "") {
  console.log(`scrivi il numero di ore`);
} else if (ore <= 2 && ore > 0) {
  console.log(`da pagare: 5 €`);
} else if (ore > 2 && ore <= 5) {
  console.log(`da pagare: 10 €`);
} else if (ore > 5) {
  console.log(`da pagare: 15 €`);
}

// # Fase di elaborazione


// # Fase di output

