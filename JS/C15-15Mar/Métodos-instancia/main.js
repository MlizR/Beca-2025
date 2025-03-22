const ejemplos = [
    { 
        metodo:'at',
        description:'Permite acceder a los elementos de un array mediante un índice numérico, los valores negativos contaran desde el ultimo elemento del array.',
        ejemplo: 'at.png',
        resultado:'r-at.png'
    },
    { 
        metodo:'concat',
        description:'Se utiliza para unir dos o más arrays, no cambia los arrays existentes, devuelve uno nuevo.',
        ejemplo: 'concat.png',
        resultado:'r-concat.png'
    },
    { 
        metodo:'copyWithin',
        description:'Copia una parte de un arreglo dentro del mismo arreglo, sobrescribiendo valores existentes, sin modificar su propiedad length.',
        ejemplo: 'copyWithin.png',
        resultado:'r-copyWithin.png'
    },
    { 
        metodo:'entries',
        description:'Devuelve un nuevo objeto Iterador con pares clave/valor de cada elemento del array.',
        ejemplo: 'entries.png',
        resultado:'r-entries.png'
    },
    { 
        metodo:'every',
        description:'Ejecuta una función por cada elemento del array, devuelve true solo si todos los elementos cumplen con la condición dada en la función.',
        ejemplo: 'every.png',
        resultado:'r-every.png'
    },  
    { 
        metodo:'fill',
        description:'Cambia todos los elementos en un array por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length)',
        ejemplo: 'fill.png',
        resultado:'r-fill.png'
    },
    { 
        metodo:'filter',
        description:'Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.',
        ejemplo: 'filter.png',
        resultado:'r-filter.png'
    },
    { 
        metodo:'find',
        description:'Devuelve el primer elemento dentro de un arreglo que satisface la función callback.',
        ejemplo: 'find.png',
        resultado:'r-find.png'
    },
    { 
        metodo:'findIndex',
        description:'Devuelve el índice del primer elemento de un array que satisface la función callback, en caso contrario devuelve -1.',
        ejemplo: 'findIndex.png',
        resultado:'r-findIndex.png'
    },
    { 
        metodo:'findLast',
        description:'Itera el array en orden inverso y devuelve el valor del primer elemento que satisface la función callback. Si ningún elemento cumple la función se devuelve undefined.',
        ejemplo: 'findLast.png',
        resultado:'r-findLast.png'
    },
    { 
        metodo:'findLastIndex',
        description:'Itera el array en orden inverso y devuelve el índice del primer elemento que cumple la función callback. Si ningún elemento la cumple, devuelve -1.',
        ejemplo: 'findLastIndex.png',
        resultado:'r-findLastIndex.png'
    },
    { 
        metodo:'flat',
        description:'Crea un nuevo array con todos los elementos de sub-array concatenados hasta la profundidad especificada. Elimina las ranuras vacías en en arreglo.',
        ejemplo: 'flat.png',
        resultado:'r-flat.png'
    },
    { 
        metodo:'flatMap',
        description:'Recorre los elementos de un arreglo usando un callback de mapeo y concatena los elementos en un nivel',
        ejemplo: 'flatMap.png',
        resultado:'r-flatMap.png'
    },
    { 
        metodo:'forEach',
        description:'Recorre un array ejecutando una función callback una vez por cada elemento. No se puede detener con break y tampoco con return.',
        ejemplo: 'forEach.png',
        resultado:'r-forEach.png'
    },
    { 
        metodo:'includes',
        description:'Determina si un array incluye un determinado elemento, devuelve true o false según corresponda.',
        ejemplo: 'includes.png',
        resultado:'r-includes.png'
    },
    { 
        metodo:'indexOf',
        description:'Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o retorna -1 si el elemento no se encuentra.',
        ejemplo: 'indexOf.png',
        resultado:'r-indexOf.png'
    },
    { 
        metodo:'join',
        description:'Permite tomar un array y unir sus elementos en una sola cadena. Se le asigna un separador, que se coloca entre cada elemento al unirlos.',
        ejemplo: 'join.png',
        resultado:'r-join.png'
    },
    { 
        metodo:'keys',
        description:'Devuelve un nuevo objeto Array Iterator que contiene las claves para cada indice en el array.',
        ejemplo: 'keys.png',
        resultado:'r-keys.png'
    },
    { 
        metodo:'lastIndexOf',
        description:'Se usa para encontrar la última posición en la que aparece un elemento dentro de un array, retorna -1 si el elemento no existe.',
        ejemplo: 'lastIndexOf.png',
        resultado:'r-lastIndexOf.png'
    },
    { 
        metodo:'map',
        description:'Devuelve un nuevo array aplicando una función callback a cada elemento del array original.',
        ejemplo: 'map.png',
        resultado:'r-map.png'
    },
    { 
        metodo:'pop',
        description:'Elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array, devuelve undefined si el array esta vacio.',
        ejemplo: 'pop.png',
        resultado:'r-pop.png'
    },
    { 
        metodo:'push',
        description:'Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.',
        ejemplo: 'push.png',
        resultado:'r-push.png'
    },
    { 
        metodo:'reduce',
        description:'Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.',
        ejemplo: 'reduce.png',
        resultado:'r-reduce.png'
    },
    { 
        metodo:'reduceRight',
        description:'Aplica una función callback contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un único valor.',
        ejemplo: 'reduceRight.png',
        resultado:'r-reduceRight.png'
    },
    { 
        metodo:'reverse',
        description:'Invierte el orden de los elementos de un array, el primer elemento pasa a ser el último y el último pasa a ser el primero.',
        ejemplo: 'reverse.png',
        resultado:'r-reverse.png'
    },
    { 
        metodo:'shift',
        description:'Elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.',
        ejemplo: 'shift.png',
        resultado:'r-shift.png'
    },
    { 
        metodo:'slice',
        description:'Devuelve un nuevo array, permite extraer partes de un array sin alterar el original, start: es el índice para comenzar y end: es el índice para finalizar (no incluido).',
        ejemplo: 'slice.png',
        resultado:'r-slice.png'
    },
    { 
        metodo:'some',
        description:'Devuelve true si al menos un elemento del array cumple con la condición implementada por la función callback de lo contrario retorna false.',
        ejemplo: 'some.png',
        resultado:'r-some.png'
    },
    { 
        metodo:'sort',
        description:'Se usa para ordenar los elementos de un array de forma ascendente o descendente, se le puede agregar como parametro una función que defina el criterio de ordenación.',
        ejemplo: 'sort.png',
        resultado:'r-sort.png'
    },
    { 
        metodo:'splice',
        description:'Se usa para modificar un array eliminando, reemplazando o agregando elementos en una posición específica.',
        ejemplo: 'splice.png',
        resultado:'r-splice.png'
    },
    { 
        metodo:'toLocaleString',
        description:'Devuelve una cadena de texto representando los elementos del array.',
        ejemplo: 'toLocaleString.png',
        resultado:'r-toLocaleString.png'
    },
    
    { 
        metodo:'toReversed',
        description:'Devuelve un nuevo array, invierte el orden de los elementos de un array y no modifica el array original.',
        ejemplo: 'toReversed.png',
        resultado:'r-toReversed.png'
    },
    { 
        metodo:'toSorted',
        description:'Devuelve una nuevo array con los elementos ordenados en orden ascendente(Versión copia de sort())',
        ejemplo: 'toSorted.png',
        resultado:'r-toSorted.png'
    },
    { 
        metodo:'toString',
        description:'devuelve una cadena que representa la matriz especificada y sus elementos.',
        ejemplo: 'toString.png',
        resultado:'r-toString.png'
    },
];

