const employee = {
    firstName: 'Pedro',
    age: 30,
}
const street = employee.address?.street;
console.log(street);

const person = {
    'name': 'Liz',
    'lastName': 'Melendez',
    'hobby': 'videojuegos',
    'favoriteMovie': ['Moana', 'Como entrenara  tu dragon', 'Seven']
};

console.log(JSON.stringify(Object.entries(person)));

//Debe ser Object.hasOwn no obj.hasOwn
const obj ={nombre: 'Lizette', apellido: 'Melendez'};
//console.log(obj.hasOwn(obj, 'edad'));


const writer = {
    name: 'Juan Rulfo',
    country: 'Mexico'
}

//Recibe una copia de writer no una referencia 
const anotherWriter = {...writer};
writer.name = 'Mariano Azuela';
writer.country = 'Peru';
//
console.log(anotherWriter);
console.log(writer);