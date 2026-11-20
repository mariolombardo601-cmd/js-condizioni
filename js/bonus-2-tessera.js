// Bonus 2 · La tessera fedeltà
// La consegna è nel README, alla voce "Bonus 2 · La tessera fedeltà".

/*
  STEPS
  1 -prendiamo in input il prezzo e la risposta 
  2 -se ha la tessera applichiamo lo sconto
  3 -tutto cio che non e si alla risposta della tessera viene considerato come no 
  4 -in fine andiamo a mostrare il prezzo o scontato o meno con  due decimali 
*/

// # Fase di preparazione
const prezzo = Number(prompt(`dimmi il prezo di un prodotto`));
const risposta = prompt(`hai la tessera fedeltà`);
// # Fase di raccolta dati
if (risposta === "si") {
  prezzoScontato = prezzo * 0.9;
  alert(`Prezzo da pagare: ${prezzoScontato.toFixed(2)} €`);
} else {
  alert(`Prezzo da pagare: ${prezzo.toFixed(2)} €`);
}
// # Fase di elaborazione


// # Fase di output

