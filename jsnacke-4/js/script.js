/*Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Partendo da questo, crea quindi un nuovo array inserendo, per ogni
persona, una frase (stringa) con il nome e cognome e l’indicazione se può
guidare, in base all’età.*/


const people = [
    {
        nome:'Alberto',
        cognome: 'Mameli',
        eta: 31,
    },
    {
        nome:'Alessio',
        cognome: 'Piras',
        eta: 45,
    },
    {
        nome:'Federico',
        cognome: 'Mameli',
        eta: 2,
    },
    {
        nome:'Simone',
        cognome: 'Mameli',
        eta: 18,
    },
]
const idoneo = []
for ( let i = 0; i < people.length; i ++) {
    curIdoneita = people[i];
    if (curIdoneita.eta >= 18) {
        let message = `Okay ${curIdoneita.nome} ${curIdoneita.cognome}, secondo i nostri calcoli puoi guidare perche hai ${curIdoneita.eta} anni!!`;
        idoneo.push(message);
    }
    else if(curIdoneita.eta < 18) {
        let message = `Mi dispiace ${curIdoneita.nome} ${curIdoneita.cognome}, ma hai ${curIdoneita.eta}, non puoi guidare!`;
         idoneo.push(message);
    }
   
}
console.log(idoneo);
 



