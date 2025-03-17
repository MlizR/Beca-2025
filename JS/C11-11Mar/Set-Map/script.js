// 1- Eliminar duplicados en una lista de productos
const productos = ['Leche', 'Jamon', 'Cereal', 'Leche', 'Agua', 'Cereal', 'Mantequilla', 'Mantequilla', 'Leche', 'Sopa'];
const eliminarDuplicados = new Set(productos);
console.log(productos)
console.log(eliminarDuplicados);


// 2 - Contar palabras unicas en un texto
const cadena = 'Enunciado o conjunto coherente de enunciados orales o escritos';
const subcadenas = cadena.split(' ');
//console.log(subcadenas);

const palabrasUnicas = new Set(subcadenas);
console.log(`Hay ${palabrasUnicas.size} palabras únicas en el texto`);

// 3 - Verificar si un usuario en especifico ya inicio sesión
const usuariosEnSesion = ['Julian', 'Javier', 'Melisa', 'Maite', 'Victor'];
const setEnSesion = new Set(usuariosEnSesion);
console.log(setEnSesion.has('Vector'));
console.log(setEnSesion.has('Victor'));

//4 - Lista de invitados unicos
const listaInvitados = ['Irene', 'Marisol'];
const invitadosUnicos = new Set(listaInvitados);

function registrarInvitado() {
    const invitado = document.getElementById('invited').value;

    if (!invitado) {
        console.log("Introduce un nombre");
        return;
    }

    if(invitadosUnicos.has(invitado)){
        console.log("El invitado ya esta en la lista, agrega uno nuevo")
    } else {
        invitadosUnicos.add(invitado);
        console.log("El invitado se registro con éxito")
    }
    console.log(invitadosUnicos);
}

// 5 - Registro de placas de autos unicos
const placasUnicas = new Set(['XWF-17-51', 'XVB-92-52']);

function registrarPlacas() {
    const placas = document.getElementById('placa').value;

    if(!placas){
        console.log("Introduce un número de placa")
        return;
    }

    if(placasUnicas.has(placas)){
        console.log("No puedes registrar las mismas placas 2 veces");
    } else {
        placasUnicas.add(placas);
        console.log("Las placas se registraron exitosamente");
    }
    console.log(placasUnicas);
}

console.log('EJERCICIOS CON MAP')

// 6 - Contar la frecuencia de palabras en un texto

const texto = 'un cuento es una narración breve que cuenta la historia de un grupo de personajes que desarrollan una trama';
const palabrasTexto = texto.split(' ');

const mapPalabras = new Map();


// 7 - Consultar por nombre el precio de lo productos
const mapProductos = new Map();
mapProductos.set('mayonesa', 52);
mapProductos.set('mermelada', 30);
mapProductos.set('jamon', 20);

console.log(mapProductos.has('mermelada'));
console.log(mapProductos);

// 8 - Agenda telefonica

const mapContactos = new Map();
mapContactos.set('Veronica', 2462026440);
mapContactos.set('Jesus', 2212006035);
mapContactos.set('Alberto', 5578905416);
mapContactos.set('Alison', 2225847962);
mapContactos.set('Eduardo', 5213986190);

function buscarContacto() {
    const nombreContacto = document.getElementById('agenN').value;

    if(!nombreContacto){
        console.log("Introduce un nombre")
        return;
    }

    if(mapContactos.has(nombreContacto)){
        console.log(`El numero telefonico de ${nombreContacto} es ${mapContactos.get(nombreContacto)}`);
    } else {
        console.log(`El contecto ${nombreContacto} no esta registrado en tu agenda`);
    }

    //console.log(mapContactos);
}

// 9 - Contar número de votos
const votos = ['Ernesto', 'Daniel', 'Roberto', 'Daniel', 'Roberto', 'Roberto', 'Daniel', 'Ernesto', 'Daniel', 'Ernesto'];

const contarVotos = new Map();




