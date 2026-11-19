// Traccia 10 · Il bancomat
// La consegna è nel README, alla voce "10 · Il bancomat".

/*
  STEPS
  1 -chiedo saldo e quanto si vuole prelevare 
  2 -inseriamo tutti i controlli per far si che i dati dati dall'utente siano validi
  3 -annidiamo i vari casi 
  4 -mostriamo a schermo le solzioni
*/

// # Fase di preparazione
const saldo = prompt(`Dimmi il saldo del tuo conto`);
const prelievo = prompt(`Quanto vuoi prelevare`);

// # Fase di raccolta dati
if (saldo === null || saldo.trim() === "" || isNaN(saldo) || Number(saldo) < 0) {
  alert(`Importo non valido`);
} else {
  if (prelievo === null || prelievo.trim() === "" || isNaN(prelievo) || Number(prelievo) <= 0) {
    alert(`Importo non valido`);
  } else {
    if (Number(saldo) >= Number(prelievo)) {
      const nuovoSaldo = Number(saldo) - Number(prelievo);
      alert(`Prelievo effettuato. Nuovo saldo: ${nuovoSaldo} €`);
    } else {
      alert(`Saldo insufficiente`);
    }
  }
}

// # Fase di elaborazione


// # Fase di output

