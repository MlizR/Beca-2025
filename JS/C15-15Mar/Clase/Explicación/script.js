//objeto: Abstraccción de la vida real, algo que representa a un objeto 



//instancia un objeto creada atraves de un clase

//Prototipos: propiedades basicas minimas que necesita un objeto
//Las funciones definene el prototipo 

//todos los numeros se construyen con una función constructora (Number())


class Carro {
    constructor(puertas = 4, anio) { //Valor por defecto
        this.puertas = puertas;
        this._modelo = 'generico';
        this.__anio = anio ?? 2025; //nullish coleasing operator, si es nulo o undefined asigna 2025 si no 
    }
    //Metodos de clase
    mover(){
        if(this.__anio > 2024){
            this._modelo = 'S4';
        }
        console.log(`El carro es ${this._modelo} RUN RUN RUN`);
    }
}

const bmw = new Carro(5);
bmw.mover();

//bmw.puertas; //acceder a un atributo
//bmw['puertas'];//Acceder a un atributo


//propiedad privada _modelo sirve para hacer calculos internos
//protegido __anio
//publica puertas usuarios entrar a la propiedad, API publica Propiedades a las que podemsos acceder

//$0 __prototype__


//Herencia se maneja como cadena de prototipos 
//extens
//sugar syntax
class Persona extends Carro {
    constructor(nombre, edad, sexo) {
        super(4, 2024);
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    //Acciones que puede hacer un objeto de tipo persona
    saludar() {
        console.log(`Hola soy: ${this.nombre}`);
    }
}
const jeronimo = new Persona('Jeronimo', 22, 'M');  //this liga las propiedades a un objeto en este caso jeronimo
//console.log(jeronimo);
jeronimo.saludar();
jeronimo.mover;
console.log(jeronimo);

//Agregar un 
Array.prototype.myOwnReduce = function(callback, initialValue) {
    let acumulador = initialValue;
    for(let i = 0; i < this.length; i++){
        acumulador = callback(acumulador, this[i]);
    }
    return acumulador;
}

const resultRed = [1,2,3].myOwnReduce((acumulador, item) => {
    acumulador += item;
    return acumulador;
}, 0);
console.log(resultRed);

//El ultimo portotipo de los que generen es object

//metodo constructor para inicializar valores
// const persona = {
//     nombre: 'Perdrito'
// } //literal object 

// persona.edad = 50; //Agrega una atributo
// console.log(persona);

// let telefono = 2462026440;
// telefono.toFixed(); //toFixed esta dentro del prototipo

// const aa = [1,2,3];
// //aa.reduce(); //reduce esta dentro del prototipo
// console.log(aa);


//Array.prototype
//Array.__proto__
// ejemplo y resultado
//Tabla con html y descripción que hace el codigo


//[].method()
//Metodos estaicos no se puede usar this
// Array.staticMethod