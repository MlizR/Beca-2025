import { LitElement, html, css } from "lit";

export default class ImageCarousel extends LitElement {
    constructor(){
        super();
        this.images = []; //inicializar el valor por defecto de las props
        this.componentName = '';
    }

    //Van a aser observadas
    static properties = {
        //Se declaran las propiedades
        images: {
            type:Array  //Procesa la propiedad como array
        },
        componentName: {
            type: String
        }
    };

    static styles = css `
        button {
            background-color: var(--btn-bg-color,  black);
            color: var(--btn-color, white);
            border: none;
            border-radius: 5px;
        }

    
    `; 

    clickButton() {
        this.componentName = 'images';
        this.images=[...this.images, 'URL']; //Todos los elementod del arreglo taelos y le garegas URL
        this.dispatchEvent(new CustomEvent('click-btn-shadow',
            {
                bubbles: true,
                composed:true,
                detail: 0
                
            }
        ))
    }

    //Ciclo de vioda del componente
    //Se renderiza en el shadow DOM
    render() {
        return html`
            <h1>${this.componentName}</h1>
            <button @click=${this.clickButton}>Click</button>
            <ul>
                ${this.images.map(image => {
                    return html `<li>${image}</li>`;
                })}
            </ul>
        `;
    }
}

/**
 * 
 * hasChange se ejecuta cuando el valor de la proiedad cambio
 */

/**
 * función html retorna el resultado d eloq ue vamos a renderizadar en el shadow dom del componente
 * Template string function: html
 * firstUpdate: solo se ejecuta una vez
 * update() cada ves que se termino de renderizar
 * 
 * función css: procesa el css
 * 
 * 
 * Los componentes se comunican a traves de 2 cosas
 * Para decirle sque gacer atraves de properties
 * patra que identifique que paso algo dentro de el es atraves de eventos
 */