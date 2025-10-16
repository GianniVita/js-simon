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
// Creo una Variabile di appoggio per mettere i numeri dentro il Div
const randomNumbersUno = document.getElementById ("casualnumbersUno")
const randomNumbersDue = document.getElementById ("casualnumbersDue")
const randomNumbersTre = document.getElementById ("casualnumbersTre")
const randomNumbersQuattro = document.getElementById ("casualnumbersQuattro")
const randomNumbersCinque = document.getElementById ("casualnumbersCinque")
//Crea una costante che generi 5 numeri casuali con mathRandom
const casualNumberOne = Math.floor(Math.random() * 101);// Returns a random integer/number from 0 to 100:
console.log(casualNumberOne);
const casualNumberTwo = Math.floor(Math.random() * 101);
const casualNumberThree = Math.floor(Math.random() * 101);
const casualNumberFour = Math.floor(Math.random() * 101);
const casualNumberFive = Math.floor(Math.random() * 101);

console.log(casualNumberOne, casualNumberTwo, casualNumberThree, casualNumberFour,casualNumberFive);

//Inserisci la costante in pagina dentro un div con innerHTML
randomNumbersUno.innerHTML = casualNumberOne;
randomNumbersDue.innerHTML = casualNumberTwo;
randomNumbersTre.innerHTML = casualNumberThree;
randomNumbersQuattro.innerHTML = casualNumberFour;
randomNumbersCinque.innerHTML = casualNumberFive; 


//  - dovremmo usare una time function
setTimeout(function () {
    //Dopo 30 secondi i numeri scompaioni
    // dopo il tempo nascondiamo i numeri
randomNumbersUno.classList.add("dNone")
randomNumbersDue.classList.add("dNone")
randomNumbersTre.classList.add("dNone")
randomNumbersQuattro.classList.add("dNone")
randomNumbersCinque.classList.add("dNone")
    // mostriamo 5 input dove l'utente può inserire i numeri che ricorda
const userInput = document.getElementById("user-field")
    //Creare 5 input in html dove l'utente può inserire i 5 numeri randomici che si ricorda
userInput.classList.remove("dNone")

}, 4000 );

    //Bisogna che riteniamo i numeri
    // - Crea una variabile vuota 'let' per salvare i numeri utente
let numeriUtente = [];
    // - Bisogna creare un ciclo per vedere i numeri immessi dall'utente
    for (let i = 1; i <= 5; i++) {
        let visualnum = document.getElementById("input" + i).value;
        console.log(numeriUtente);
        
    }
    //Bisogna avere anche una variabile per inserire i numeri generati
    
    // - Crea una variabile anche qui 'let' per numeri generati

    // Una volta salvati i numeri in due variabili bisogna fare il confronto, cioé - crea una condizione IF
    // - IF (var1 === var2){facciamo vedere i numeri uguali}
    // Come facciamo a far vedere i numeri uguali?




//  - l'ordine non ha importanza 
