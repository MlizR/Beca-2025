/**
 * FUNCIONES: Tienen una responsabilidad especifica y unica 
 * 
 * Nomeclaturas
 * camelCase, dash case: sumar-numeros, slash = sumar/numeros
 * Parametros valores de entrada
 * nombre de variables que se van a generar localmenete.
 * variable local que va a existir solamente en la función
 * Referencia
 * 
 * BACKTICKS = strings dinamicas
 * interpolación
 */
let nombre = 'aldo'; //variable global

//DOCUMENTACIÓN
/**
 * Metodo para mover el cuerpo de una persona
 * @param {object} persona //El parametro es persona y es un objeto
 */

// Buena practica: maximo 3 parametrois en una función
//Si no colocamos ningun valor de return la función retorna undefined
//retorno implicito: si no colocas return el motor de js lo hace
//return: indica donde se termino de ejectar una función
//retorno explicito(nosotros lo colocamos) 

//DECLARACIÓN
function moverCuerpo(persona) {
    console.log('Este mensaje se imprime desde adentro de la función');
    console.log(`Se esta moviendo ${persona.nombre}`);
    if(persona.edad > 18){
        console.log(`${persona.nombre} es mayor de edad y su edad es: ${persona.edad}`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
    return 'El usuario se llama : ' + persona.nombre; 
    //retorno implicito: resultado de la función  undefined
}

//EJECUCIÓN
const resultado = moverCuerpo({nombre:'Liz', edad: 22, sexo:'F'});  //moverCuerpo(argumentos);
console.log(resultado)  //Valor de retorno de la función: undefined
moverCuerpo({nombre:'Miriam', edad: 17, sexo:'F'});


//Funcion: porcion de codigo que se reutiliza 
//elelemtoos de orden superior pueden ser tratados como un valor 
//Callback función que se toma como un argumento otra función
const result = [1,2,3].reduce(function(acumulador, item){
    acumulador += item;
    return acumulador; //Se retorna para la proxima iteración 
}, 0);

console.log(result);

// array[i] valor del elemento actual
// ; determina cuando termina una sentencia
//Implentar reduce

//Function declarartion
function myOwnReduce(array = [], callback, initialValue) {
    let acumulador = initialValue;
    for(let i = 0; i < array.length; i++){
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}

const r = myOwnReduce([1,2,3], function(acumulador, item){
    acumulador += item;
    return acumulador;
}, 0);

console.log(r);

const strings = myOwnReduce(['hola ','liz ',':)'], function(acumulador, item){
    acumulador += item;
    return acumulador;
}, '');

console.log(strings);

// El resultado de reduce depende del callback y del initialValue(acumulador)

// Valor de parametros por defecto: sriven para evitar errorres de ejecución
//Asignar un valor a un parametro por defecto
//Los vcalores que ponemos como argumentos son expresiones.
//Asincronia: promesas: es un objeto 
//AJAX: Se encarga de hacer peticiones, se necraga de mandar la requests
//calbach hell función dentro de una función dentro de otra función
//Fificulta la lectrura del codigo
//calback función que tinene como argumento otra función
// Los argumentos deben de respetar el orden.

array = []

//Function expression: funciones almacenadas en variables , usadas por argumentos o retornadas desde otra funcion
//Función alamcenada en una variable
const baz = function(){
    console.log('Hola');
};
baz();


//Las funciones pueden retornar valores y un valor es lo mismo que una expresion

//Función retornada desde otra función
function saludar() {
    //this = oobjeto que es dueñp de esta función

    return function() {
        console.log('Mensaje dentro de la función que se retorna');
        console.log('OJO');
        console.log('Estos mensajes solo se ejecutaran si ....')
    }
} 

function saludar() {

    return function() {
        console.log('Mensaje dentro de la función que se retorna');
        console.log('OJO');
        console.log('Estos mensajes solo se ejecutaran si ....')
    }
} 

const resultadoSaludar = saludar();
resultadoSaludar();


//bine: compartir el contexto

//función pasada como argumento a otra función (Callback)
//despedir tiene la responsabilidad de imprimir el resultado
function despedir(obtenerNombre){ 
    const resultado = obtenerNombre(); //Responsabilidad de generar un texto que diga el nombre
    console.log(resultado);
}

despedir(function() {
    return 'Este es mi nombre Lizette'
});

//El callback es el encargado de como se procesa el arreglo


//Fetch: solicitar un recurso
function getPokemonData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function(response) {
        console.log('INFORMACIÓN DEL REQUEST');
        console.log(response);
        return response.json();
    })
    .then(function(realResponse) {
        console.log(realResponse);
        const img = document.createElement('img');
        img.src=realResponse.sprites.front_shiny;
        document.body.appendChild(img);
    });
}



// ARROW FUNCTION: Son anonimas no tiene un nombre
/**
 * Metodo para sumatr dos valores a es el primer operando y b es el segundo operando
 * @param {Number} a 
 * @param {Number} b 
 */

const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 10));

