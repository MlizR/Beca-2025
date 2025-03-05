const input = document.querySelector('#input-search');

const frutas = [
    "sandia",
    "melon",
    "naranja",
    "uva",
    "jicama"
];

let listaFiltrada =[]; 

// Crea una lista para las opciones
const ol = document.getElementById('list-frutas');


input.addEventListener('input', () => {
    const texto = input.value;

    //Filtra las frutas segun el texto
    listaFiltrada = frutas.filter((element) => element.includes(texto));

    //Limpia el contenido anterior de la lista
    ol.innerHTML = '';

    //Agrega las opciones filtradas a la lista
    listaFiltrada.forEach((option) => {
        const li = document.createElement('li');
        li.innerText = option;

        //Redirecciona al hacer click en la opcion
        li.addEventListener('click', () => {
            window.location.href = `https://www.google.com/search?q=${option}`;
        });
        ol.appendChild(li);
    });

    console.log(listaFiltrada);

});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && listaFiltrada.includes(input.value.toLowerCase())) {
        window.location.href = `https://www.google.com/search?q=${input.value.toLowerCase()}`;
    }
});


input.addEventListener('blur', () => {
    setTimeout(() => ol.innerHTML = '', 100);
});

