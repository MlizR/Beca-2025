import { LitElement, html, css } from "lit";

export default class ImageCarousel extends LitElement {
    constructor(){
        super();
        this.images = []; //inicializar el valor por defecto de las props
        this.componentName = '';
        this.title = '';

    }
    //Van a aser observadas
    static properties = {
        //Propiedades que van a ser observadas (cambios)
        images: {
            type:Array,  //Procesa la propiedad como array
            // hasChange: (val, old) => {
            //     return val.length !== old.length;
            // }
        },
        componentName: {
            type: String
        },
        //Propiedad publica
        title: {
            //Esta propiedad no se va a poder modificar atraves de ningun atributo
            //si no se le coloca atribute el atributo sera el mismo nombre de la propiedad pero en minusculas
            attribute: true  //Por defecto esta en true
        },
        //Propiedad privada _(Internamente) sirven para que se calculen o se guarden valores uncamente dentro de la clase
        _area: {
            //Es necesario declararlka con la configuración state
            //Mantiene el estado reactivo del componente activo
            state: true
        },
        myAge:{
            type: Number,
            reflect: true
        },
        logged: {
            type: String,
            attribute: 'logged',
            reflect: true
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
        this.myAge = this.myAge + 1;
        this.logged = 'success';
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
        console.log(this.images);
        return html`
            <h1>${this.title}</h1>
            <span>Mi edad es: ${this.myAge}</span>
            <button @click=${this.clickButton}>Click</button>
            <ul>
                ${this.images.map(image => {
                    return html `<li>${image}</li>`;
                })}
            </ul>
        `;
    }
}


//Type: Proceso de convertir el valor de string que se recibe a partir del atrbuto al tipo que necesitamos
//Convertifor: Función que nos dice como se debe de convertir el valor de un atributo (tipo de dato que necesita)
//No se usa ya que type define el tipo de dato
/**
 * 
 *
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
 * Para decirle que hacer atraves de properties
 * patra que identifique que paso algo dentro de el es atraves de eventos
 */


/**
 * Reactives Properties
 * Propiedades publicas representan atributos en el html
 * 
 * Configuración delas propieades para generar un atributo 
 * El nombre del atributo y de la propiedad debe ser el mismo
 * Recibe un string(nombre del atributo) o un booleano
 * myAttr: {
 * //por defecto esta en true
 * attribute: true
 * }
 * 
 * 
 * Ciclo de vida
 * hasChange se ejecuta cuando el valor de la proiedad cambio (se agega a ada una de las propiedades)
 * Pre-Update
 * Update
 * Post-Update
 * Antes de que se actualiza
 * Caundo se actualiza
 * Despues de que se actualiza
 */