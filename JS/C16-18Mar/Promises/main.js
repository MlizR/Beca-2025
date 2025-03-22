/**
 * MÉTODOS DE INSTANCIA 
 * catch()
 * then()
 * finally()
 */

const callback = (resolve, reject) => {
    let exito = Math.random() > 0.5;
    setTimeout(() => {
        if(exito){
            resolve('Promesa cumplida');
        } else {
            reject('Promesa rechazada');
        }
    }, 2000);
};

const promise = new Promise(callback);
console.log(promise);

promise
.then(resultado => {
    console.log('Éxito ', resultado);
    console.log(promise);
})
.catch(error => {
    console.log('Error ', error);
    console.log(promise);
})
.finally(() => {
    console.log('Operación finalizada');
});


/**
 * MÉTODOS ESTÁTICOS
 * all()
 * 
 */

//Promise.all()
const tareaAsincrona = (exito, tiempo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(exito) {
                resolve(`Tarea completada en ${tiempo}ms`);
            } else {
                reject(`Error: Falló después de ${tiempo}ms`);
            }
        }, tiempo);
    });
}
const p1 = tareaAsincrona(true, 1000);
const p2 = tareaAsincrona(true, 1500);
const p3 = tareaAsincrona(true, 2000);

Promise.all([p1, p2, p3])
.then((resultados) => {
    console.log('Todas las promesas se cumplieron: ', resultados);
})
.catch((error) => {
    console.log('Al menos una promesa falló', error);
});


//Promise.allSettled()
const p4 = Promise.resolve('Éxitoso');
const p5 = Promise.reject('Rechazado');
const p6 = new Promise((resolve) => setTimeout(() => resolve('Promesa cumplida'), 1500));

Promise.allSettled([p4, p5, p6])
.then(resultados => console.log('Resultados: ', resultados));


//Promise.any()
const error1 = Promise.reject('Error 1');
const error2 = Promise.reject('Error 2');
const error3 = Promise.reject('Error 3');
//const exito = Promise.resolve('Cumplida');

//Decvuelve la primera promesa que se resuleva ignorando los errores
Promise.any([error1, error2, error3])
//Promise.any([error1, error2, exito])
.then(resultado => console.log('Primer éxito', resultado))
.catch(error => console.log('Todas fallaron: ', error));

//Promise.race()
const rapida = new Promise(resolve => setTimeout(() => resolve('Rapida'), 500));
const lenta = new Promise(resolve => setTimeout(() => resolve('Lenta'), 2000));

//Devuelve la mas rapida
Promise.race([rapida, lenta])
.then(resultado => console.log('Ganador: ', resultado));

//Promise.reject()
Promise.reject('Fallo la promesa')
.catch(error => console.log(error));

//Promide.resolve()
Promise.resolve('La promesa se cumplio exitosamente')
.then(value => console.log(value));

