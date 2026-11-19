// Bonus 1 · La pagella
// La consegna è nel README, alla voce "Bonus 1 · La pagella".

/*
  STEPS
  1 -chiediamo di darci un voto da 1 a 10
  2 -poi mettiamo dei parametri in cui il boto deve rientrare 
  3 -definiamo i limiti per ogni voto
  4 -mostriamo in output per ogni voto la valutazione
*/

// # Fase di preparazione
const voto = prompt(`Dammi un voto da 1 a 10`);

// # Fase di raccolta dati
if (voto === null || voto.trim() === "" || isNaN(voto) || Number(voto) < 1 || Number(voto) > 10) {
  alert(`Voto non valido`);
} else {
  if (Number(voto) < 6) {
    alert(`Voto insufficiente`);
  } else if (Number(voto) < 8) {
    alert(`Voto sufficiente`);
  } else if (Number(voto) < 10) {
    alert(`Voto buono`);
  } else {
    alert(`Voto ottimo`);
  }
}

// # Fase di elaborazione


// # Fase di output

