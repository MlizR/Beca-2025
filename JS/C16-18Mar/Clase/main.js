/**
 * OBJETOS GLOBALES DEL NAVEGADOR
 * Window
 * document crear, obtener(buscar) y elimimar elementos
 */

//Window
//document puerta para entrar al dom
//window.setTimeout Tiempo de espera, espara algunos segundos y ejecuta una función

//Cadena de prototipos : HTMLDivElement, HTMLElement, Element, Node, EventTarget , Object
//Clase con la que se construyo HTMLDivElement

//buscar etiquetas
// const box = document.getElementById('box'); //Retorna el NODE si lo encuentra y NULL si no lo encuentra
// box.style.backgroundColor = 'chocolate';
// console.log(box.__proto__);

// //Escuchar eventos
// box.addEventListener('click', (event) => {
//     console.log('Me dio click el usuario', event);
// });


// //Antes de generar eventos se deben de escuchar
// //Dispara
// box.dispatchEvent(new Event('click'));

// //Primer elemento quw encuentre
// const span = document.querySelector('span');
// span.style.backgroundColor = '#DDD';

// const listDivs = document.querySelectorAll('div');
// console.log(listDivs);

// //Crear etiquetas
// const newDiv =  document.createElement('div');
// newDiv.innerText = 'Soy el div nuevo';

// //Agregar nodos al dom
// document.body.appendChild(newDiv);
// console.log(document.body);

// //Funciones para buscar nodos en el dom,
// // crear y eliminar elementos
// // modificar atributos de los elemento, 
// // manipular el contenido de los elementos,
// //  metodos o propiedades que ayuden a modificar estilos o clases de los elementos


// /**
//  * Buscar elementos en el dom 
//  * Crear y eliminar elementos
//  * Modificar atributos
//  * Modificar estilos y clase
//  * Modificar el contenido
//  */

// const parentElement = document.getElementById("parentElement");
// const newElement = document.createElement("div");
// newElement.innerText = "Elemento insertado antes";

// const referenceElement = document.getElementById("referenceElement");
// parentElement.insertBefore(newElement, referenceElement);


// /**
//  * EVENTOS - Acciones que hace el usuario -Son objetos
//  * Cada una de las etiquetas es un EventTarget
//  * Cada una de las etiqeutas puede escuchar los eventos que por ello es la EventTarget
//  * Patron de comunicación(Mediador)
//  * 
//  * */ 



// //////////////////////////////////////////////////////////////////////////////////////////////



// /**
//  * PROMESAS, tiene tres estados pending, fulfilled y rejected
//  * Objeto
//  * Controlar acciones asincronas
//  * Esta fullfill cuando se ejecuta resolve
//  * esta rejected cuando se ejecuta reject
//  * Cuando se genera una promesa su estado predeterminado es pending
//  * 
//  */

// //resolve:Se ejecuta el metodo cuando se cumple la promesaa
// //rejected: Se ejecuta el metodo cuando no se cumple la promesa

// //El callback es asincrona se ejecuta cuando la tarea asincrona termina 
// //resolve y reject son funciones y se mandan a llamar para controlar el estado de la promesa 
// //resolve y reject cambian el estado de la promesa 
// //then 
// //No sabes cuando termina 
// //Recibe 2 parametros: una función y un tiempo en milisegundos

// const callback = (resolve, reject) => {
//     let exito = true;
//     setTimeout(() => {
//         if(exito === true){
//             resolve('Si me amo toda la vida');
//         } else {
//             reject('No se cumplio con esta morra');
//         }
//     }, 2000); 
//     // simulación de algo asincrono
//     //  EJEMPLOS de tareas asincronas
//     // Se tardo en comntestar el servicio
//     //Se tardo em renderizar el DOM
// };

// //Ayuda a estado de la promesa

// const promise = new Promise(callback)
// console.log(promise);

// promise
// .then((result) => {
//     console.log(result);
//     console.log(promise);
// })
// .catch(error => {
//     console.log(error);
//     console.log(promise);
// });


// //fetch devuelve el resultado de una promesa
// //

// const obtenerInfoPokemon  = () => {
//     const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
//     fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json; //Devuelve el valor real de los datos que devolvio el servicio, retorna el resulltado de una promesa
//     })
//     .then(data => {
//         console.log(`Aqui obtuve la información de ditto: ${data.sprites.form_default}`);
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }
// obtenerInfoPokemon();



const iterable = [Promise.resolve('XITO 1'), Promise.resolve('EXITO 2'), Promise.resolve('EXITO 3')];
Promise.all(iterable)
.then(() => {
    console.log('Se resolvieron todas laas promesas')
});

