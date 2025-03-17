function construirCarro(carro) {
    console.log(`Construir carro para ${carro.dueño}`);
    console.log(`Marca: ${carro.marca}`);
    console.log(`Color: ${carro.color}`);
    console.log(`Tipo: ${carro.tipo}`);


}
construirCarro({dueño: 'Matias', marca: 'Toyota', color: 'Azul', tipo: 'Sedán' });
construirCarro({dueño: 'Melani', marca: 'Nissan', color: 'Verde', tipo: 'Sedán' });


function construirCasa(casa) {
    console.log(`Contrucción de casa en ${casa.lugar}, en un terreno de ${casa.tamaño} metros cuadrados con ${casa.habitaciones} habitaciones.`)

}

construirCasa({lugar:'Puebla', tamaño: '80', habitaciones: '3', })


function animales(animal) {
    console.log(`El ${animal.nombre} es un animal ${animal.tipo} que se alimenta de ${animal.comida} y tiene una esperanza de vida de ${animal.esperanzaV} años.`)

}
animales({tipo: 'Marino', nombre: 'Pez globo', comida:'algas marinas', esperanzaV: '2 a 3'});

function venderComputadoras(comprador, comp){
    console.log(`Venta de computadora ${comp.marca} con un precio de  $${comp.precio}`);
    console.log(`Datos del comprador: ${comprador.nombre} tiene un sueldo mensual de $${comprador.sueldoM} y su número de contacto es: ${comprador.telefono}`);

    if(comprador.sueldoM < 4000){
        console.log('Lo sentimos no se autorizo la compra del equipo');
    } else {
        console.log('Listo, su compra se completo con éxito')
    }
    
}

venderComputadoras({nombre: 'Armando', sueldoM: 7000, telefono: 2462026440}, {marca:'HP', precio: 8400});
venderComputadoras({nombre: 'Ulises', sueldoM: 3200, telefono: 5589340910}, {marca:'Lenovo', precio: 12000});


function celulares(celular){

    console.log(`El celular con el modelo ${celular.modelo} cuenta con:`)
    console.log(`RAM: ${celular.ram}GB`);
    console.log(`Versión de adroid: ${celular.versiónAnd}`);
    console.log(`En bodega hay ${celular.existencia} equipos disponibles`)

}

celulares({modelo: '23122PCD34G', versiónAnd: '15', ram: 12, cpu:'Snapdragon', existencia: 10});