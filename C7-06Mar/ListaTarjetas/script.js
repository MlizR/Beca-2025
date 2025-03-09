fetch("data.json")
.then(response => {
    if(!response.ok){
        throw new Error('Ha ocurrido un error al mostrar los datos');
    }
    return response.json();
})
.then(data => {
    const cardContainer = document.querySelector('.card-container');

    cardContainer.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement("section");
        card.className = "card";
        card.innerHTML = `  
            <img class="logo" src="${item.logo}" alt="Logo de la empresa ${item.company}">
            <header class="items">
                <h3 class="company">${item.company}</h3>
                ${item.newAttribute ? '<p class="new">NEW!</p>' : ''}
                ${item.featured ? '<p class="featured">FEATURED</p>' : ''}
            </header>
            <h3 class="position">${item.position}</h3>
            <section class="info-job">
                <p>${item.postedAt} • ${item.contract} • ${item.location}</p>
            </section>
            <section class="tags">
                
                    <p class="p-style">${item.role}</p>
                    <p class="p-style">${item.level}</p>
                
            </section>
        `;

        if(item.languages && item.languages.length > 0){
            const languagesList = document.createElement('ul');
            item.languages.forEach(lang => {
                const listItem = document.createElement('li');
                listItem.textContent = lang;
                languagesList.appendChild(listItem);
            });
            card.querySelector('.tags').appendChild(languagesList);
        }
        cardContainer.appendChild(card);
    });
})
.catch(error => {
    console.log('Hubo un problema con la solicitud: ', error);
});