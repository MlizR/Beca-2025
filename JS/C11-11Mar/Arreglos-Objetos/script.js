// 1 - Sistema de inventario de una tienda
let productos = [
    {
        nombre: 'Jabón',
        precio: 25,
        stock: 4
    },
    {
        nombre: 'Papel higiénico',
        precio: 32,
        stock: 10
    },
    {
        nombre: 'Arroz',
        precio: 28,
        stock: 0
    },
    {
        nombre: 'Mayonesa',
        precio: 40,
        stock: 2
    },
    {
        nombre: 'Azucar',
        precio: 23,
        stock: 0
    },
];

productosStock = productos.filter((producto) => producto.stock > 0);
console.log('Productos con stock disponible', productosStock)

// 3 - Citas Médicas
const citas =[
    {
        fecha: '2025-03-11',
        paciente: 'Javier',
        doctor: 'Ismael'
    }
];
//console.log(citas);

function registrarCita() {
    const fechaC = document.getElementById('date').value;
    const nombre = document.getElementById('name').value;
    const doctorC = document.getElementById('dr').value;
    //console.log(fechaC, nombre, doctorC);

    if (!fechaC || !nombre || !doctorC) {
        console.log("Introduce valores");
        return;
    }

    const nuevaCita ={
        fecha: fechaC,
        paciente: nombre,
        doctor: doctorC
    };

    citas.push(nuevaCita);
  
    console.log('Citas Registradas: ', citas);
}

// 4 - Filtrar peliculas por género
const peliculas = [
    {
        titulo: 'Rascacielos: Rescate en las alturas',
        genero: 'Acción'
    },
    {
        titulo: 'Minions',
        genero: 'Infantil'
    },
    {
        titulo: 'Como entrenar a tu dragón',
        genero: 'Familiar'
    },
    {
        titulo: 'Titanes del pacífico',
        genero: 'Acción'
    },
    {
        titulo: 'Godzilla y Kong: El nuevo imperio',
        genero: 'Acción'
    }
];

const peliculasAccion = peliculas.filter(pelicula => pelicula.genero === 'Acción');
console.log('Peliculas de acción: ', peliculasAccion);


// 5 - Sistema de biblioteca
const libros = [
    {
        titulo: 'El laberinto de la soledad',
        autor: 'Octavio Paz',
        estado: 'Disponible'
    }
];

function registrarLibro() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('aut').value;
    const state = document.getElementById('state').value;

    if (!title || !author || !state) {
        console.log("Introduce valores");
        return;
    }

    const nuevoLibro = {
        titulo: title,
        autor: author,
        estado: state
    };

    libros.push(nuevoLibro);

    console.log('Libros registrados', libros);

    const librosDisponibles = libros.filter(libro => libro.estado === 'Disponible');
    console.log('Libros disponibles: ', librosDisponibles);
}

// 6 -  Registro de empleados y sueldos
const empleados = [
    {
        nombre: 'Raul',
        sueldo: 1200
    },
    {
        nombre: 'Ximena',
        sueldo: 1500
    },
    {
        nombre: 'Rodrigo',
        sueldo: 1700
    },
    {
        nombre: 'Ismael',
        sueldo: 1000
    },
];

const sumaSueldos = empleados.reduce((acumulador, empleado) => acumulador + empleado.sueldo, 0);
console.log('Sueldo total que debe pagar la empresa: $', sumaSueldos);

// 7 - Función buscar producto en un catalogo
const catalogo = [
    {
        nombreProducto: 'Pila recargable',
        precio: 300
    },
    {
        nombreProducto: 'Protector solar',
        precio: 250
    },
    {
        nombreProducto: 'Espejo',
        precio: 530
    },
    {
        nombreProducto: 'Plumones',
        precio: 80
    },
    {
        nombreProducto: 'Cafe soluble',
        precio: 52
    }
];

function buscarNombreProducto() {
    const productoInput = document.getElementById('buscar').value; 

    if (!productoInput) {
        console.log("Introduce valores");
        return;
    }

    const productoBuscado = catalogo.find(producto => producto. nombreProducto === productoInput);

    if(productoBuscado){
        console.log(`El producto ${productoBuscado.nombreProducto} tiene un precio de: $${productoBuscado.precio}`);  
    } else{
        console.log(`El producto ${productoInput} no existe en el catalogo`);
    }
}

// 8 - Gestión de usuarios
const usuarios = [
    {
        nombre: 'Alberto',
        rol: 'admin'
    },
    {
        nombre: 'Javier',
        rol: 'usuario'
    },
    {
        nombre: 'Fernanda',
        rol: 'admin'
    },
    {
        nombre: 'Lucía',
        rol: 'admin'
    },
    {
        nombre: 'Ulises',
        rol: 'usuario'
    }
];

const usuariosAdmin = usuarios.filter(usuario => usuario.rol === 'admin');
console.log('Usuarios con rol admin: ',usuariosAdmin);


// 9 - Total de ventas en un restaurante
const ventas = [
    {
        nombrePlato: 'Hamburguesa',
        monto: 70 
    },
    {
        nombrePlato: 'Sushi',
        monto: 120
    },
    {
        nombrePlato: 'Alitas',
        monto: 85
    }
];

const sumaVentas = ventas.reduce((acumulador, plato) => acumulador + plato.monto, 0);
console.log('EL total de ventas en el restaurante es de: $',sumaVentas);

// 10 - Registro de asistencia en una clase 
const asistencias = [
    {
        nombre: 'Miriam',
        asistencia: 'Presente'
    }
];

function registrarAsistencia() {
    const nombreAlumno = document.getElementById('nameA').value;
    const asistio = document.getElementById('opciones').value;
    
    if (!nombreAlumno || !asistio) {
        console.log("Introduce valores");
        return;
    }

    const nuevoRegistro = {
        nombre: nombreAlumno,
        asistencia: asistio
    };

    asistencias.push(nuevoRegistro);

    console.log('Alumnos registrados', asistencias)

    const alumnosPresentes = asistencias.filter(alumno => alumno.asistencia === 'Presente');
    const contar = alumnosPresentes.length;
    console.log(`Solo hay ${contar} alumnos presentes y son:`, alumnosPresentes);
}




