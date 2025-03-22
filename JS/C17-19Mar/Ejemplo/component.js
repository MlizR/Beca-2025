//Crear nueva clase que extiende HTMLElement (nuevo tipo de elemento HTML personalizado)
class MiBoton extends HTMLElement {

    //Inicializar el componente
    constructor() {
        //Llama al constructor de HTMLElement
        // super() Se usa para asegurarnos de que el objeto se configure correctamente
        // super() permite que la clase heredada (nuestro componente) tenga acceso a las funciones de HTMLElement.
        super();  
        // Creación del Shadow DOM, mode: 'open' permte acceder al Shadow DOM desde JS
        //mode:'closed' => No se podra acceder desde afuera del componente
        this.attachShadow({mode: 'open'});

        //Crear estructura del boton
        this.shadowRoot.innerHTML = `
        <style>
            button {
            background: blue;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            }

            button:hover {
            background: darkblue;
            }
        </style>

        <button><slot>Click aquí</slot></button> 
        `;

        //<slot> permite que el contenido dentro de <mi-boton> en HTML pueda ser remplazado
    }
}

//Registrar el Web Component, le dice al navegador que <mi-boton> es un nuevo elemento HTML valida
customElements.define('mi-boton', MiBoton);