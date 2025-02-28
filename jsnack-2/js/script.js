/*A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

/*creo un array di parole
    *creo un array vuoto
    *uso il ciclo for per controllare ogni parola
    *estraggo la parola e la formatto come da consegna 
         -uso charAt per selezionare la prima lettera e con UpperCase la metto in maiuscolo
         -con slice prendo il resto della parola partendo dalla seconda lettera e la trasformo in minuscolo con lowercase
    *pusho la parola nell'array vuoto
    *stampo in consoleLog
 */

const parole = ['pippo', 'luca','ROBeRTO','FederiCo','alberto'];


const paroleFormat = []
for (let i = 0; i < parole.length; i++) {
    let curParola = parole[i];
    let paroleFormate = curParola.charAt(0).toUpperCase()+curParola.slice(1).toLocaleLowerCase();
    paroleFormat.push(paroleFormate);
}
console.log(parole);
console.log(paroleFormat);







