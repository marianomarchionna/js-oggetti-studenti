// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// var studente = {
//     'nome' : 'Mariano',
//     'cognome' : 'Marchionna',
//     'eta' : 21
// }

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// for (var key in studente){
//     console.log(studente[key]);
// }

// Creare un array di oggetti di studenti.
var studenti = [
    {
        'nome' : 'Mariano',
        'cognome' : 'Marchionna',
        'eta' : 21
    },
    {
        'nome' : 'Paolo',
        'cognome' : 'Costantino',
        'eta' : 24
    },
    {
        'nome' : 'Giovanni',
        'cognome' : 'Mucciaccia',
        'eta' : 41
    },
    {
        'nome' : 'Domenico',
        'cognome' : 'Lella',
        'eta' : 18
    }
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for(let i = 0 ; i < studenti.length; i++){
    for (let key in studenti[i]){
        console.log('Nome: ' + studenti[i].nome + ' Cognome: ' + studenti[i].cognome);  
    }
}