// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function es7(){
const myh1=document.querySelector("h1")
myh1.innerText="New Name Shop"
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function es8(){
const myBody=document.querySelector("body")
myBody.style.backgroundColor="red"
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function es9(){
    const myAddress=document.querySelector(".address")
    myAddress.innerText="Nuovo indirizzo, Eccolo"
    }


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function es10(){
    let myAlink=document.querySelectorAll("a")
    for (let i=0;i<myAlink.length;i++){
        myAlink[i].classList.add("addClass")
    }
}


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function es11(){
    let myImg=document.getElementsByTagName("img")
    // myImg[myImg.length].classList.add("nasconditi")
    for (let i=0;i<myImg.length;i++){
        myImg[i].classList.add("nasconditi")
    }
}



// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function es12(){
    const colorArray=["orange","red","blue","yellow","green","grey","pink"]
    let nRandom=Math.floor(Math.random()*colorArray.length)
    let myPrice=document.querySelectorAll(".price")
    for (let i=0;i<myPrice.length;i++){
        myPrice[i].classList.add(colorArray[nRandom])
    }
}
