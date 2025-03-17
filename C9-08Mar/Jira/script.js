const cards = document.querySelectorAll('.card');
const containers = document.querySelectorAll('.item-column');

// Arastrar tarjetas
cards.forEach(card =>{
    card.addEventListener('dragstart', (e) => {
        e.target.classList.add('dragging');
    });

    card.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

// Permite que las tarjetas se coloquen en nuevas posiciones
containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clienttY);
        const draggingCard = document.querySelector('.dragging');
        if(draggingCard) {
            if(afterElement == null){
                container.appendChild(draggingCard);
            } else{
                container.insertBefore(draggingCard, afterElement);
            }
        }
    });
    
});

function getDragAfterElement(container, y){
    const draggableElements = Array.from(container.querySelectorAll('.card:not(.dragging)'));

  if (draggableElements.length === 0) return null; // Aseguramos que no sea null
  
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top -box.height / 2;
        if(offset < 0 && offset > closest.offset){
            return{ offset: offset, element: child};
        } else{
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY }).element;
}