//suma resta,* / modulo 

const calculadora = (operacion, a, b) => {
    let resultado = 0;
    switch (operacion) {
        case 'suma':
            const suma = (a,b) => {a+b};
            return suma(a,b);
            break;
        case 'resta':
            const resta = (a,b) => {a-b};
            return resta(a,b);
            break;
        case 'mul':
            const mul = (a,b) => {a*b};
            return mul(a,b);
            break;
        case 'suma':
            const division = (a,b) => {a/b};
            return division(a,b);
            break;
        case 'modulo':
            const modulo = (a,b) => {a%b};
            return modulo(a,b);
            break;
    
        default:
            break;
    }

}

console.log('CALCULADORA');
calculadora('suma', 5, 2);
calculadora('resta', 5, 2);
calculadora('mul', 5, 2);
calculadora('division', 5, 2);
calculadora('modulo', 10, 3);

//Arrow function y función normal es el valor del this
//En arrow function this = al lugar donde esta declarado el objeto
//this = window

//Cuando no te interese llos valres del objeto que se esta ejcutando genra un arrow function 

const aldo = {
    nombre: 'Aldo',
    saludar: (...arguments) => {
        //this es el contexto de declaración, lugar donde esta declarada
        //this = window
        console.log(this);
        console.log(arguments)
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
};

aldo.saludar(1,2,3);

const juan = {
    nombre: 'Juan',
    saludar: function () {
        //this es el contexto de ejecución
        //this = juan
        console.log(this)
        console.log(arguments);
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
};

juan.saludar(); 

//difernecias entre arrow function y funcion normal:el contexto y argumente 

//Funciones que te ayudana a compartir el contexto: binf, call, apply
//call y aply lo primero que le debes pasar es el objetio que quieres utilizar como contexto y una array 
//call y aply ejecutan la función
//band retorna una nueva función

//bindear el contexto de forma explicita 


//argumnets: colección(objeto) tiene todos los valores con los que vas a ejecutar una funcion

//en arrow function arguments no existe 
//Obtiene slos valores de los argumentos con ...

//spredd operator ...arguments todos los valores los guarda en la variubale argumnets en forma de arreglo


const btn = document.querySelector('button');

const fun1 = function() {
    console.log(this);
}

const fun2 = () => {
    console.log(this)
}
const obj = {nombre:'Lizzz'}
//btn.addEventListener('click', fun1);

btn.addEventListener('click', event => {
    fun2(obj);
    console.log(btn);
});


//La arrow function sin funciones sin estado y no funciona blid, apply y call
//No se pjuede modificar el valor de this en arrow function

//SI SE PUEDE HEREDAR EL SCOPE PADRE 



//SCOPE, BIND, CALL, APPLY, CALLBACK, 

//FUNCIONES CONSTRUCTORAS
// function Persona(nombre, edad, sexo) {
//     let persona = {
//         nombre: nombre,
//         edad: edad,
//         sexo: sexo,
//         saludar(){
//             console.log('Hola soy: ', this.nombre);
//         }
//     };

//     return persona; //La función retorna un objeto con un return implicito
// }


// Cada vez que se ejecuta persona se crea un objeto 
// const alberto = Persona('Alberto', 40, 'M');
// alberto.saludar();
// const montse = Persona('Montse', 22, 'F');
// montse.saludar();

//console.log(alberto, montse);


//this lo que hace es ligar valores a propiedades de un objeto
//Se utiliza punto (.) para saber el  valor de la propoedad de un objeto

function Persona(nombre, edad, sexo) {
        this.nombre = nombre,
        this.edad = edad,
        this.sexo = sexo,
        this.saludar = function(){
            console.log('Hola soy: ', this.nombre);
    }
}

//Crear un objeto 

//cuando se utiliza new el compilador sabe que se va a crear un objeto
//Para new la función necestita utilizar this dentro
const emilio = new Persona('Emilio', 29, 'M');  //this liga las propiedades a un objeto en este caso emilio
console.log(emilio);
emilio.saludar();



//sugar syntax
class Persona2 {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
}
const jeronimo = new Persona2('Jeronimo', 22, 'M');  //this liga las propiedades a un objeto en este caso jeronimo
console.log(jeronimo);
jeronimo.saludar();


//metodo constructor para inicializar valores
const persona = {
    nombre: 'Perdrito'
} //literal object 

persona.edad = 50; //Agrega una atributo
console.log(persona);

let telefono = 2462026440;
telefono.toFixed(); //toFixed esta dentro del prototipo

const aa = [1,2,3];
aa.reduce(); //reduce esta dentro del prototipo
console.log(aa);


//instancia un objeto creada atraves de un clase

//Prototipos: propiedades basicas minimas que necesita un objeto
//Las funciones definene el prototipo 

//todos los numeros se construyen con una función constructora (Number())

