

for (let i= 1; i <= 100; i++) {
    
    // Logica per verificare se i è multiplo di 3, 5 o entrambi
    if (i%3 == 0) {
        if (i%5 == 0) {
            console.log('FizzBuzz');
        } else {
            console.log('Fizz');
        }
    } else if (i%5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}