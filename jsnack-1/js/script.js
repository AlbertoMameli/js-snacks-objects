/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e
alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a
benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.

*/


const auto = [{
    marca: 'bmw',
    modello: 'x6',
    alimentazione: 'diesel',

},
{
    marca: 'audi',
    modello: 'q8',
    alimentazione: 'benzina'
},
{
    marca: 'fiat',
    modello: 'panda',
    alimentazione: 'diesel'
},
{
    marca: 'ford',
    modello: 'ranger',
    alimentazione: 'elettrica'

},
{
    marca: 'alfaromeo',
    modello: 'giulia',
    alimentazione: 'metano'
},
{
    marca: 'peugeot',
    modello: '3008',
    alimentazione: 'gpl'
},
{
    marca : 'tesla',
    modello : 'model',
    alimentazione : 'elettrica'
},
{
    marca : 'bmw',
    modello : 'x4',
    alimentazione : 'diesel'
}
]
console.log(auto);

const autoBenzina = [];
const autoDiesel = [];
const altraAlimentazione = [];

for (let i = 0; i < auto.length; i ++) {
    curAuto = auto [i]
    if (curAuto.alimentazione === 'benzina') {
        autoBenzina.push(curAuto);
    }
    else if ( curAuto.alimentazione === 'diesel') {
        autoDiesel.push(curAuto);
    }
    else {
        altraAlimentazione.push(curAuto);
    }
}

console.log(autoBenzina);
console.log(autoDiesel);
console.log(altraAlimentazione);



   
    
    