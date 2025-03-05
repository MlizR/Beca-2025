function loginUser(){
    const userCorrect = 'lizmr';
    const passCorrect = '260802';

    const dialog = document.getElementById('error');
    const btnClose = document.getElementById('closeDialog');
    
    const user =  document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if(user === userCorrect && pass === passCorrect){
        window.location.href = "./pages/inicio.html";
    }
    else{
        dialog.showModal();
    }

    btnClose.addEventListener("click", function() {
        dialog.close();
    });
}