function crearTabla(table, array) {
    const tabla = document.getElementById(table);
   

    array.forEach(({metodo, description, ejemplo, resultado}) => {
        const nuevaFila = tabla.insertRow();

        nuevaFila.innerHTML = `
            <td><h4>Array.prototype.${metodo}()</h4></td>
            <td><p>${description}</p></td>
            <td><img src='img/ejemplos/${ejemplo}' alt='Ejemplo del método ${metodo}'/></td>
             <td><img src='img/resultados/${resultado}' alt='Resultado del ejemplo (${metodo}')/></td>
        
        `;
    });
}

crearTabla('table-intance-methods', ejemplos)



//EJEMPLOS

//Array.prototipe.at()
const numeros = [5, 12, 8, 130, 44];
console.log(numeros.at(3));

const animales = ['Perro', 'Tiburón', 'Vaca', 'Pollo', 'Oso','Tigre'];
console.log(animales.at(-2));

//Array.prototipe.concat()
//const frutas = ['Manzana', 'Fresa', 'Pepino'];
//const frutasNuevas = ['Kiwi', 'Snadia', 'Naranja', 'Uva'];
//const arrayConcat = frutas.concat(frutasNuevas);
//console.log(arrayConcat);

//Array.prototipe.copyWithin()
const vocales = ['a', 'e', 'i', 'o', 'u'];
vocales.copyWithin(0, 2);         
console.log(vocales);

