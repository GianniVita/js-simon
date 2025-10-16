console.log("it works");

/* **Descrizione:**
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form. 

Consigli del giorno:
 
- Pensate prima in italiano.
- Dividete in piccoli problemi la consegna.
- Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

 */

//Crea una costante che generi 5 numeri casuali con mathRandom
const casualNumberOne = Math.floor(Math.random() * 101);// Returns a random integer/number from 0 to 100:
console.log(casualNumberOne);
const casualNumberTwo = Math.floor(Math.random() * 101);
const casualNumberThree = Math.floor(Math.random() * 101);
const casualNumberFour = Math.floor(Math.random() * 101);
const casualNumberFive = Math.floor(Math.random() * 101);

console.log(casualNumberOne, casualNumberTwo, casualNumberThree, casualNumberFour,casualNumberFive);

//Inserisci la costante in pagina dentro un div con innerHTML

//Dopo 30 secondi i numeri scompaioni
//  - dovremmo usare una time function
//Creare 5 input in html dove l'utente può inserire i 5 numeri randomici che si ricorda
//  - l'ordine non ha importanza 
