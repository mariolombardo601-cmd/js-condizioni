// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 -ci faccimao dare il nome utente e la password
  2 -mettimamo una condizione per la quale se allo stesso tempo nome utente e password 
  sono corretti si puo accedere 
  3 - in caso contrario mostriamo un messaggio di errore 
  4 -
*/

// # Fase di preparazione

const nome = prompt("dimmi il tuo nome utente");
const password = prompt("dimmi la tua password");
// # Fase di raccolta dati

if (nome === "admin" && password === "1234") {
  alert(`Login effettuato`);
} else {
  alert(`credenziali errate`);
}

// # Fase di elaborazione


// # Fase di output

