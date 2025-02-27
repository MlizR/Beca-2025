document.getElementById('mostrar').addEventListener('click', () => {

    fetch('https://api.thedogapi.com/v1/breeds')
    .then(response => {
        if(!response.ok){
            throw new Error('Ha ocurrido un error al mostrar los datos');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('container');

        container.innerHTML = '';

        data.forEach(item => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta';
            tarjeta.innerHTML = `
                <h2>${item.name}</h2>
                <p>Criado para: ${item.bred_for} </p>
                <p>Esperanza de vida: ${item.life_span} </p>
            `;
            container.appendChild(tarjeta);
        });

    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud: ', error);
    });

});
