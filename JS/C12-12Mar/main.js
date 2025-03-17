/**
 * OPERADORES
 * Operadores Aritmeticos + - * / % Math.pow(2,2)
 */

// Type cohersion: Conversión de tipo de dato

const suma = [1,2,3].reduce((acumulador, item) => {
    acumulador += item; // acumulador = acumulador + item;
    return acumulador;
}, 0).toString();

console.log(suma + 10); 
console.log('suma' + 10);
//El operador + con numeros suma y en strings concatena

//type cohersion: Le da prioridad a la concatenación e intenta convertir el tipo de dato a string
console.log(true + 10); // = 11 ya que lo intenta tranformar el tipo de dato para que no haya un error de  y toma true com 1
console.log( 10 + 'resultado' + 10);
console.log([10] + {});
console.log(undefined + 10); //NaN 
console.log(typeof NaN); //NaN es de tipo number
console.log(typeof undefined); //undefined es de tipo undefined
console.log(null + null); // 0 primero los convierte a false y depues a 0 y suma 0 + 0 = 0

console.log(typeof null);

const tipo = typeof undefined;
console.log(typeof tipo); //string


console.log(`4 % 2 = ${4%2}`);

const potencia = Math.pow(2,2);
//Calcular potencia 2**2
console.log(potencia);


/**
 * OPERADORES DE COMPARACIÓN 
 * El comparador estricto valida elalor de las expresiones y el tipo de dato y el no estricto 
 * Estrictos: ==, =, >, <, <=, >=, true|  false 
 * No estrictos
 */

0 == 0 //valida el valor y devuielve un false o un true (booleano)
0 == '0' //type cohersion
const a = typeof 0; //number
const b = typeof '0'; //string

0 === '0'; //false => number !== 'string'  valida el valor y el tipo de dato

/**
 * type cohersion se ejecuta cada ves que mandas a llamar a una expresión
 * Falsy: un valor que se puede tomar como falso
 * Hay valores que cuando se ejeuta typecohersion dan false
 * '', undefined, null, NaN, 0
 * 
 * 
 * THURHY: Puede ser tomado como valores verdaderos
 * 1,'cadenallena', [], {}, -5
 */

let variable = null;

if(!!variable == false){ // !!variable con la primera negación null lo convierte a true y el segundo true lo convierte a false
    console.log('Entro al if');
}

let variable2 = 1;

if(!variable2){
    console.log('var 2')
}

// Type cohersion: Conversión de tipo de dato


/**
 * OPERADORES LOGICOS: Comparar valores booleanos
 *  && || !
 * true && false = false  Ejem: !!'string' && false = false
 * false && true = false  Ejem: !'string' && false = false 
 * false && false = false Ejem: !'string' && false = false
 * true && true = true    Ejem: 'string' && 'string' = true
 */

console.log(10 && !!null);


// Corte circuito 
// El resultado sera el ultimo valor o expresion verdadero en este caso la cadena si fuera al reves imprimira el 10 
console.log(10 && 'liz'); //liz
//Si en and hay una expresión falsa toma esa expresión y la devuelve
console.log(null && 10) //null
console.log(10 && false) //false


/**
 * OR
 * true || false = true  Ejem: 'string' || NaN = true
 * false || true = true  Ejem: !'string' || true = true 
 * false || false = false Ejem: !'string' || false = false
 * true || true = true    Ejem: 'string' || 'string' = true
 */

// Si los valores son booleanos sera false o true si son truthy o falsy: 10 || '6' = 10 y 10 es un valor truthy

console.log(10 || '0');




