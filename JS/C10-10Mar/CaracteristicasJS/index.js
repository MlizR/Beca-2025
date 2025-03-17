let carro = "BMW"; //tokens let, carro, =, "BMW"
                    //format cpntrol character => ; \n \r
                    // whitespaces no importam

                    /*
                    * Multilie comments
                    */
                   // online comments

let persona = 'Aldo'; //Statement

// Expresiones: Fragmento de codigo que cuando se ejecuta obtenemos un valor
true //boolean
'string' //string
10 //number
{nombre: 'Aldo'} //Object
[{nombre: 'Aldo'}] //Array

function obtenerNombre(){
    return 'Aldo';
}

const fun = function() {};

let aldo = 'alberto' // Variables tambien pueden ser una expresión
let alberto = aldo;

// scope: desde donde es accesible esa variable
// Es accesible donde esta declarada 

/* Variable espacio reservado en memoria
* Tipos de variables
* const: es unico y no puede modificarse el valor
* var:  coompatible con cualquier navegador
    scope(ambito)Alcance de la variable: function
    reasigmación: Se puede reasignar
    redeclaración: Se puede redeclarar
    Se puede declarar sin valor inicial
        undefined: no tiene un valor definido
        null: tiene un valor pero es nulo
    Propiedad del objeto global: objeto global window
    cuando se declara una variable fuera de una función 

    Hoisting(Elevación); El motor de js redeclara la variable como var, Eleva la declarción de las variables y las declara como var 
*/

function miFunción(){
    //No se puede utilizar fuera de la función solo dentro de la función
    var dinero = 5;  // Declaración: var dinero asignación: = 5
}

dinero = "mucho"; //scope window, ensucial es scope global

/**
 * La declaras una vexz y le reasignas el valor n veces
 * let: es compatible con todos los navegadores
 * scope: bloque { } no se puede usar fuera del bloque
 * reasignación: Se le puede cambiar el valor
 * re-decraración: No se puede redeclarar
 * Propiedad de obj. global: No ensucia el scope
 * Hoisting: TDZ(Temporal Dead Zone) => garbash colector Nadie la manda a llamar
 * Se puede declarar sin valor inicial
 */

let juan = 'Juan'
{
    let juan = 'Juan';
    console.log
}

// Bloque: conjunto de sentencias de js delimitadas por llaves

/**
 * const
 * scope: bloque
 * No se puede reeasignar (no se le puede dar otro valor)
 * No se puede redeclarar (No se puede declarar otraves en el mismo bloque)
 * Simpre se debe delarar con valor inicial
 * No ensucia el objeto global
 * Hoisting: TDZ
 * 
 */


/**
 * 
 */

const PI = 3.1416;
PI = 4; //Error de escritura typeError

const EULER = 1.34;


function saludar(){
    let nombre = 'Lizette';
}
console.log(nombre); //ReferenceError


