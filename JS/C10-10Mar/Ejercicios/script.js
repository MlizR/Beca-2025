// Hola Mundo
console.log("¡Hola Mundo!")

//Función Suma
function sumar() {
    let num1 = 5;
    let num2 = 6;

    resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
}
sumar();

// Nombre
// let nombre = prompt('¿Cuál es tu nombre?')
// console.log(`Su nombre es ${nombre}`);
 
// Número par o impar
let numero = 25;

if(numero % 2 == 0){
    console.log(`El numero ${numero} es par`);
}else{
    console.log(`El numero ${numero} es impar`);
}

// Números del 1-10
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// Sumar los primero 100 nnúmeros
let suma = 0;
for(let i = 1; i <= 100; i++){
    suma = suma + i;
}
console.log(`La suma de los primeros 100 números es: ${suma}`);

// Tabla de multiplicar
// let numeroTabla = prompt('Escribe el número de la tabla de multiplicar que quieres que te muestre');
// for(let i = 1; i <= 10; i++){
//    console.log(`${numeroTabla} x ${i} = ${numeroTabla*i}`)
// }


//Invertir cadena de texto
let cadena = 'Lizette'
let cadenaInvertida = '';
for(let i = cadena.length-1; i >= 0; i--){
    cadenaInvertida = cadenaInvertida + cadena[i];
}
console.log(cadenaInvertida);


// Número de vocales en una frase
let frase = 'esta lloviendo';
let contador = 0;
for(i = 0; i <= frase.length; i++){
    if(frase[i] == 'a' || frase[i] == 'e' || frase[i] =='i' || frase[i] =='o' || frase[i] =='u'){
        contador = contador + 1;
        console.log(frase[i])
    }
}
console.log(`Hay ${contador} vocales en la frase: ${frase}`);

// Función número primo
function numeroPrimo(){
    num = 7;

    if(num <= 1){
        console.log(`El ${num} no es un número primo`);
        return;
    } 
    
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log(`El ${num} no es un número primo`);
            return;
        }
    }
    console.log(`El ${num} es un número primo`);

}

numeroPrimo();




