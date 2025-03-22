// Crea una clase que extiende HTMLElement
class Calculadora extends HTMLElement {

    //Inicializa el componente
    constructor() {
        //Llama al constructor de HTMLElement,  permite que la clase heredada (componente) tenga acceso a las funciones de HTMLElement.
        super();
        //Creación del shadow DOM
        this.attachShadow({mode: 'open'});  
        
        //Estilos
        const style = document.createElement('style');
        style.textContent = `
            *{
                margin: 0;
                padding: 0;        
            }
            main{
                background-color: #fff;
                width: 20rem;
                height: 24rem;
                border-radius: 2rem;
                padding: 1.5rem;
            }
            p{
                height: 2.5rem;
                background-color: #575757;
                border: none;
                color: #fff;
                padding: 0 1rem;
                font-size: 1.3rem;
                display: flex;
                align-items: center;
                justify-content: end;
            }
            #mostrar{
                border-radius: 1rem 1rem 0 0;
            }
            #resultado{
                margin-bottom: 1.5rem;
                border-radius: 0 0 1rem 1rem;
            }
            .btn-container{
                display: flex;
                gap: 1.5rem;
                margin-bottom: 0.5rem;
            }
            button{
                background-color: #e4e4e4;
                border: none;
                width: 3.8rem;
                height: 3.8rem;
                border-radius: 50%;
                font-size: 2rem;
            }
            .color{
                background-color: #929292;
            }
        `;

        //Estructura
        const main = document.createElement('main');
        this.mostrar = document.createElement('p');
        this.mostrar.id = 'mostrar';
        this.resultado = document.createElement('p');
        this.resultado.id = 'resultado';

        main.appendChild(this.mostrar);
        main.appendChild(this.resultado);


        const botones = [
            ["7", "8", "9", "/"],
            ["4", "5", "6", "*"],
            ["1", "2", "3", "-"],
            ["0", "C", "=", "+"],
          ];

          botones.forEach(contenedor => {
            const section = document.createElement('section');
            section.classList.add('btn-container');

            contenedor.forEach(value => {
                const boton = document.createElement('button');
                boton.textContent = value;

                boton.addEventListener('click', () => {
                    if(value === 'C'){
                        this.mostrar.textContent = '';
                        this.resultado.textContent = '';
                    } else if(value === '=') {
                       
                    } else {
                        this.mostrar.textContent += value;
                    }

                });

                section.appendChild(boton);
            });
            main.appendChild(section);
          })



        //Agregar estilos y estructura al Shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(main);
    }   

   
}

//Registrar el componente
customElements.define('mi-calculadora', Calculadora);