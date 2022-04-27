/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
alert('Iniziamo');
rdmArrays();
setTimeout(removeRdmArrays, 3000);
/*
 [] = Visualizzare in pagina 5 numeri casuali.

    Creiamo un funzione dove genera numeri casuali 
        Bisogna utilizzare un array per salvare i 5 numeri generati randomicamete



*/
function rdmArrays(){
    const arrRdm = [];
    const stampa = 0;
    for(let i=0; i < 5; i++){
        arrRdm[i] = rdmNumber();
        console.log(arrRdm[i]);
        document.getElementById('random').innerHTML = `${arrRdm}`;
    }
    alert('Inizio timer 30 secondi');
}
function rdmNumber(){
 return Math.floor(Math.random() * 100) + 1;
}


/*
 [] = Da lì parte un timer di 30 secondi

    Creiamo un funzione dove invoca una funzione dopo tot secondi 
        Dopo tot secondi l'utente inserira tramite prompt i numeri visaliazzati nello step 1
        
        Abbiamo bisogno di una array per salvare i dati inseriti
        O
        Bisogna realizzare un confronto tra il valore inserito e l'array dei 5 numeri 
*/

function removeRdmArrays(){
    document.getElementById('random').innerHTML = ``;
}


function userPrompt(){

}