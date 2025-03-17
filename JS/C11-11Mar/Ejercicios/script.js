//Palíndromo
function palindromo(palabra) {
    let palabraInvertida = '';
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida = palabraInvertida + palabra[i];
    }
    if(palabraInvertida === palabra){
        console.log(`La palabra ${palabra} es un palíndromo, ${palabra} = ${palabraInvertida}`);
    }
    else{
        console.log(`La palabra ${palabra} no es un palíndromo, ${palabra} ≠ ${palabraInvertida}`);
    }
}
palindromo('reconocer');


//Factorial
function factorial(num){
    let resultado = 1;
    for(let i = num; i >= 1; i--){
        resultado = resultado * i ;
        //console.log(i)
    }
    console.log(`El factorial de ${num} es ${resultado}`);
}
factorial(4);


//Fibonacci

// Número de palabras de un texto 
let frase = 'el arbol se seco ';
let contador = 0;
for(i = 0; i <= frase.length; i++){
    if(frase[i] == ' '){
        contador = contador + 1;
        console.log(frase[i])
    }
}
console.log(`Hay ${contador} palabras en el texto: ${frase}`);

