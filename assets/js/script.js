
let row = document.getElementById('row');

for (let i= 1; i <= 100; i++) {

    let divText;
    
    // Logica per verificare se i è multiplo di 3, 5 o entrambi
    if (i%3 == 0) {
        if (i%5 == 0) {
            console.log('FizzBuzz');
            divText = 'FizzBuzz';
        } else {
            console.log('Fizz');
            divText = 'Fizz';
        }
    } else if (i%5 == 0) {
        console.log('Buzz');
        divText = 'Buzz';
    } else {
        console.log(i);
        divText = i;
    }

    // Creazione nuovo div che conterrà il valore i oppure le parole Fizz, Buzz, FizBuzz
    let newDiv = `<div class="col-1 text-bg-dark m-1">
    <div class="ratio ratio-1x1">
    <div>${divText}</div>
    </div>
    </div>`;

    //Inserimento div nella row
    row.insertAdjacentHTML('beforeend',newDiv);

}