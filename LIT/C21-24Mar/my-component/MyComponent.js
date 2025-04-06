import { LitElement, html, css, nothing } from 'lit';
import {map} from 'lit/directives/map.js';

export class MyComponent extends LitElement {
    constructor() {
        super();
        //Si no le seteamos un valor a la propiedad es undefined
        //this.text = '';
        this.text = '';
        this.className = '';
        this.alumnos= ['Saul', 'Emilio', 'Adrian'];
        this.counter = 0;
    }

    static properties = {
        text: {
            type: String,
            //Si es publica
            attribute: 'my-component-text'
        },
        alumnos: {
            type: Array,
        },
        counter: {type: Number}
        
        
    };

    static styles = css `
    .red{
        color: rojo;
    }
    `;

    // connectedCallback() {
    //     this.shadowRoot.querySelector('h1').addEventListener('click', (event) => {
    //         event.type === 'click'
    //     });
    // }


    //Los arreglos y los objetos no identifican el cambio porue no cambia la refernecia solo el contenido por esos necesita forzar el inicio del ciclo de vida
    _addStudent() {
        //this.alumnos.push('Lizette');
        this.alumnos = [...this.alumnos, 'Lizette']; //inicia el ciclo solo para el areglp this.alumnos
        //this.requestUpdate();  //Obliga a lit a hacer todo el ciclo de vida (Obliga a hacer el cambio) sirve para todas las propiedades Forzar una actualización

        const arr1 = ['A', 'B', 'C'];
        const arr2 = {'x': 'A', 'y': 'B', 'z':'C'} //Guarda una referencia, posición de memeoria

        //Recorre una colección a traves de sus indices
        for(let i in arr2) {
            console.log(i);
        }
    }

    //mapa de propiedades: changedProperties
    //shouldUpdate: determina cuando se va a renderizar de nuevo o cuando no
    //Se obtiene el valor viejo con shouldUpdate
    // shouldUpdate(changedProperties) {
    //     console.log(changedProperties);
    //     return changedProperties.has('counter') && this.counter < 2;  
    // }

    //Se manda a llamar cuando se va a actualizar el DOM
    //pinta le mapa de las porpiedades que cambien
    update(changedProperties){
        //Se debe mandar a llamar al metodo update del la clase padre
        super.update();
        console.log('update: ', changedProperties);
    }

    //Los metodos del ciclo de vida se ejecutan o se sobreescriben solo si necesitas validar si el valor de una propiedad cambio (cada vez que necesites detectar el cambio de valo)
    // 



    _incrementCounter() {
        this.counter++;
    }

    render() {
        // Orden en el que se le aigna el valor a los propiedades
        // undefined => valor en el construcctor => atributo => js
        //Se renderiza solo la parte que es necesaria
        return html `
        <!--Shadow DOM-->
        <h1>${this.text}</h1>

        <span>${this.counter}</span>
        <br>
        <button @click="${this._incrementCounter}">AUMENTAR</button>
        <button @click="${this._addStudent}">Agregar alumno</button>
        ${this.alumnos.map(alumno => html `<li>${alumno}</li>`)}



        `;
    }

    //se ejecuta despues del render(ya se actualizo)
    //nos permite 
    //solo se genera una vez
    async firstUpdated(changedProperties) {
        console.log('firstUpdated', changedProperties);
        //Espera a que se 
        await this.updateComplete; //Asegurando que podamos obtener los nodos con los ultimos valores
        this.shadowRoot.querySelector('button').click();
    }

    //Detecta cada vez que se actualiza un componente 
    updated(changedProperties) {
        console.log('updated', changedProperties);
        if(changedProperties.has('counter') && this.counter > 2){
            this.text = 'Ya llego al 2';
            this.dispatchEvent(new CustomEvent('show-error-modal'), {detail: 'No sirve el servicio', bubbles: true, compoused: true })
        }
        //console.log(this.counter);// haciebdo refernecia ala propiedad puedo saber le metodo nuevo
    }
}

/**
 * Render se manda a llamar al ultimo del ciclo de vida para obtener el ultimo valor
 * Se pueden pintar varias cosas
 * Valores de propiedades
 * Pinta el ultimo valor de la propiedad
 * 
 * 
 * setter obj.edad = 30;
 * requestUpdate() 
 * 
 * 
 * Template 
 * 
 * Atributo booleano: usar prefijos
 * ?hidden: Este valor debe ser verdadero o falso, si es verdadero se agrega el atributo si no se quita
 * ? = prefijo
 * Los atributos que son string no es necesario utilizar prefijos
 * Trabajar con objetos u objetos prefijo(.)
 * .user => se le va a psaar un objeto o un arreglo
 * 
 * 
 * Eventos @click addEventListener la @ es un prefijo
 * Es un template
 * Metodo declarativo
 * @nombredelEvento
 * 
 * Funciones(directivas)
 * ifDefine si esta definido
 * 
 * nothing valor sentiunela y cuano se pinta en un template no se pinyta nada
 * Manda una señal al html y dice que no se debe de renderizar nada
 * Se usa en render incondicional
 */




//25 MARZO
/**
 * Ciclo de vida
 * 
 * LitElemet agrega sus metodos
 *
 * hasChange se ejecuta cuando el valor de la proiedad cambia (se agega a cada una de las propiedades)
 * 
 * Métodos 
 * requestUpdate()
 * render: renderiza el component
 * firstUpdate se ejevuta la primera vez qe se renderizo
 * Updated
 * Se pueden ejecutar para verificar ciertas cosas 
 * 
 * 
 * willUpdate => que partes cambiaran
 * LitElemny es una clase base, libreria que me permite generar webComponents
 * shadowRoot: raiz del sadow Dom
 * 
 */

/**
 * METODOS
 * 
 * hasChange() valioda el valor viejo y el valor nuevo para ver si realmente cambio
 * requestUpdate() Cuando el compoenete no se renderiza de forma automatica 
 * performUpdate() de encarga de llamar a los demas metodos
 * shouldUpdate() decide si se actualiza o no el componente
 */


// this.update(); // verifica las propiedades que cambiaron Ultimos valores de mis propiedades
// this.render(); 


//updateComplete() es una promesa 