//array.copyWithin(target, start, end)
const num = [1,2,3,4,5,6,7,8,9];
num.copyWithin(0, 4, 8);
console.log(num);

//Array.prototype.entries()
let razasPerro = ['Doberman', 'Pamerania', 'Labrador', 'Golden', 'Beagle'];
let arrayIterator = razasPerro.entries();
for (let i of arrayIterator) {
    //console.log(i);
}

//Array.prototype.every()
const estaturas = [1.72, 1.64, 1.80, 1.70, 1.98];
const verificarEstaturas = (estatura) => {
    return estatura >= 1.40; 
}
console.log(estaturas.every(verificarEstaturas));

//Array.prototype.fill()
const edades = [22, 5, 10, 11, 60, 42, 15];
console.log(edades.fill(22, 3));
console.log(edades.fill(5, -4));

//Array.prototype.filter()
const peliculas = [
    { titulo: 'Rascacielos: Rescate en las alturas', genero: 'Acción' },
    { titulo: 'Minions', genero: 'Infantil' },
    { titulo: 'Como entrenar a tu dragón', genero: 'Familiar' },
    { titulo: 'Titanes del pacífico', genero: 'Acción' }
];
const peliculasAccion = peliculas.filter(pelicula => pelicula.genero === 'Acción');
console.log('Peliculas de acción: ', peliculasAccion);

//Array.prototype.find()
let perros = [
    { raza: "Beagle", color: "blanco" },
    { raza: "Pug", color: "beige" },
    { raza: "Pastor alemán", color: "negro con cafe" },
    { raza: "Pug", color: "negro" }
];
const buscarPerro = perros.find(perro => perro.raza == 'Pug');
console.log(buscarPerro);

//Array.prototype.findIndex()
const nombres = ['Andres', 'Isabel', 'Mariana', 'Ximena', 'Emily'];
const nombreIndex = nombres.findIndex(nombre => nombre == 'Mariana');
console.log(`El nombre se encuentra en el indice: ${nombreIndex}`);
console.log(nombres.findIndex(nombre => nombre == 'Lizette'));

//Array.prototype.find()
let usuarios = [
    { usuario: "Melanie", rol: "admin" },
    { usuario: "Felipe", rol: "desarrollador" },
    { usuario: " Liliana", rol: "diseñador" }
    
];
const buscarUsuario = usuarios.findLast(usuario => usuario.rol == 'admin');
console.log(buscarUsuario);
console.log(usuarios.findLast(usuario => usuario.rol == 'tester'));

//Array.prototype.findLastIndex()
const comidas = ['Pizza', 'Alitas', 'Pozole', 'Hamburguesas', 'Spaguetti'];
const comidaIndex = comidas.findLastIndex(comida => comida == 'Alitas');
console.log(`La comida se encuentra en el indice: ${comidaIndex}`);
console.log(comidas.findLastIndex(comida => comida == 'Chilaquiles'));


//Array.prototype.flat()
const dias = ['Lunes', , ['Miercoles', 'Jueves'], ['Viernes', ['Sabado', 'Domingo']]];
console.log(dias.flat());
console.log(dias.flat(2));

//Array.prototype.flatMap()
const frutas = ['Uva', ['Verdes', 'Moradas'], 'Manzana', ['Amarilla', 'Roja']];
console.log(frutas.flatMap(fruta => fruta));

//Array.prototype.forEach()
const numerosT = [1,2,3,4,5,6,7,8,9,10];
numerosT.forEach(num => {
    //console.log(`5 x ${num} = ${5 * num}`);
});

//Array.prototype.includes()
const productos = ['Jamón', 'Azúcar', 'Leche', 'Aceite', 'Harina'];
console.log(productos.includes('Aceite'));
console.log(productos.includes('Pan tostado'));

