export class MyButton extends HTMLElement {
    constructor() {
        super();  //Manda llamar al método constructor de la clase padre
        this.color = 'initial';
        this.attachShadow({mode: "open"});  //Genera un sub arbol del DOM (Shadow DOM)
        //this.shadowRoot: existe despues de que se crea el shadow DOM
        
    }

    //ciclo de vida de un web component
    //Atributos que van a ser observados, si el valor del atrubuto cambia algo va a suceder
    static observedAttributes = ['color']; //Atributos que le agregues a tu web component
   
    connectedCallback() {
         //Cuando el elemento es agregado al DOM
         console.log('Me agregaron al DOM :D');
         this.render();
     }
     disconnectedCallback() {
         //Cuando el elemento se quita del DOM  
         console.log('Me quitaron del DOM');
     }
    
     attributeChangedCallback(name, oldValue, newValue) {
         //Cuando el valor de un atributo cambia
         if(name === 'color'){
            this.color = newValue;
            // const btn = this.shadowRoot.querySelector('button');
            // btn.style.backgroundColor = newValue;
         }
         //console.log(this.color);
         this.render();

     }

     render() {
        //console.log(this.color);
        const template = document.querySelector('#tpl');
        // Clonar el contenido del template
        const contenido = template.content.cloneNode(true);
        
        const style = document.createElement('style');
        style.textContent = `
            button{
                padding: 10px;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                background-color: ${this.color};
            }
        `;
       
        // Limpiar el Shadow DOM y agregar los nuevos elementos
        this.shadowRoot.innerHTML = '';  // Elimina el contenido anterior
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(contenido);
     }
}


export class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.index = 0;
        this.images = [];
        this.width = '100px';
        this.height = 'auto';
        this.attachShadow({mode: 'open'}); 
    }
    
    //Observa e identifica cuado cambia un atributo
    static observedAttributes = ['images', 'width', 'height'];

    connectedCallback() {
        this.render();//pintar mi componente con todo y Shadow DOM

        //this.shadowRoot.querySelector('#left').
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === 'images'){
            //console.log(typeof newValue);
            //console.log(JSON.parse(newValue));
            this.images = JSON.parse(newValue);  //Lo convierte a array, newValue era string
        }
        if(name === 'width') {
            this.width = newValue;
        }
        if(name === 'height') {
            this.height = newValue;
        }
    }

    render() {
        const templateC = document.querySelector('#tpl-carousel');
        const contenido = templateC.content.cloneNode(true);

        contenido.querySelector('img').setAttribute('src', this.images[this.index] || '');

        const style = document.createElement('style');
        style.textContent = `
                img {
                    height: ${this.height};
                    width: ${this.width};
                    text-align: center;
                }
                button  {
                    background-color: black;
                    color: white;
                    border: none;
                    border-radius: 3px;
                    margin: 1rem;
                }   
                button:hover {
                    background-color: grey;
                    cursor: pointer;
                }
                button[disabled] {
                    background-color: grey;
                }

                section {
                    display: flex;
                    justify-content: center;
                    align-items: center; 
                }
                .container{
                display: flex;
                flex-direction: column;
                }
                
            `;

            this.shadowRoot.innerHTML='';
            this.shadowRoot.appendChild(style);
            this.shadowRoot.appendChild(contenido);
              

       this.shadowRoot.querySelector('#left').addEventListener('click', () => {
        if(this.index > 0){
            this.index--;
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        }
        if(this.index === 0){
            this.shadowRoot.querySelector('#left').setAttribute('disabled','true');
        } else {
            this.shadowRoot.querySelector('#left').removeAttribute('disabled');
        }

        // Habilitar botón derecho si no está en la última imagen
        this.shadowRoot.querySelector('#right').removeAttribute('disabled');
       });


       this.shadowRoot.querySelector('#right').addEventListener('click', () => {
        if(this.index < this.images.length - 1) {
            this.index++;
            this.shadowRoot.querySelector('img').setAttribute('src', this.images[this.index]);
        }
        if(this.index === this.images.length - 1){
            this.shadowRoot.querySelector('#right').setAttribute('disabled', 'true');
        } else {
            this.shadowRoot.querySelector('#right').removeAttribute('disabled');
        }
        this.shadowRoot.querySelector('#left').removeAttribute('disabled');
       });
    }
}