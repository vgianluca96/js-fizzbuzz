
// Variabile associata al Document Object 'row'
let row = document.getElementById('row');

// Ciclo for
for (let i= 1; i <= 100; i++) {

    /* Dichiarazione variabili di customizzazione dei div
        - divText stabilisce il testo da inserire
        - divClass permetterà di inserire classi per bootstrap
    */
    let divText;
    let divClass;
    
    // Logica per verificare se i è multiplo di 3, 5 o entrambi
    if (i%3 == 0) {
        if (i%5 == 0) {
            console.log('FizzBuzz');
            divText = 'FizzBuzz';
            divClass = 'text-bg-success';
        } else {
            console.log('Fizz');
            divText = 'Fizz';
            divClass = 'text-bg-warning';
        }
    } else if (i%5 == 0) {
        console.log('Buzz');
        divText = 'Buzz';
        divClass = 'text-bg-danger';
    } else {
        console.log(i);
        divText = i;
        divClass = 'text-bg-light';
    }

    // Creazione nuovo div che conterrà la stringa data da divText
    let newDiv = `<div class="col-1">
    <div class="py-3 ${divClass}">
    <div>${divText}</div>
    </div>
    </div>`;

    //Inserimento div nella row
    row.insertAdjacentHTML('beforeend',newDiv);

}