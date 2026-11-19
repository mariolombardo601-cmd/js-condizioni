// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 -diamo un prezzo di base alla valigia 
  2 -chiediamo quanto pesa la valigia
  3 -se la soglia viene superata aggiungiamo un supplemento
  4 -mostriamo a schermo il prezzo del biglietto
*/

// # Fase di preparazione
const biglietto = 36;

// # Fase di raccolta dati
const kgValigia = Number(prompt("quanto pesa la tua valigia")); 18

// # Fase di elaborazione
if (kgValigia > 23) {
  const prezzoSupp = biglietto + 20
  alert(`prezzo del biglietto: ${prezzoSupp} $`);
} else {
  alert(`prezzo del biglietto: ${biglietto} $`);
}

// # Fase di output

