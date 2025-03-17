/**
 * TIPOS DE DATOS
 * Primitivos: (basicos) Valores basios con los que vamos a relizar operaciones dentro del codigo
 * Se maneja por su valor
 * String
 * Number
 * Boolean
 * Null(vacio)
 * Undefined(no tiene un valor definido)
 * Symbol(Genera indices o identificadores unicos)
 * BigInt (Números muy grandes)
 */

let nombre = 'Liz';
nombre[0] ='ette' // Tipo de dato primitivo y eso significa que no puede mutar
let edad = 22;
let femenino = true;
let sobrinos = null;
let mama = undefined;
let id = Symbol('credencial');
let saldo = 123123123567892345n;

const number1 = new Number('0'); //Expresiones, función constructora, clase o prototipo
const number2 = new Number(2+3);
const number3 = new Number(true);
const number4 = new Number(false);
const number5 = new Number([].length);
console.log(number1, number2, number3, number4, number5);

//type cohersion = el navegador  cambia tipos de datos, el tipo depende de que operación que se este haciendo

//////////////////////////////
// Operador que pemerite saber el tipo de dato de una variable
console.log(typeof nombre, typeof edad);

// Los primitivos son inmutables(no se puede cambiar solo una parte del valor se tiene que cambiar todo el valor) pero los no primitovos si se pueden mutar (si se puede cambiar el valor)
//Mutar: transformar o cambiar

/**
 * COMPLEJOS (No primitivos)
 * Objetos: Abstracción de un objeto de la vida real, en JS Colección de llaves y valores
 * Arreglos: colecciones de valores
 * 
 */


let persona = {
    nombre: 'Lizz',
    edad: 22,
    papas: [{nombre: 'Jose Luis', edad: 56}]
};

persona.nombre = 'Lizette';
//persona['nombre']; // Lizette
console.log(persona);

// Se puede declarar como const porque lo que modificamos es el contenido del arreglo(contenido) no la dirección de memoria.
const liz = persona; //se guarda la dirección de memoria de donde estan los datos 
liz.nombre = 'Rogelio';
console.log('Persona', persona); //Lizette
console.log('Variable liz', liz); // Rogelio

let coleccion = ['liz','melendez','romero'];
// coleccion[0]; //liz
// coleccion[1]; //melendez
// coleccion[2]; //romero
console.log(coleccion[0]);


//Objetos: Atributos y metodos


const arreglo = [0,1,2,3,3,5];
//Set elimina los valores duplicados de una lista
const set = new Set(arreglo); // Set: es parecido a un arreglo, Colecciones de valores unicos
console.log(set);
//size regresa el tamaño del arreglo
console.log(set.size);

//Agrega un valor
set.add('8')
console.log(set);
console.log(set.size);

//Elimina un valor si existe el valor lo elimina y devuelve true si no existe deveuleve false
console.log(set.delete(5));
console.log(set.delete(5));
console.log(set);
console.log(set.size);


//Verifica si el valor esta dentro de un conjunto o no: recibe el arreglo donde vas a buscar y el elemento que vas a busacar
// Busca a traves de valores
console.log(set.has('5'));


/**
 * Set es un conjunto
 * new genera o contruye un nuevo objeto 
 * genera la memoria necesaria para 
 * propiedad size: tamaño de un conjunto
 * add() agrega un valor en el conjunto
 */

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([11, 42, 92]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }

/**
 * Objeto map
 * Diferencia con set map guarda tuplas (llaves y valores) y set solo valores
 * set cuando quieras guardar valores unicos
 * map cuando quieras guardar tuplas(llaves y valores) 
 * map.set(key, value);
 */

const map = new Map();
//Agregar un valor
map.set(1, 'uno');

//Busca a traves de llaves y devuelve true o false
const value = map.has(1);
console.log(value);

//Con get Obtengo el valor si existe lo devuelve
const otherValue = map.get(1);
console.log(otherValue);

// Elimina un valor
let deleteResult = map.delete(0);
console.log(deleteResult);

console.log(map);

//Limpiar 
map.clear();
console.log(map);

//Tamaño del mapa en map size es un atributo
console.log(map.size);


// if(map.has(1) === true){ 
// }else{
//     map.set(1, 'one');
// }


//const otherMap = new Map({ 
//})


//Ambos pueden almacenra difretes valores 
//el set puede almacenar valores unicos 
//Map permite clavas personalizadas
//Map: Permite valores duplicados solo le interesa que las llaves sean unicas
//set add, delete, has, size clear
//map add, delete, has, size, clear, get 
//respetan el orden de inserción


//La sesión dura mientras la pestaña este abierta
//Local storage siempore va a estar