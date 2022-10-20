function admin(){
    let usuario = document.getElementById('user').value;
    let password = document.getElementById('pass').value;

    let user = 'Alexander';
    let pass = 'Arkalay';

    if (usuario == user && password == pass){
        alert ('ES CORRECTO PERO LA PAGINA ESTA EN PROCESO XD');
        location.href = 'inicio2.html';
    }else{
        alert ('Parece que eres un alumno, ahora te voy a regresar .-.');
        location.href = 'index.html';
    }
}