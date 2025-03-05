const input = document.getElementById('buscar');
const opciones = document.querySelectorAll('#animales option');
let url = '';


    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const animalElegido = input.value;
            
            opciones.forEach(opcion => {
                if (opcion.value === animalElegido) {
                     url = opcion.getAttribute('data-url');
                }
            });
            

            if(url){
                window.location.href = url;
            }
            
        }
    });


