
/**
 * export default {
    marca: 'APPLE',
    procesador: 'APPLE SILICON'
    }
 * Para importar: export default => import computadora, * as calculadora from './calculator.js';
 * console.log(computadora);
 * console.log(calculadora.sumar(10,10));
 */

import {mostrarValor, limpiar, mostrarResultado} from './calculator.js';

const btn = document.querySelectorAll('button');

btn.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.getAttribute('data-valor');
        const accion = boton.getAttribute('data-accion');

        if(valor) {
            mostrarValor(valor);
        } else if (accion =='limpiar'){
            limpiar();
        } else if (accion == 'mostrarResultado'){
            mostrarResultado();
        }

    });
});




