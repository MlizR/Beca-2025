const and1 = [
    { expresion: '8 && null', resultado: 'null'},
    { expresion: 'hola && NaN', resultado: 'NaN' },
    { expresion: '1 && - 6', resultado: '-6' },
    { expresion: '[ ] && undefined', resultado: 'undefined'},
    { expresion: '{ } && null', resultado: 'null' },
    { expresion: '6 && 0', resultado: '0' },
    { expresion: 'true && " "', resultado: '" "'},
    { expresion: '[1,2,3] && false', resultado: 'false' },
    { expresion: '{nombre: Alicia, apellido: Hernández} && - 0', resultado: '-0' },
    { expresion: 'true && !cadena', resultado: 'false'}
];

const and2 = [
    { expresion: 'null && 0', resultado: 'null'},
    { expresion: 'NaN && 6 ', resultado: 'NaN' },
    { expresion: '- 0 && [ ] ', resultado: '-0' },
    { expresion: 'undefined && Math.pow(2,2)', resultado: 'undefined'},
    { expresion: 'null && 1 ', resultado: 'null' },
    { expresion: '0 && true', resultado: '0' },
    { expresion: '" " && string', resultado: '" "'},
    { expresion: 'false && [1,2,3]', resultado: 'false' },
    { expresion: '!true && true ', resultado: 'false' },
    { expresion: '!5 && 3.1416', resultado: 'false'}
];

const and3 = [
    { expresion: 'NaN && cadenavacia', resultado: 'NaN'},
    { expresion: 'undefined &&  0', resultado: 'undefined' },
    { expresion: 'false && - 9 ', resultado: 'false' },
    { expresion: '- 0 && " "', resultado: '-0'},
    { expresion: '!9 && !{}', resultado: 'false' },
    { expresion: 'Math.random() && null', resultado: 'false' },
    { expresion: 'null && 0', resultado: 'null'},
    { expresion: '!{} && ![1,2,3]', resultado: 'false' },
    { expresion: '!true && !true', resultado: 'false' },
    { expresion: '0 && 0', resultado: '0'}
];

const and4 = [
    { expresion: '1 && cesar', resultado: 'cesar'},
    { expresion: '{ } && [ ]', resultado: '[ ]'},
    { expresion: '5 && 9', resultado: '9' },
    { expresion: '(5 + 6) && (3 + 2)', resultado: '6'},
    { expresion: 'new Set() && new Map()', resultado: 'Map()' },
    { expresion: 'cadena1 && cadena2', resultado: 'cadena2' },
    { expresion: '3==3 && tres', resultado: 'tre'},
    { expresion: '!false && !false', resultado: 'true' },
    { expresion: '!!false && true', resultado: 'true' },
    { expresion: 'symbol && Symbol()', resultado: 'Symbol()'}
];

const or1 = [
    { expresion: '5 || 0', resultado: '5'},
    { expresion: '"uva" || -0', resultado: '"uva"' },
    { expresion: '{ } || NaN', resultado: '{ }'},
    { expresion: '!NaN || ""', resultado: 'true'},
    { expresion: 'Infinity || undefined', resultado: 'Infinity' },
    { expresion: '"manzana" || ""', resultado: '"manzana"' },
    { expresion: '5 && "hola" || -0', resultado: '"hola"'},
    { expresion: 'Symbol() || false', resultado: 'Symbol()' },
    { expresion: '-10 || NaN', resultado: '-10' },
    { expresion: '-Infinity || 0n', resultado: '-Infinity'}
];

const or2 = [
    { expresion: '-0n || "empezar"', resultado: '"empezar"' },
    { expresion: '"" || 6', resultado: '6' },
    { expresion: '!Math.pow() || 5>4', resultado: 'true' },
    { expresion: '10<2 || 2n', resultado: '2n'},
    { expresion: '"n" === 0 || { }', resultado: '{ }' },
    { expresion: 'undefined || 2 >= 2 ', resultado: 'true' },
    { expresion: '"" || (8+2)', resultado: '10' },
    { expresion: 'Math.pow() || 2', resultado: '2' },  //Math.pow() = NaN
    { expresion: 'Number() || "casa"', resultado: '"casa"' },
    { expresion: '0 || new Set()', resultado: 'Set()' }
];

//false || false toma el ultimo valor false
const or3 = [
    { expresion: '0 || NaN', resultado: 'NaN' }, 
    { expresion: 'false || -0n', resultado: '-0n' },
    { expresion: '2*5 == 2+5 || 5>8', resultado: 'false' },
    { expresion: 'undefined || undefined', resultado: 'undefined' },
    { expresion: '0 === "0" || 0', resultado: '0'},
    { expresion: 'false || 3 == 4', resultado: 'false' },
    { expresion: '![ ] || ""', resultado: '""' },
    { expresion: 'NaN || undefined', resultado: 'undefined' },
    { expresion: '"hola" * "2"  || 0/0', resultado: 'NaN' },
    { expresion: '0 || let = num1;', resultado: 'undefined' }
];

//true || true toma el primer valor true
const or4 = [
    { expresion: 'new Map() || 5', resultado: 'Map()'},
    { expresion: '4 > 1 || "cuatro"', resultado: 'true' },
    { expresion: '!false || -9', resultado: 'true' },
    { expresion: '8n || "8n"', resultado: '8n'},
    { expresion: '5+2 == 7 || -2', resultado: '-2' },
    { expresion: '4*5 || [ ]', resultado: '20' },
    { expresion: 'Infinity || -Infinity', resultado: 'Infinity'},
    { expresion: '!NaN || !undefined', resultado: 'true' },
    { expresion: '[] || {edad: 16; sexo: "F"}', resultado: '[]'},
    { expresion: '!0 || !""', resultado: 'true'}
];

const not1 = [
    { expresion: '!5', resultado: 'false' },
    { expresion: '!hola', resultado: 'false' },
    { expresion: '!(3+2)', resultado: 'false' },
    { expresion: '!{ }', resultado: 'false' },
    { expresion: '![ ]', resultado: 'false' },
    { expresion: '!-8', resultado: 'false' },
    { expresion: '!true', resultado: 'false' },
    { expresion: '!num=2', resultado: 'false' },
    { expresion: '!(2/6)', resultado: 'false' },
    { expresion: '!!false', resultado: 'false' }
];false
const not2 = [
    { expresion: '!null', resultado: 'true'},
    { expresion: '!0', resultado: 'true' },
    { expresion: '!NaN', resultado: 'true' },
    { expresion: '!false', resultado: 'true' },
    { expresion: '!!{nombre: "amanda"}', resultado: 'true' },
    { expresion: '!undefined', resultado: 'true' },
    { expresion: '!-0', resultado: 'true' },
    { expresion: '!""', resultado: 'true' },
    { expresion: '!new Set()', resultado: 'true' },
    { expresion: '!0n', resultado: 'true' }
];


function crearTabla(table, arrayExp) {
    const tabla = document.getElementById(table);
   

    arrayExp.forEach(({expresion, resultado}) => {
        const nuevaFila = tabla.insertRow();

        nuevaFila.innerHTML = `
            <td>${expresion}</td>
            <td>${resultado}</td>
        
        `;
    });
}

crearTabla('table-and-1', and1);
crearTabla('table-and-2', and2);
crearTabla('table-and-3', and3);
crearTabla('table-and-4', and4);
crearTabla('table-and-5', or1);
crearTabla('table-and-6', or2);
crearTabla('table-and-7', or3);
crearTabla('table-and-8', or4);
crearTabla('table-and-9', not1);
crearTabla('table-and-10', not2);