//Array.prototype.indexOf()
const letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras.indexOf('d'));
console.log(letras.indexOf('x'));

//Array.prototype.join()
const cuento = ['Narración', 'breve', 'que', 'cuenta', 'una', 'historia', 'ficticia', 'o', 'real'];
console.log(cuento.join(' '));
console.log(cuento.join(' - '));


//Array.prototype.keys()
const lenguajes = ['C++', 'Python', 'JavaScript', 'Java'];
const arrayIterador = lenguajes.keys();

for(let key of arrayIterador){
    console.log(key);
}

//Array.prototype.lastIndexOf()
const precios = [12, 14, 60, 12, 16, 21, 47, 14];
console.log(`Ultima pocisón: ${precios.lastIndexOf(12)}`);
console.log(`Ultima pocisón: ${precios.lastIndexOf(14, 6)}`);

//Array.prototype.map()
const datos =[10, 8, 3, 4, 9, 14];
const nuevosDatos = datos.map(dato => dato * 2);
console.log(datos);
console.log(nuevosDatos);

//Array.prototype.pop()
// const flores = ['Rosa', 'Margarita', 'Girasol', 'Clavel'];
// console.log(flores.pop()); 
// console.log(flores);

//Array.prototype.push()
const flores = ['Rosa', 'Margarita', 'Girasol', 'Clavel'];
console.log(`Nueva longitud: ${flores.push('Geranio', 'Azucena')}`);
console.log(flores);

//Array.prototype.reduce()
const ventas = [
    { nombrePlato: 'Hamburguesa', monto: 70  },
    { nombrePlato: 'Sushi', monto: 120 },
    { nombrePlato: 'Alitas', monto: 85 }
];
//array.reduce(callback((acumulador, valorActual) ,valorInicial));
const sumaVentas = ventas.reduce((acumulador, plato) => acumulador + plato.monto, 0);
console.log('EL total de ventas es de: $',sumaVentas);


//Array.prototype.reduceRight()
const colores = ['azul', 'morado', 'verde', 'rojo', 'amarillo'];
const colorReduce = colores.reduceRight((acumulador, color) => acumulador + color, ''); 
console.log(colorReduce);

//Array.prototype.reverse()
const apellidos = ['Meléndez', 'Días', 'Morales', 'Romero', 'Fuentes'];
console.log(apellidos.reverse());

//Array.prototype.shift()
const meses = ['Agosto', 'Mayo', 'Marzo', 'Enero', 'Junio', 'Julio'];
console.log(`Elemento eliminado: ${meses.shift()}`); 
console.log(meses);

//Array.prototype.slice()
const verduras = ['Jitomate', 'Espinaca', 'Brócoli', 'Zanahoria', 'Chicharos'];
const verduraSlice = verduras.slice(1,4);
console.log(verduraSlice);

//Array.prototype.some()
const  notas = [6, 8, 5, 5, 8, 10];
console.log(notas.some(nota => nota >= 6));
console.log(notas.some(nota => nota == 3));

//Array.prototype.sort()
const ordenar = [40, 22, 10, 2, 18, 1, 45, 80];
console.log(ordenar.sort());
console.log(ordenar.sort((a,b) => a-b));
console.log(ordenar.sort((a,b) => b-a));


//Array.prototype.splice()
const idiomas = ['Inglés', 'Español', 'Portugués', 'Japones'];
idiomas.splice(1, 0, 'Árabe');      //Agrega un elemento
console.log(idiomas);
idiomas.splice(2,1, 'Alemán');      //Remplaza un elemento
console.log(idiomas);
idiomas.splice(3,1);                //Elimina un elemento
console.log(idiomas);

//Array.prototype.toLocaleString()
let monedas = [27.90, 21, 300];
//array.toLocalString(locales, (options));
console.log(monedas.toLocaleString("es-ES", { style: "currency", currency: "EUR" }));
console.log(monedas.toLocaleString("en-US", { style: "currency", currency: "USD" }));

//Array.prototype.toReversed()
const sentidos = ['Olfato', 'Gusto', 'Tacto', 'Vista', 'Oido'];
console.log(sentidos.toReversed());

//Array.prototype.toSorted()
const nume = [45, 12, 1, 6, 10];
const ordenaSort = nume.toSorted((a,b) => a - b);
console.log(ordenaSort);

//Array.prototype.toString()
