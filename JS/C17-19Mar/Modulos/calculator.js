let contenedor = document.getElementById('mostrar');
let result = document.getElementById('resultado');


export const mostrarValor = (valor) => {
    contenedor.textContent += valor;
    //console.log(contenedor.textContent);
};

const calcular = (expresion) => {
    //console.log('Expresión en calcular(): ', expresion)

    let expresionDividida = expresion.split(/(\+|\-|\*|\/)/);
    //console.log(expresionDividida);
    let operando1 = parseFloat(expresionDividida[0]);
    let operacion = expresionDividida[1];
    let operando2 = parseFloat(expresionDividida[2]);

    switch (operacion) {
        case "+": return operando1 + operando2;
        case "-": return operando1 - operando2;
        case "*": return operando1 * operando2;
        case "/": return operando2 !== 0 ? operando1 / operando2 : 'No se puede dividir entre 0';
        default: return 'Operación invalida';

    }
}

export const mostrarResultado = () => {
    let expresion = contenedor.textContent;
    //console.log('Expresión en mostrarResultado()', expresion);
    result.textContent = calcular(expresion);
}

export const limpiar = () => {
    contenedor.textContent = "";
    result.textContent = "";
}



