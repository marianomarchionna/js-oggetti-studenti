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
// for(let i = 0 ; i < studenti.length; i++){
//     for (let key in studenti[i]){
//         console.log('Nome: ' + studenti[i].nome + ' Cognome: ' + studenti[i].cognome);  
//     }
// }

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nameStudent = prompt('Inserisci il nome del nuovo studente');
var surnameStudent = prompt('Inserisci il cognome del nuovo studente');
// controllo sull'età
do{
    var ageStudent = parseInt(prompt("Inserisci l'età del nuovo studente"));
}while(isNaN(ageStudent));

// trasformo tutte le parole del nome con iniziale maiuscola
var arr = nameStudent.split(' ');
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var nomeNuovoStudente = arr.join(' ');

// trasformo tutte le parole del cognome con iniziale maiuscola
arr = surnameStudent.split(' ');
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var cognomenomeNuovoStudente = arr.join(' ');

// assegno i dati inseriti in input in un nuovo oggetto
var newStudent = {
    'nome' : nomeNuovoStudente,
    'cognome' : cognomenomeNuovoStudente,
    'eta' : ageStudent
}

// inserisco il nuovo studente nell'array di oggetti
studenti.push(newStudent);
console.log('Nuovo studente');
for (let key in studenti){
    console.log('Nome: ' + studenti[key].nome + ' Cognome: ' + studenti[key].cognome + ' Età: ' + studenti[key].eta);  
}