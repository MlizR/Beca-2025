const box = document.querySelector('.box');
let styles = window.getComputedStyle(box);

const Ptop = styles.getPropertyValue('top');
console.log('top = ', styles.getPropertyValue('top'));

document.addEventListener("keydown", (event) => {
    if(event.code === "Space"){
        console.log(box);
        box.style.top = parseInt(Ptop) + 10 +"px"; 
        
        console.log(box.style.top);
    }
});