/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
Crea un nuovo array con la lista dei mammiferi.
[ 
  { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ }, 
  { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ }, 
  { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ }, 
]
*/

const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'aquila',
        famiglia: 'ccipitridae',
        classe: 'uccelli',
    },

    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },

    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },

    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },

    {
        nome: 'pappagallo',
        famiglia: 'psittaciformi',
        classe: 'uccelli',
    }
]
/*cosa faccio ora?
 -creo un ciclo for
 -creo la condizione che se il nostro animale fa parte
 della classe dei mammifwri allora lo aggiungo in un nuovo array
*/

 
const mammifero = []
for (let i = 0; i < animali.length; i ++) {
    curAnimali = animali[i]
    if ( curAnimali.classe === 'mammiferi') {
        mammifero.push(curAnimali)
    }
    
}
console.log(mammifero);
